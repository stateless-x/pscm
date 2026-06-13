import { getTranslations } from "next-intl/server";
import { Section } from "./Section";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";

// Customers / social-proof section. The real logos aren't ready yet — we
// have the customers but still need their permission before putting names
// on the site. So instead of faking logos or hiding the section, we show
// honest "coming soon" placeholder tiles. That still does the trust job
// ("they have customers, plural") without claiming anything untrue, and
// it gives a clear slot to drop real logos into later.
//
// To go live: replace the placeholder tiles with real <Image> logos and
// drop the comingSoon line.
export async function CustomersSection({ number }: { number?: string }) {
  const t = await getTranslations("home");

  const PLACEHOLDER_COUNT = 6;

  return (
    <Section
      number={number}
      eyebrow={t("customersEyebrow")}
      title={t("customersTitle")}
      subtitle={t("customersSub")}
      variant="alt"
    >
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
          <li
            key={i}
            aria-hidden="true"
            className="flex aspect-[3/2] items-center justify-center border border-dashed border-line bg-paper/50"
          >
            <span className="h-8 w-8 rounded-full border border-line/80 opacity-60" />
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
          {t("customersComingSoon")}
        </span>
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
