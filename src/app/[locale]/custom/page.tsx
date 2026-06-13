import type { Metadata } from "next";
import Image from "next/image";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { buildAlternates } from "@/lib/alternates";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { CTABand } from "@/components/CTABand";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Check } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "custom" });
  return {
    title: t("h1"),
    description: t("sub"),
    alternates: buildAlternates(locale, "custom"),
  };
}

export default async function CustomPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("custom");
  const tImg = await getTranslations("images");

  const whys = [t("why1"), t("why2"), t("why3"), t("why4")];
  const steps = [t("step1"), t("step2"), t("step3"), t("step4"), t("step5")];

  return (
    <>
      <Hero
        eyebrow={t("eyebrow")}
        title={t("h1")}
        subtitle={t("sub")}
        variant="compact"
        image="/assets/handcraft.webp"
        imageAlt={tImg("handcraftAlt")}
      />
      <Section title={t("whyTitle")} variant="light">
        <ul className="grid gap-4 md:grid-cols-2">
          {whys.map((w, i) => (
            <li
              key={i}
              className="flex gap-3 border-l-2 border-amber bg-paper-2 p-5"
            >
              <Check
                className="mt-0.5 shrink-0 text-amber-strong"
                size={20}
                aria-hidden="true"
              />
              <span className="text-base leading-relaxed text-text">{w}</span>
            </li>
          ))}
        </ul>
      </Section>
      <Section title={t("stepsTitle")} variant="alt">
        <ProcessSteps steps={steps} />
      </Section>
      {/* Closing figure: finished ware — the output the machines we build
          produce. Standalone image, no text over it (no overlay needed). */}
      <section className="bg-paper pb-4">
        <Container>
          <div className="relative aspect-[21/9] w-full overflow-hidden bg-paper-2">
            <Image
              src="/assets/material/bisque-ware.webp"
              alt={tImg("bisqueWareAlt")}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>
      <CTABand title={t("ctaTitle")} />
    </>
  );
}
