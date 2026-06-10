// Blog post loader. Reads markdown from /docs/blog at build time.
// Server-only — uses node:fs, never bundled for client.
//
// Each post: YAML frontmatter (see docs/blog/_template.md for schema)
// + Markdown body. Renders to HTML via `marked`.

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const POSTS_DIR = join(process.cwd(), "docs/blog");

// Files in /docs/blog that are scaffolding, not posts.
const NON_POSTS = new Set([
  "_template.md",
  "seo-topic-list.md",
]);

export type PostLocale = "th" | "en";

export interface PostFrontmatter {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  publishDate?: string;
  tags?: string[];
  locale: PostLocale;
  template?: string;
  /** Optional: machine slugs this post relates to, for cross-linking. */
  relatedMachines?: string[];
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  html: string;
  /** Raw markdown, exposed for things like reading-time calc if needed. */
  raw: string;
  readingTimeMinutes: number;
}

let cache: Post[] | null = null;

function loadAll(): Post[] {
  if (cache) return cache;

  const filenames = readdirSync(POSTS_DIR).filter(
    (f) => f.endsWith(".md") && !NON_POSTS.has(f),
  );

  const posts = filenames.map((filename): Post => {
    const raw = readFileSync(join(POSTS_DIR, filename), "utf8");
    const { data, content } = matter(raw);
    const slug = filename.replace(/\.md$/, "");
    const html = marked.parse(content, { async: false }) as string;

    // YAML 1.1 auto-parses `2026-06-10` to a JS Date. Normalise to an
    // ISO yyyy-mm-dd string so downstream renders + sitemap can rely on
    // a stable string type.
    const rawDate = (data as { publishDate?: unknown }).publishDate;
    const publishDate =
      rawDate instanceof Date
        ? rawDate.toISOString().slice(0, 10)
        : typeof rawDate === "string"
        ? rawDate
        : undefined;

    const fm: PostFrontmatter = {
      ...(data as PostFrontmatter),
      publishDate,
    };

    // Rough reading time. Thai doesn't space-separate; estimate by chars / 350.
    // For English use space-separated word count / 200.
    const isThai = fm.locale === "th";
    const readingTimeMinutes = isThai
      ? Math.max(1, Math.round(content.length / 350))
      : Math.max(1, Math.round(content.split(/\s+/).length / 200));

    return {
      slug,
      frontmatter: fm,
      html,
      raw: content,
      readingTimeMinutes,
    };
  });

  // Newest first by publishDate, falls back to slug for stability.
  posts.sort((a, b) => {
    const da = a.frontmatter.publishDate ?? "";
    const db = b.frontmatter.publishDate ?? "";
    if (db !== da) return db.localeCompare(da);
    return a.slug.localeCompare(b.slug);
  });

  cache = posts;
  return posts;
}

export function getAllPosts(locale?: PostLocale): Post[] {
  const all = loadAll();
  return locale ? all.filter((p) => p.frontmatter.locale === locale) : all;
}

export function getPostBySlug(
  slug: string,
  locale?: PostLocale,
): Post | undefined {
  return getAllPosts(locale).find((p) => p.slug === slug);
}

export function getPostsForMachine(
  machineSlug: string,
  locale: PostLocale,
  limit = 3,
): Post[] {
  return getAllPosts(locale)
    .filter((p) => p.frontmatter.relatedMachines?.includes(machineSlug))
    .slice(0, limit);
}
