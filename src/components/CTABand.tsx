import { useTranslations } from "next-intl";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/site";
import { Container } from "./Container";

export function CTABand({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  const t = useTranslations();
  const phone = SITE.phones[0];
  const headline = title ?? t("home.ctaTitle");

  return (
    <section className="blueprint-grid border-y-[10px] border-amber bg-bg text-text-invert">
      <Container className="py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow text-amber">
              {t("nav.contact")}
            </p>
            <h2 className="mt-4 max-w-3xl text-[clamp(2rem,4.5vw,4rem)] font-bold leading-[1.08] tracking-tight text-text-invert">
              {headline}
            </h2>
            {subtitle && (
              <p className="mt-3 max-w-xl text-base text-text-invert/80">
                {subtitle}
              </p>
            )}
          </div>
          {/* Full-width stacked buttons on mobile (clean, tap-friendly),
              inline auto-width row from sm up. justify-center keeps content
              centered when buttons go full-width. */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="kiln-stamp inline-flex min-h-[52px] items-center justify-center gap-2 bg-amber px-6 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-amber-strong hover:text-white"
            >
              {t("nav.quote")}
              <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${phone.tel}`}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 border border-line-dark bg-transparent px-5 text-sm font-medium text-text-invert hover:border-amber hover:text-amber"
            >
              <Phone size={18} />
              <span className="mono">{phone.display}</span>
            </a>
            <a
              href={SITE.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-[#06C755] px-5 text-sm font-bold text-[#062b16] hover:bg-[#05b94e]"
            >
              <MessageCircle size={18} />
              {t("nav.line")}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
