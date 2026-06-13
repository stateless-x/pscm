import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { buildAlternates } from "@/lib/alternates";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { TrustBar } from "@/components/TrustBar";
import { WorkshopImage } from "@/components/WorkshopImage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: t("h1"),
    description: t("p1"),
    alternates: buildAlternates(locale, "about"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const tImg = await getTranslations("images");

  return (
    <>
      <Hero
        eyebrow={t("eyebrow")}
        title={t("h1")}
        variant="compact"
        showPrimaryCTAs={false}
        image="/assets/team.webp"
        imageAlt={tImg("teamAlt")}
        imagePosition="center 20%"
        overlay="soft"
      />
      <TrustBar />
      <Section variant="light">
        <div className="prose-readable max-w-3xl space-y-6 text-base md:text-lg leading-relaxed text-text">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
        </div>

        <figure className="my-12">
          <WorkshopImage
            src="installed.webp"
            alt={tImg("installedAlt")}
            className="aspect-[16/9] w-full"
          />
        </figure>

        <div className="prose-readable max-w-3xl space-y-6 text-base md:text-lg leading-relaxed text-text">
          <h2 className="text-2xl font-semibold text-text">
            {t("h2standards")}
          </h2>
          <p>{t("pStandards")}</p>

          <h2 className="mt-12 text-2xl font-semibold text-text">
            {t("h2beyond")}
          </h2>
          <p>{t("pBeyond")}</p>

          <h2 className="mt-12 text-2xl font-semibold text-text">
            {t("h2promise")}
          </h2>
          <p>{t("pPromise")}</p>
        </div>
      </Section>
      <CTABand />
    </>
  );
}
