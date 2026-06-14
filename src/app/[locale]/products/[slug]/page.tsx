import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Check, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { routing } from "@/i18n/routing";
import { buildAlternates } from "@/lib/alternates";
import { machines, machineBySlug } from "@/data/machines";
import { statusConfig } from "@/data/machine-status";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { CardGrid } from "@/components/CardGrid";
import { MachineCard } from "@/components/MachineCard";
import { MachineImage } from "@/components/MachineImage";
import { Nameplate } from "@/components/Nameplate";
import { StageIcon } from "@/components/StageIcon";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/site";
import { ProductJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";
import { getPostsForMachine, type PostLocale } from "@/lib/posts";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    machines.map((m) => ({ locale, slug: m.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const machine = machineBySlug(slug);
  if (!machine) return {};
  const loc = locale as "th" | "en";
  return {
    title: machine.name[loc],
    description: machine.short[loc],
    keywords: machine.seoKeywords[loc],
    alternates: buildAlternates(locale, `products/${machine.slug}`),
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const machine = machineBySlug(slug);
  if (!machine) notFound();
  const loc = locale as "th" | "en";

  const t = await getTranslations("common");
  const tProduct = await getTranslations("product");
  const tStage = await getTranslations("stage");
  const tStatus = await getTranslations("status");

  const ctaLabel = t(statusConfig(machine.status).ctaKey);

  const related = machines
    .filter((m) => m.slug !== machine.slug && m.stage === machine.stage)
    .slice(0, 3);

  const relatedPosts = getPostsForMachine(machine.slug, loc as PostLocale, 3);

  const phone = SITE.phones[0];

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
            <Link href="/products" className="hover:text-amber-strong">
              {loc === "th" ? "เครื่องจักร" : "Machines"}
            </Link>
            <span>/</span>
            <span className="text-text">{machine.name[loc]}</span>
          </nav>
        </Container>
      </div>

      {/* Hero: nameplate + image + key info */}
      <section className="bg-paper">
        <Container className="py-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
            <div>
              <MachineImage
                machine={machine}
                locale={loc}
                priority
                showDisclaimer
              />
            </div>
            <div className="flex flex-col gap-5">
              <Nameplate machine={machine} locale={loc} size="hero" />

              <div className="flex items-center gap-3 text-xs">
                <StageIcon
                  stage={machine.stage}
                  size={16}
                  className="text-amber-strong"
                />
                <span className="eyebrow">{tStage(machine.stage)}</span>
                <span className="text-text-muted">·</span>
                <span className="eyebrow">{tStatus(machine.status)}</span>
              </div>

              <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight text-text">
                {machine.name[loc]}
              </h1>
              <p className="text-lg leading-relaxed text-text-muted">
                {machine.short[loc]}
              </p>

              {/*
                Aliases as a quiet footnote: small, muted, single comma-
                separated line, prefixed with "ฯลฯ:" so it still parses as
                language to search engines but reads as an aside to humans.
                NOT visually hidden (`display:none`/clip/font-size:0) — that
                trips Google's hidden-text spam policy. This is just
                lower-priority body text, which is fully indexable.
              */}
              {machine.aliases && machine.aliases[loc].length > 0 && (
                <p className="text-[11px] leading-snug text-text-muted/65">
                  {t("alsoKnownAs")}: {machine.aliases[loc].join(", ")}
                </p>
              )}

              <div className="rule mt-2 pt-5">
                <div className="eyebrow text-text-muted">{t("process")}</div>
                <p className="mt-2 text-base leading-relaxed text-text">
                  {machine.process[loc]}
                </p>
              </div>

              {/* Full-width stacked on mobile, inline row from sm up. */}
              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={`/contact?ref=${machine.slug}` as const}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-amber px-6 text-sm font-semibold text-ink hover:bg-amber-strong"
                >
                  {ctaLabel}
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={`tel:${phone.tel}`}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 border border-line bg-transparent px-5 text-sm font-medium text-text hover:border-amber hover:text-amber-strong"
                >
                  <Phone size={18} />
                  <span className="mono">{phone.display}</span>
                </a>
                <a
                  href={SITE.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-[#06C755] px-5 text-sm font-semibold text-white hover:bg-[#05a648]"
                >
                  <MessageCircle size={18} />
                  LINE
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features + industries */}
      <Section variant="alt">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            {machine.description && (
              <div className="mb-8">
                <div className="eyebrow text-text-muted">{t("overview")}</div>
                <p className="mt-3 text-base leading-relaxed text-text">
                  {machine.description[loc]}
                </p>
              </div>
            )}
            <div className="eyebrow text-text-muted">{t("features")}</div>
            <ul className="mt-4 space-y-3">
              {machine.features[loc].map((f, i) => (
                <li
                  key={i}
                  className="flex gap-3 border-l-2 border-amber bg-paper p-4"
                >
                  <Check
                    className="mt-0.5 shrink-0 text-amber-strong"
                    size={20}
                    aria-hidden="true"
                  />
                  <span className="text-base leading-relaxed text-text">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm italic text-text-muted">
              {tProduct("askForSpec")}
            </p>
          </div>
          <aside className="space-y-6">
            <Info label={t("model")} value={machine.model ?? "-"} mono />
            <Info label={t("category")} value={machine.category[loc]} />
            <Info label={t("stage")} value={tStage(machine.stage)} />
            <div>
              <div className="eyebrow text-text-muted">{t("industries")}</div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {machine.industries[loc].map((ind) => (
                  <li
                    key={ind}
                    className="border border-line bg-paper px-3 py-1.5 text-xs text-text"
                  >
                    {ind}
                  </li>
                ))}
              </ul>
            </div>

            {/* Spec table: explicitly a "typical industry range", NOT a fixed
                PSCM spec. The note keeps it honest for a build-to-order maker. */}
            {machine.specs && machine.specs.length > 0 && (
              <div>
                <div className="eyebrow text-text-muted">{t("specs")}</div>
                <dl className="mt-3 divide-y divide-line border border-line bg-paper">
                  {machine.specs.map((spec) => (
                    <div
                      key={spec.label.en}
                      className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-3 px-3 py-2.5"
                    >
                      <dt className="text-xs font-medium text-text-muted">
                        {spec.label[loc]}
                      </dt>
                      <dd className="text-xs text-text">{spec.value[loc]}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-2 text-[11px] leading-snug text-text-muted/75">
                  {t("specsNote")}
                </p>
              </div>
            )}
          </aside>
        </div>
      </Section>

      {/* FAQ: honest Q&A, rendered on-page + as FAQPage JSON-LD */}
      {machine.faq && machine.faq.length > 0 && (
        <Section eyebrow={t("faq")} title={machine.name[loc]} variant="light">
          <dl className="mx-auto grid max-w-3xl gap-4">
            {machine.faq.map((item) => (
              <div
                key={item.q.en}
                className="border border-line bg-paper p-5"
              >
                <dt className="text-base font-semibold leading-snug text-text">
                  {item.q[loc]}
                </dt>
                <dd className="mt-2 text-base leading-relaxed text-text-muted">
                  {item.a[loc]}
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      {/* Related blog posts (SEO cross-link: products ↔ articles) */}
      {relatedPosts.length > 0 && (
        <Section
          eyebrow={loc === "th" ? "อ่านเพิ่ม" : "Read more"}
          title={
            loc === "th"
              ? "บทความที่เกี่ยวกับเครื่องนี้"
              : "Articles about this machine"
          }
          variant="alt"
        >
          <div className="mx-auto grid max-w-3xl gap-4">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}` as const}
                className="group flex flex-col gap-2 border border-line bg-paper p-5 transition hover:border-amber hover:bg-paper-2 md:flex-row md:items-center md:justify-between md:gap-6"
              >
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-semibold leading-snug text-text transition group-hover:text-amber-strong md:text-lg">
                    {post.frontmatter.title}
                  </h3>
                  <p className="text-sm leading-snug text-text-muted line-clamp-2">
                    {post.frontmatter.description}
                  </p>
                </div>
                <span className="mono shrink-0 text-[11px] uppercase tracking-[0.18em] text-text-muted group-hover:text-amber-strong">
                  {loc === "th" ? "อ่าน" : "Read"} →
                </span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Related machines */}
      {related.length > 0 && (
        <Section
          eyebrow={loc === "th" ? "เครื่องที่เกี่ยวข้อง" : "Related machines"}
          title={tStage(machine.stage)}
          variant="light"
        >
          <CardGrid>
            {related.map((m) => (
              <MachineCard key={m.slug} machine={m} locale={loc} />
            ))}
          </CardGrid>
          <div className="mt-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-text hover:text-amber-strong"
            >
              ← {tProduct("backToList")}
            </Link>
          </div>
        </Section>
      )}

      <CTABand />

      <ProductJsonLd machine={machine} locale={loc} />
      <FaqJsonLd
        faq={machine.faq?.map((item) => ({
          q: item.q[loc],
          a: item.a[loc],
        }))}
      />
      <BreadcrumbJsonLd
        items={[
          {
            name: loc === "th" ? "หน้าแรก" : "Home",
            url: `${SITE.url}/${loc}/`,
          },
          {
            name: loc === "th" ? "เครื่องจักร" : "Machines",
            url: `${SITE.url}/${loc}/products/`,
          },
          {
            name: machine.name[loc],
            url: `${SITE.url}/${loc}/products/${machine.slug}/`,
          },
        ]}
      />
    </>
  );
}

function Info({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div>
      <div className="eyebrow text-text-muted">{label}</div>
      <div className={`mt-1.5 text-base text-text ${mono ? "mono" : ""}`}>
        {value}
      </div>
    </div>
  );
}
