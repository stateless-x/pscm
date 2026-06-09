import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { buildAlternates } from "@/lib/alternates";
import { featuredMachines } from "@/data/machines";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Section } from "@/components/Section";
import { CardGrid } from "@/components/CardGrid";
import { MachineCard } from "@/components/MachineCard";
import { CTABand } from "@/components/CTABand";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Cog, Wrench, LifeBuoy } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "home" });
  return {
    title: t("h1"),
    description: t("sub"),
    alternates: buildAlternates(locale),
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tCommon = await getTranslations("common");
  const loc = locale as "th" | "en";

  const SERVICES = [
    { icon: Cog, titleKey: "service1Title", bodyKey: "service1Body" },
    { icon: Wrench, titleKey: "service2Title", bodyKey: "service2Body" },
    { icon: LifeBuoy, titleKey: "service3Title", bodyKey: "service3Body" },
  ] as const;

  return (
    <>
      <Hero
        eyebrow={t("eyebrow")}
        title={t("h1")}
        subtitle={t("sub")}
      />

      <TrustBar />

      <Section
        number="01"
        eyebrow={t("featuredEyebrow")}
        title={t("featuredTitle")}
        subtitle={t("featuredSub")}
        variant="light"
      >
        <CardGrid>
          {featuredMachines.map((m, i) => (
            <MachineCard
              key={m.slug}
              machine={m}
              locale={loc}
              priority={i < 3}
            />
          ))}
        </CardGrid>
        <div className="mt-10 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 border border-line bg-paper-2 px-6 py-3 text-sm font-medium text-text hover:border-amber hover:text-amber-strong"
          >
            {tCommon("viewAll")}
            <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      <Section
        number="02"
        eyebrow={t("servicesEyebrow")}
        title={t("servicesTitle")}
        variant="alt"
      >
        <div className="grid divide-y divide-line md:grid-cols-3 md:divide-y-0 md:divide-x">
          {SERVICES.map((s, i) => (
            <div
              key={s.titleKey}
              className="flex flex-col gap-4 py-8 md:py-2 md:px-8 md:first:pl-0 md:last:pr-0"
            >
              <div className="flex items-baseline justify-between">
                <s.icon
                  size={32}
                  className="text-amber-strong"
                  aria-hidden="true"
                />
                <span className="mono text-[10px] uppercase tracking-[0.22em] text-text-muted">
                  {String(i + 1).padStart(2, "0")} / 03
                </span>
              </div>
              <h3 className="text-xl font-semibold leading-tight text-text">
                {t(s.titleKey)}
              </h3>
              <p className="text-[15px] leading-relaxed text-text-muted">
                {t(s.bodyKey)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CTABand title={t("ctaTitle")} subtitle={t("ctaSub")} />
    </>
  );
}
