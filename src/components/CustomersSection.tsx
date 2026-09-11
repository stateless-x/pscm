import { getLocale, getTranslations } from "next-intl/server";
import { Section } from "./Section";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, Factory, Globe2, GraduationCap, Palette } from "lucide-react";
import { SITE } from "@/lib/site";

export async function CustomersSection({ number }: { number?: string }) {
  const t = await getTranslations("home");
  const locale = (await getLocale()) as "th" | "en";
  const categories = [
    {
      icon: Palette,
      titleKey: "customersStudioTitle",
      bodyKey: "customersStudioBody",
    },
    {
      icon: GraduationCap,
      titleKey: "customersEducationTitle",
      bodyKey: "customersEducationBody",
    },
    {
      icon: Factory,
      titleKey: "customersFactoryTitle",
      bodyKey: "customersFactoryBody",
    },
    {
      icon: Globe2,
      titleKey: "customersInternationalTitle",
      bodyKey: "customersInternationalBody",
    },
  ] as const;

  return (
    <Section
      number={number}
      eyebrow={t("customersEyebrow")}
      title={t("customersTitle")}
      subtitle={SITE.marketPositioning.audienceFit[locale]}
      variant="alt"
    >
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {categories.map(({ icon: Icon, titleKey, bodyKey }, i) => (
          <li
            key={titleKey}
            className="job-sheet flex min-h-56 flex-col p-6"
          >
            <div className="relative z-[1] flex items-start justify-between">
              <Icon size={24} className="text-cobalt" aria-hidden />
              <span className="mono text-xs text-amber-strong">0{i + 1}</span>
            </div>
            <h3 className="relative z-[1] mt-8 text-lg font-semibold leading-snug text-text">
              {t(titleKey)}
            </h3>
            <p className="relative z-[1] mt-3 text-sm leading-relaxed text-text-muted">
              {t(bodyKey)}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-8 border border-line-dark bg-bg px-6 py-5 text-text-invert md:flex md:items-center md:justify-between md:gap-8">
        <p className="max-w-3xl text-sm leading-relaxed text-text-invert/80 md:text-base">
          {SITE.marketPositioning.thailandBoundary[locale]}
        </p>
        <span className="label-th mt-4 block shrink-0 text-xs font-semibold tracking-[0.08em] text-amber md:mt-0">
          {t("customersServiceArea")}
        </span>
      </div>

      <div className="mt-8 flex justify-end">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-text hover:text-amber-strong"
        >
          {t("customersCta")}
          <ArrowUpRight
            size={16}
            className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </Section>
  );
}
