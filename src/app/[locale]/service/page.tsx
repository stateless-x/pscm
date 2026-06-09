import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { CTABand } from "@/components/CTABand";
import {
  Brain,
  Clock,
  Package,
  CalendarClock,
  type LucideIcon,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "service" });
  return { title: t("h1"), description: t("sub") };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("service");

  const reasons: { icon: LucideIcon; title: string; body: string }[] = [
    { icon: Brain, title: t("why1Title"), body: t("why1Body") },
    { icon: Clock, title: t("why2Title"), body: t("why2Body") },
    { icon: Package, title: t("why3Title"), body: t("why3Body") },
    { icon: CalendarClock, title: t("why4Title"), body: t("why4Body") },
  ];

  return (
    <>
      <Hero
        eyebrow={t("eyebrow")}
        title={t("h1")}
        subtitle={t("sub")}
      />
      <Section title={t("scopeTitle")} variant="light">
        <ul className="grid gap-3">
          <li className="border-l-2 border-amber bg-paper-2 p-4 text-base text-text">
            {t("scope1")}
          </li>
          <li className="border-l-2 border-amber bg-paper-2 p-4 text-base text-text">
            {t("scope2")}
          </li>
        </ul>
      </Section>
      <Section title={t("whyTitle")} variant="alt">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex flex-col gap-3 border border-line bg-paper p-6"
            >
              <r.icon size={28} className="text-amber-strong" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-text">{r.title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">{r.body}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTABand />
    </>
  );
}
