import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "./Container";

// Temporary site-wide notice while the catalogue lacks real photos.
// Sits between Header and main content. Remove this component (and its
// import in [locale]/layout.tsx) when real photos land.
export function DevBanner() {
  const t = useTranslations("devBanner");
  return (
    <div className="border-b border-line-dark bg-[var(--amber-soft)] text-[#5b4307]">
      <Container className="flex flex-col gap-1.5 py-2.5 md:flex-row md:items-center md:gap-4 md:py-2">
        <span className="mono shrink-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-strong">
          {t("label")}
        </span>
        <span className="flex-1 text-[13px] leading-snug">
          {t("body")}
        </span>
        <Link
          href="/contact"
          className="mono shrink-0 self-start text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-strong underline-offset-2 hover:underline md:self-auto"
        >
          {t("cta")} →
        </Link>
      </Container>
    </div>
  );
}
