import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { machines } from "@/data/machines";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import { ProductsExplorer } from "@/components/ProductsExplorer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "products" });
  return { title: t("h1"), description: t("sub") };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("products");
  const loc = locale as "th" | "en";

  const sorted = [...machines].sort((a, b) => a.order - b.order);

  return (
    <>
      <Hero
        eyebrow={t("eyebrow")}
        title={t("h1")}
        subtitle={t("sub")}
        variant="compact"
        showPrimaryCTAs={false}
      />
      <Section variant="light">
        <ProductsExplorer machines={sorted} locale={loc} />
      </Section>
      <CTABand />
    </>
  );
}
