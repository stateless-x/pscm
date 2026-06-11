import type { Metadata } from "next";
import { Suspense } from "react";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { buildAlternates } from "@/lib/alternates";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { LineIcon } from "@/components/LineIcon";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: t("h1"),
    description: t("sub"),
    alternates: buildAlternates(locale, "contact"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const tCommon = await getTranslations("common");
  const loc = locale as "th" | "en";

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
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact info */}
          <div className="space-y-6">
            {/* LINE — promoted as the primary contact channel for TH B2B */}
            <a
              href={SITE.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-[#06C755] p-4 text-white transition hover:bg-[#05a648] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/15">
                <LineIcon size={26} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="text-base font-semibold leading-tight">
                  {tCommon("chatOnLine")}
                </div>
                <div className="mono mt-0.5 text-[12px] tracking-wider text-white/85">
                  {tCommon("lineHandle")}: {SITE.lineId}
                </div>
              </div>
              <ArrowUpRight
                size={20}
                className="shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>

            <ContactRow
              icon={MapPin}
              label={tCommon("address")}
              value={SITE.address[loc]}
            />
            <ContactRow
              icon={Phone}
              label={tCommon("phone")}
              value={
                <div className="space-y-1">
                  {SITE.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="mono block text-base text-text hover:text-amber-strong"
                    >
                      {p.display}
                    </a>
                  ))}
                </div>
              }
            />
            <ContactRow
              icon={Mail}
              label={tCommon("email")}
              value={
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-base text-text hover:text-amber-strong"
                >
                  {SITE.email}
                </a>
              }
            />
            <ContactRow
              icon={Clock}
              label={tCommon("hours")}
              value={SITE.hours[loc]}
            />

            <div className="space-y-2">
              <div className="aspect-[4/3] w-full overflow-hidden border border-line bg-paper-2">
                <iframe
                  src={SITE.mapEmbedSrc}
                  className="h-full w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={tCommon("mapPin")}
                />
              </div>
              <a
                href={SITE.mapShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-amber-strong"
              >
                <MapPin size={14} aria-hidden="true" />
                {tCommon("openInGoogleMaps")}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="border border-line bg-paper p-6 md:p-8">
            <h2 className="text-xl font-semibold text-text">
              {t("formTitle")}
            </h2>
            <div className="mt-6">
              <Suspense fallback={<div className="h-96" />}>
                <ContactForm locale={loc} />
              </Suspense>
            </div>
          </div>
        </div>
      </Section>
      <LocalBusinessJsonLd locale={loc} />
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4">
      <div className="grid h-10 w-10 place-items-center bg-paper-2 ring-1 ring-line">
        <Icon size={18} className="text-text-muted" aria-hidden />
      </div>
      <div>
        <div className="eyebrow text-text-muted">{label}</div>
        <div className="mt-1 text-base text-text">{value}</div>
      </div>
    </div>
  );
}
