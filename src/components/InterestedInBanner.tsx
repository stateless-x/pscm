"use client";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { machineBySlug } from "@/data/machines";

// Reads `?ref=<slug>` from the URL (set by product-page CTAs) and shows
// a small acknowledgement banner: "We see you're interested in X. Reach
// out via LINE or phone." Replaces the old form's job of pre-filling the
// "interested in" line.
export function InterestedInBanner({ locale }: { locale: "th" | "en" }) {
  const t = useTranslations("contact");
  const params = useSearchParams();
  const ref = params.get("ref");
  const machine = ref ? machineBySlug(ref) : undefined;
  if (!machine) return null;

  return (
    <div className="border-l-4 border-amber bg-[var(--amber-soft)] px-4 py-3 text-[#5b4307]">
      <div className="mono text-[10px] uppercase tracking-[0.18em] text-amber-strong">
        {t("interestedIn")}
      </div>
      <div className="mt-1 text-base font-semibold leading-tight text-text">
        {machine.name[locale]}{" "}
        <span className="mono text-sm font-normal text-text-muted">
          ({machine.model ?? machine.slug.toUpperCase()})
        </span>
      </div>
    </div>
  );
}
