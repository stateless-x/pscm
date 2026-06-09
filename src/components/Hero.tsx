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

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-bg text-text-invert",
        variant === "default" ? "pt-16 pb-20 md:pt-24 md:pb-28" : "py-14 md:py-20",
      )}
    >
      {/* Soft technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-amber/10 blur-3xl"
      />

      <Container className="relative">
        {eyebrow && (
          <p className="eyebrow rise-in text-text-invert-muted">{eyebrow}</p>
        )}
        <h1
          className={cn(
            "rise-in rise-in-delay-1 mt-4 font-bold leading-[1.1] tracking-tight text-text-invert",
            variant === "default"
              ? "text-[clamp(2rem,5vw,3.75rem)]"
              : "text-[clamp(1.75rem,4vw,2.75rem)]",
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="rise-in rise-in-delay-2 mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-text-invert/85">
            {subtitle}
          </p>
        )}

        {showPrimaryCTAs && (
          <div className="rise-in rise-in-delay-3 mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center gap-2 bg-amber px-6 text-sm font-semibold text-ink hover:bg-amber-strong"
            >
              {t("quote")}
              <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${phone.tel}`}
              className="inline-flex min-h-[48px] items-center gap-2 border border-line-dark bg-transparent px-5 text-sm font-medium text-text-invert hover:border-amber hover:text-amber"
            >
              <Phone size={18} />
              <span className="mono">{phone.display}</span>
            </a>
            <a
              href={SITE.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2 bg-[#06C755] px-5 text-sm font-semibold text-white hover:bg-[#05a648]"
            >
              <MessageCircle size={18} />
              {t("line")}
            </a>
          </div>
        )}

        {children && <div className="mt-12">{children}</div>}
      </Container>
    </section>
  );
}
