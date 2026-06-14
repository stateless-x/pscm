import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { buildAlternates } from "@/lib/alternates";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

const SOLUTIONS = [
  { painKey: "s1Pain", solKey: "s1Sol", href: "/products/ball-mill" },
  { painKey: "s2Pain", solKey: "s2Sol", href: "/products/magnetic-sieve" },
  { painKey: "s3Pain", solKey: "s3Sol", href: "/products/filter-press" },
  { painKey: "s4Pain", solKey: "s4Sol", href: "/products/jaw-crusher" },
  { painKey: "s5Pain", solKey: "s5Sol", href: "/products/pug-mill" },
  { painKey: "s6Pain", solKey: "s6Sol", href: "/products/jigger-roller" },
  { painKey: "s7Pain", solKey: "s7Sol", href: "/products/hydraulic-press" },
  { painKey: "s8Pain", solKey: "s8Sol", href: "/products/glaze-spray-booth" },
  { painKey: "s9Pain", solKey: "s9Sol", href: "/service" },
  { painKey: "s10Pain", solKey: "s10Sol", href: "/custom" },
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "solutions" });
  return {
    title: t("h1"),
    description: t("sub"),
    alternates: buildAlternates(locale, "solutions"),
  };
}

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("solutions");
  const tList = await getTranslations("solutionsList");
  const tImg = await getTranslations("images");

  return (
    <>
      <Hero
        eyebrow={t("eyebrow")}
        title={t("h1")}
        subtitle={t("sub")}
        variant="compact"
        showPrimaryCTAs={false}
        image="/assets/installed.webp"
        imageAlt={tImg("installedAlt")}
      />
      <Section variant="light">
        <ol className="grid gap-5">
          {SOLUTIONS.map((s, i) => (
            <li key={s.painKey}>
              <Link
                href={s.href}
                className="group grid gap-4 border border-line bg-paper-2 p-6 transition hover:border-amber hover:bg-paper md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8 md:p-8"
              >
                <span className="mono text-sm uppercase tracking-[0.18em] text-amber-strong md:self-start">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold leading-snug text-text md:text-xl">
                    {tList(s.painKey)}
                  </h3>
                  <p className="text-base leading-relaxed text-text-muted">
                    {tList(s.solKey)}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-base font-medium text-text-muted transition group-hover:text-amber-strong md:justify-self-end">
                  <ArrowRight
                    size={20}
                    className="transition group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </Section>
      <CTABand />
    </>
  );
}
