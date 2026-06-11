import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { buildAlternates } from "@/lib/alternates";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/site";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  FaqJsonLd,
} from "@/components/JsonLd";
import {
  getAllPosts,
  getPostBySlug,
  type PostLocale,
} from "@/lib/posts";
import { machineBySlug, machinePopularName } from "@/data/machines";

export function generateStaticParams() {
  // One static path per (locale × post). Posts know their own locale via
  // frontmatter, so we only emit the route for that locale.
  return getAllPosts().map((post) => ({
    locale: post.frontmatter.locale,
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const post = getPostBySlug(slug, locale as PostLocale);
  if (!post) return {};
  const fm = post.frontmatter;
  return {
    title: fm.title,
    description: fm.description,
    keywords: fm.keywords,
    alternates: buildAlternates(locale, `blog/${slug}`),
    openGraph: {
      type: "article",
      title: fm.title,
      description: fm.description,
      publishedTime: fm.publishDate,
      authors: fm.author ? [fm.author] : undefined,
      tags: fm.tags,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = getPostBySlug(slug, locale as PostLocale);
  if (!post) notFound();
  const loc = locale as "th" | "en";

  const t = await getTranslations("blog");
  const fm = post.frontmatter;

  // Related machines (linked product cards at the bottom of the post)
  const related = (fm.relatedMachines ?? [])
    .map((s) => machineBySlug(s))
    .filter(Boolean)
    .slice(0, 4);

  const postUrl = `${SITE.url}/${loc}/blog/${slug}/`;

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-line bg-paper-2">
        <Container className="py-4">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-text-muted">
            <Link href="/" className="hover:text-amber-strong">
              {loc === "th" ? "หน้าแรก" : "Home"}
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-amber-strong">
              {loc === "th" ? "บทความ" : "Articles"}
            </Link>
            <span>/</span>
            <span className="text-text">{fm.title}</span>
          </nav>
        </Container>
      </div>

      {/* Article head */}
      <article className="bg-paper">
        <Container className="py-10 md:py-14">
          <div className="mx-auto max-w-[42rem]">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-muted">
              {fm.publishDate && (
                <time dateTime={fm.publishDate} className="mono">
                  {fm.publishDate}
                </time>
              )}
              {fm.lastUpdated && fm.lastUpdated !== fm.publishDate && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="mono">
                    {t("updatedOn")}{" "}
                    <time dateTime={fm.lastUpdated}>{fm.lastUpdated}</time>
                  </span>
                </>
              )}
              <span aria-hidden="true">·</span>
              <span>
                {t("readingTime", { minutes: post.readingTimeMinutes })}
              </span>
            </div>

            <h1 className="display-h2 mt-5 text-text">{fm.title}</h1>

            {fm.author && (
              <p className="mt-3 text-sm text-text-muted">
                {t("byAuthor")}{" "}
                <span className="font-semibold text-text">{fm.author}</span>
              </p>
            )}

            {fm.description && (
              <p className="mt-5 text-lg leading-relaxed text-text-muted">
                {fm.description}
              </p>
            )}

            {/* TOC: only show when post has 3+ H2s, otherwise it's noise. */}
            {post.toc.length >= 3 && (
              <nav
                className="blog-toc"
                aria-label={loc === "th" ? "สารบัญ" : "On this page"}
              >
                <div className="blog-toc-label">
                  {loc === "th" ? "ในบทความนี้" : "On this page"}
                </div>
                <ol className="blog-toc-list">
                  {post.toc.map((entry, i) => (
                    <li key={entry.id}>
                      <a href={`#${entry.id}`}>
                        <span className="mono mr-2 text-[10px] text-text-muted">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {entry.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <hr className="my-8 border-line" />

            <div
              className="prose-blog"
              // Markdown is generated at build time from in-repo files we
              // control. Not user content. Safe to render.
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            {/* FAQ section: rendered visibly + emitted as FAQPage schema below */}
            {fm.faq && fm.faq.length > 0 && (
              <section className="mt-12 border-t border-line pt-8">
                <h2 className="display-h2 text-text">
                  {loc === "th" ? "คำถามที่พบบ่อย" : "Frequently asked questions"}
                </h2>
                <dl className="mt-6 grid gap-6">
                  {fm.faq.map((item, i) => (
                    <div key={i}>
                      <dt className="text-lg font-semibold leading-snug text-text">
                        {item.q}
                      </dt>
                      <dd className="mt-2 text-base leading-relaxed text-text-muted">
                        {item.a}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {/* Outro card: brand mention + CTA, visually separated from body */}
            {post.outroHtml && (
              <aside
                className="blog-outro"
                dangerouslySetInnerHTML={{ __html: post.outroHtml }}
              />
            )}

            {fm.tags && fm.tags.length > 0 && (
              <div className="mt-12 flex flex-wrap gap-2 border-t border-line pt-6 text-[11px] text-text-muted">
                {fm.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            )}

            <div className="mt-10">
              <Link
                href="/blog"
                className="text-sm font-medium text-text hover:text-amber-strong"
              >
                {t("backToList")}
              </Link>
            </div>
          </div>
        </Container>
      </article>

      {/* Related machines: cross-link to product pages for SEO juice */}
      {related.length > 0 && (
        <Section
          eyebrow={t("relatedTitle")}
          title={loc === "th" ? "เครื่องที่เกี่ยวกับบทความนี้" : "Machines mentioned in this article"}
          variant="alt"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {related.map(
              (m) =>
                m && (
                  <Link
                    key={m.slug}
                    href={`/products/${m.slug}` as const}
                    className="group flex flex-col gap-2 border border-line bg-paper p-5 transition hover:border-amber hover:bg-paper-2"
                  >
                    <span className="mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                      {m.model ?? m.slug.toUpperCase()}
                    </span>
                    <span className="text-base font-semibold leading-snug text-text transition group-hover:text-amber-strong">
                      {machinePopularName(m, loc)}
                    </span>
                    <span className="text-sm leading-snug text-text-muted line-clamp-2">
                      {m.short[loc]}
                    </span>
                  </Link>
                ),
            )}
          </div>
        </Section>
      )}

      <CTABand />

      <ArticleJsonLd post={post} url={postUrl} locale={loc} />
      <FaqJsonLd post={post} />
      <BreadcrumbJsonLd
        items={[
          {
            name: loc === "th" ? "หน้าแรก" : "Home",
            url: `${SITE.url}/${loc}/`,
          },
          {
            name: loc === "th" ? "บทความ" : "Articles",
            url: `${SITE.url}/${loc}/blog/`,
          },
          { name: fm.title, url: postUrl },
        ]}
      />
    </>
  );
}
