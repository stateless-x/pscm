import Image from "next/image";
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
  image,
  imageAlt = "",
  imagePosition = "center",
  overlay = "strong",
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  variant?: "default" | "compact";
  showPrimaryCTAs?: boolean;
  /** Optional background photo (path under /public). When set, it sits
   *  behind a dark overlay tuned to keep the headline legible. The hero is
   *  the LCP on every page, so the image is loaded with priority. */
  image?: string;
  imageAlt?: string;
  /** object-position for the background photo (default "center"). Use to
   *  keep the important part of a photo in frame when object-cover crops —
   *  e.g. "center 35%" to keep a standing group's faces visible. */
  imagePosition?: string;
  /** Overlay strength. "strong" (default) maximises text legibility — right
   *  for busy/light photos where the photo is just texture. "soft" lets the
   *  photo show through (e.g. an About hero where seeing the team matters),
   *  darkening mainly the bottom-left where the headline sits. */
  overlay?: "strong" | "soft";
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
          : // Compact heroes get extra min-height when carrying a photo so a
            // standing group shot isn't squeezed to a thin crop band.
            image
            ? "flex items-center py-14 md:py-20 min-h-[340px] md:min-h-[420px]"
            : "py-14 md:py-20",
      )}
    >
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: imagePosition }}
          />
          {/* Dark overlay tuned so text stays legible over busy photos.
              "strong": heavy flat tint + left→right gradient keeping the
              copy column nearly opaque + bottom gradient for the CTAs — the
              photo reads as texture. "soft": lighter tint, darkening mainly
              the bottom-left where the headline sits, so the photo (e.g. the
              team) stays clearly visible up top. */}
          {overlay === "strong" ? (
            <>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-bg/45"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-bg/60 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent"
              />
            </>
          ) : (
            <>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-bg/35"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-bg via-bg/45 to-transparent"
              />
            </>
          )}
        </>
      )}
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
            <p className="rise-in label-th inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-amber/90 before:h-px before:w-8 before:bg-amber/50 before:content-['']">
              {eyebrow}
            </p>
          )}
          <h1
            className={cn(
              "rise-in rise-in-delay-1 mt-7 font-bold text-text-invert md:mt-8",
              isDefault
                ? "display-h1"
                : "text-[clamp(1.875rem,4vw,2.75rem)] leading-[1.15] tracking-tight",
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="rise-in rise-in-delay-2 mt-7 max-w-2xl text-lg leading-relaxed text-text-invert/80 md:mt-8 md:text-xl">
              {subtitle}
            </p>
          )}

          {showPrimaryCTAs && (
            // Stack on mobile (full-width primary button + a grouped row of
            // contact links below it), inline row from sm up. flex-wrap on a
            // single row of mixed-width items orphaned the LINE link on
            // mobile; this keeps everything aligned at every width.
            <div className="rise-in rise-in-delay-3 mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3">
              <Link
                href="/contact"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 bg-amber px-7 text-[15px] font-semibold text-ink hover:bg-amber-strong"
              >
                {t("quote")}
                <ArrowRight size={18} />
              </Link>
              {/* Phone + LINE grouped so they share a row on mobile instead of
                  wrapping independently. */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
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
            </div>
          )}
        </div>

        {children && <div className="mt-12">{children}</div>}
      </Container>
    </section>
  );
}
