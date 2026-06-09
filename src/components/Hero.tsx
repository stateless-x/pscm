import { useTranslations } from "next-intl";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/site";
import { Container } from "./Container";
import { BallMillDrawing } from "./BallMillDrawing";
import { cn } from "@/lib/cn";

export function Hero({
  eyebrow,
  title,
  subtitle,
  variant = "default",
  showPrimaryCTAs = true,
  showDrawing = true,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  variant?: "default" | "compact";
  showPrimaryCTAs?: boolean;
  showDrawing?: boolean;
  children?: React.ReactNode;
}) {
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const phone = SITE.phones[0];
  const isDefault = variant === "default";

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-bg text-text-invert",
        isDefault ? "pt-14 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-32" : "py-14 md:py-20",
      )}
    >
      {/* Soft technical grid — very subtle, no measurement ornament */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-12 h-[520px] w-[520px] rounded-full bg-amber/[0.06] blur-3xl"
      />

      <Container className="relative">
        <div
          className={cn(
            "grid items-center gap-10",
            isDefault && showDrawing
              ? "lg:grid-cols-[1.15fr_1fr] lg:gap-16"
              : "",
          )}
        >
          <div className={cn(isDefault ? "max-w-3xl" : "max-w-3xl")}>
            {eyebrow && (
              <p className="rise-in section-no text-amber/90">{eyebrow}</p>
            )}
            <h1
              className={cn(
                "rise-in rise-in-delay-1 mt-6 font-bold text-text-invert",
                isDefault
                  ? "display-h1"
                  : "text-[clamp(1.875rem,4vw,2.75rem)] leading-[1.05] tracking-tight",
              )}
            >
              {title}
            </h1>
            {subtitle && (
              <p className="rise-in rise-in-delay-2 mt-7 max-w-xl text-base md:text-lg leading-relaxed text-text-invert/80">
                {subtitle}
              </p>
            )}

            {showPrimaryCTAs && (
              <div className="rise-in rise-in-delay-3 mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[52px] items-center gap-2 bg-amber px-7 text-[15px] font-semibold text-ink hover:bg-amber-strong"
                >
                  {t("quote")}
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={`tel:${phone.tel}`}
                  className="inline-flex min-h-[52px] items-center gap-2 border border-line-dark bg-transparent px-5 text-[15px] font-medium text-text-invert hover:border-amber hover:text-amber"
                >
                  <Phone size={18} />
                  <span className="mono">{phone.display}</span>
                </a>
                <a
                  href={SITE.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] items-center gap-2 bg-[#06C755] px-5 text-[15px] font-semibold text-white hover:bg-[#05a648]"
                >
                  <MessageCircle size={18} />
                  {t("line")}
                </a>
              </div>
            )}
          </div>

          {isDefault && showDrawing && (
            <div className="relative hidden lg:block">
              <div className="stamp-in text-amber/85">
                <BallMillDrawing className="h-auto w-full" />
              </div>
              {/* Single mono caption below the drawing — real model code, no fabricated data */}
              <div className="mt-4 flex items-baseline justify-between border-t border-line-dark/70 pt-3 text-text-invert-muted">
                <span className="mono text-[10px] tracking-[0.22em] uppercase">
                  PSCM-BM — Ball Mill
                </span>
                <span className="mono text-[10px] tracking-[0.22em] uppercase">
                  {tCommon("madeInThailand")}
                </span>
              </div>
            </div>
          )}
        </div>

        {children && <div className="mt-12">{children}</div>}
      </Container>
    </section>
  );
}
