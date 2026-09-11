import { getLocale, getTranslations } from "next-intl/server";
import { Section } from "./Section";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, Factory, GraduationCap, Landmark, Palette } from "lucide-react";

export async function CustomersSection({ number }: { number?: string }) {
  const t = await getTranslations("home");
  const locale = (await getLocale()) as "th" | "en";
  const categories = [
    { icon: Factory, th: "โรงงานเซรามิก", en: "Ceramic factories" },
    { icon: GraduationCap, th: "มหาวิทยาลัยและอาชีวะ", en: "Universities & colleges" },
    { icon: Palette, th: "สตูดิโองานปั้น", en: "Ceramic studios" },
    { icon: Landmark, th: "หน่วยงานราชการ", en: "Government agencies" },
  ];

  return (
    <Section
      number={number}
      eyebrow={t("customersEyebrow")}
      title={t("customersTitle")}
      subtitle={t("customersSub")}
      variant="alt"
    >
      <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {categories.map(({ icon: Icon, ...label }, i) => (
          <li
            key={label.en}
            className="job-sheet flex min-h-36 flex-col justify-between p-5"
          >
            <div className="relative z-[1] flex items-start justify-between">
              <Icon size={24} className="text-cobalt" aria-hidden />
              <span className="mono text-[10px] text-amber-strong">0{i + 1}</span>
            </div>
            <span className="relative z-[1] text-base font-bold leading-snug text-text">
              {label[locale]}
            </span>
          </li>
        ))}
      </ul>

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
