// Blog post loader. Reads markdown from /docs/blog at build time.
// Server-only: uses node:fs, never bundled for client.
//
// Each post: YAML frontmatter (see docs/blog/_template.md for schema)
// + Markdown body. Renders to HTML via `marked`, with two
// project-specific touches:
//
//   1. Internal links get locale-prefixed automatically. Authors write
//      `[text](/contact/?ref=foo)` and we render `/<locale>/contact/?ref=foo`.
//      Stops broken links from being a recurring trap for non-tech authors.
//
//   2. Custom callout block syntax for "trap" callouts. Authors write:
//          > [!กับดัก] **กับดักที่ 1: title.** body text...
//      and we render a styled amber-rule callout, not a generic blockquote.

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { Marked, type Tokens, type Parser } from "marked";

const POSTS_DIR = join(process.cwd(), "docs/blog");

// Files in /docs/blog that are scaffolding, not posts.
const NON_POSTS = new Set(["_template.md", "seo-topic-list.md"]);

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

export interface TocEntry {
  id: string;
  text: string;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  /** Body HTML, with the final italic outro paragraph stripped out. */
  html: string;
  /** The final italic outro paragraph as HTML (the soft brand mention + CTA). */
  outroHtml?: string;
  raw: string;
  readingTimeMinutes: number;
  /** H2 headings, in order. Drives the inline TOC. */
  toc: TocEntry[];
}

let cache: Post[] | null = null;

/**
 * Make a stable id from arbitrary heading text. Thai-friendly: collapses
 * whitespace, strips punctuation that breaks anchor URLs, leaves Thai
 * letters intact (URL-encoded by the browser but still readable).
 */
function slugifyHeading(text: string, index: number): string {
  const cleaned = text
    .toLowerCase()
    .replace(/[?!.,:()/"'`]/g, "")
    .replace(/\s+/g, "-")
    .replace(/^-+|-+$/g, "");
  return cleaned || `section-${index + 1}`;
}

/**
 * Build a configured Marked instance per post. Per-post so the locale
 * prefix (which depends on frontmatter) can close over the renderer.
 */
function buildMarked(locale: PostLocale) {
  const m = new Marked({ async: false });

  // Locale-prefix internal links. External links pass through unchanged.
  m.use({
    renderer: {
      link({ href, title, tokens }: Tokens.Link) {
        let finalHref = href;
        // Only rewrite app-internal absolute paths.
        if (href.startsWith("/") && !href.startsWith("//")) {
          // Split path from query/hash so prefix lands cleanly.
          const [pathPart, ...rest] = href.split(/(?=[?#])/);
          // Ensure trailing slash on the path part (matches our static export).
          const withSlash = pathPart.endsWith("/")
            ? pathPart
            : `${pathPart}/`;
          finalHref = `/${locale}${withSlash}${rest.join("")}`;
        }
        const text = (this.parser as unknown as Parser).parseInline(tokens);
        const titleAttr = title ? ` title="${title}"` : "";
        return `<a href="${finalHref}"${titleAttr}>${text}</a>`;
      },

      // Custom callout: `> [!กับดัก] body` -> amber-rule callout.
      // Falls back to a regular blockquote if no marker found.
      blockquote({ tokens }: Tokens.Blockquote) {
        const inner = (this.parser as unknown as Parser).parse(tokens) as string;
        // Look for [!type] in the leading text of the rendered HTML.
        const calloutMatch = inner.match(/^<p>\[!([^\]]+)\]\s*([\s\S]*)/);
        if (calloutMatch) {
          const type = calloutMatch[1].trim();
          const rest = `<p>${calloutMatch[2]}`;
          return `<aside class="callout callout-${type}" role="note">${rest}</aside>`;
        }
        return `<blockquote>${inner}</blockquote>`;
      },
    },
  });

  return m;
}

function loadAll(): Post[] {
  if (cache) return cache;

  const filenames = readdirSync(POSTS_DIR).filter(
    (f) => f.endsWith(".md") && !NON_POSTS.has(f),
  );

  const posts = filenames.map((filename): Post => {
    const raw = readFileSync(join(POSTS_DIR, filename), "utf8");
    const { data, content } = matter(raw);
    const slug = filename.replace(/\.md$/, "");

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

    // Walk H2s for the TOC and assign stable ids. Mutates marked tokens
    // before rendering so the rendered HTML has matching `id=` anchors.
    const marked = buildMarked(fm.locale);
    const tokens = marked.lexer(content);
    const toc: TocEntry[] = [];
    let h2Index = 0;
    for (const tok of tokens) {
      if (tok.type === "heading" && tok.depth === 2) {
        const id = slugifyHeading(tok.text, h2Index++);
        toc.push({ id, text: tok.text });
        // Inject an explicit id onto the heading via a post-render pass.
        // marked doesn't expose a `id` field on heading tokens so we use
        // a renderer override below.
        (tok as { _tocId?: string })._tocId = id;
      }
    }
    // Plug a heading renderer that uses the precomputed id.
    marked.use({
      renderer: {
        heading({ tokens, depth, ...rest }: Tokens.Heading) {
          const id = (rest as { _tocId?: string })._tocId;
          const text = (this.parser as unknown as Parser).parseInline(tokens);
          const idAttr = id ? ` id="${id}"` : "";
          return `<h${depth}${idAttr}>${text}</h${depth}>`;
        },
      },
    });

    const fullHtml = marked.parser(tokens) as string;

    // Split off the trailing italic-only paragraph (the brand/CTA outro)
    // so the page can render it as a distinct visual card instead of a
    // body paragraph the eye skates past.
    const outroRe = /<p>\s*<em>([\s\S]*?)<\/em>\s*<\/p>\s*$/;
    const outroMatch = fullHtml.match(outroRe);
    const html = outroMatch ? fullHtml.replace(outroRe, "") : fullHtml;
    const outroHtml = outroMatch ? `<p>${outroMatch[1]}</p>` : undefined;

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
      outroHtml,
      raw: content,
      readingTimeMinutes,
      toc,
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
