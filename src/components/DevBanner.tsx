import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "./Container";

// Temporary notice while the catalogue lacks real photos. Shown on the
// products list and product detail pages only (where missing images
// actually matter to the buyer). Not on home, about, service, custom,
// solutions, or contact.
//
// Typography note: this banner is Thai-dominant (label + body + CTA),
// so we use label-th utility (Plex Sans Thai 500, tracked) instead of
// .mono. Mono only renders Latin/digits well; Thai falling through to
// system mono is ugly. Remove this component when real photos land.
export function DevBanner() {
  const t = useTranslations("devBanner");
  return (
    <div className="border-b border-line-dark bg-[var(--amber-soft)] text-[#5b4307]">
      <Container className="flex flex-col gap-1.5 py-2.5 md:flex-row md:items-center md:gap-4 md:py-2.5">
        <span className="label-th shrink-0 text-[12px] font-semibold uppercase tracking-[0.08em] text-amber-strong">
          {t("label")}
        </span>
        <span className="label-th flex-1 text-[14px] leading-snug text-[#3f2f04]">
          {t("body")}
        </span>
        <Link
          href="/contact"
          className="label-th shrink-0 self-start text-[13px] font-semibold text-amber-strong underline-offset-2 hover:underline md:self-auto"
        >
          {t("cta")} →
        </Link>
      </Container>
    </div>
  );
}
