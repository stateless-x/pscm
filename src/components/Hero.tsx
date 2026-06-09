import { useTranslations } from "next-intl";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/site";
import { Container } from "./Container";
import { cn } from "@/lib/cn";

export function Hero({
  eyebrow,
  title,
  subtitle,
  variant = "default",
  showPrimaryCTAs = true,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  variant?: "default" | "compact";
  showPrimaryCTAs?: boolean;
  children?: React.ReactNode;
}) {
  const t = useTranslations("nav");
  const phone = SITE.phones[0];
  const isDefault = variant === "default";

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-bg text-text-invert",
        isDefault
          ? "pt-14 pb-16 md:pt-20 md:pb-24 lg:pt-28 lg:pb-36"
          : "py-14 md:py-20",
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-[460px] w-[460px] rounded-full bg-amber/[0.06] blur-3xl"
      />

      <Container className="relative">
        <div className="max-w-5xl">
          {eyebrow && (
            <p className="rise-in mono text-[11px] uppercase tracking-[0.22em] text-amber/90">
              {eyebrow}
            </p>
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
            <p className="rise-in rise-in-delay-2 mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-text-invert/80">
              {subtitle}
            </p>
          )}

          {showPrimaryCTAs && (
            <div className="rise-in rise-in-delay-3 mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/contact"
                className="inline-flex min-h-[52px] items-center gap-2 bg-amber px-7 text-[15px] font-semibold text-ink hover:bg-amber-strong"
              >
                {t("quote")}
                <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${phone.tel}`}
                className="mono inline-flex items-center gap-2 text-[15px] text-text-invert/90 hover:text-amber"
              >
                <Phone size={16} />
                {phone.display}
              </a>
              <a
                href={SITE.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[15px] text-text-invert/90 hover:text-amber"
              >
                <MessageCircle size={16} />
                {t("line")}
              </a>
            </div>
          )}
        </div>

        {children && <div className="mt-12">{children}</div>}
      </Container>
    </section>
  );
}
