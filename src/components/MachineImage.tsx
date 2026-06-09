import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Machine } from "@/data/machines";
import { StageIcon } from "./StageIcon";
import { PLACEHOLDER_STYLE } from "./placeholder-style";
import { cn } from "@/lib/cn";

// Locked 4:3 aspect ratio. When images[0] exists, render via next/image.
// Otherwise the stage gradient IS the visual (not a placeholder for a
// missing photo) so keep it confident: gradient + accent + grid +
// large stage icon + mono model code. No "photo coming soon" footnote,
// no duplicated machine name (card title already shows it).
//
// `showDisclaimer` renders a small asterisk on the image plus the
// "may not match the real machine" line below. Off by default for
// thumbnails (cards in grids would get too noisy), on for product
// hero where buyers are evaluating spec.
export function MachineImage({
  machine,
  locale,
  className,
  priority,
  showDisclaimer = false,
}: {
  machine: Machine;
  locale: "th" | "en";
  className?: string;
  priority?: boolean;
  showDisclaimer?: boolean;
}) {
  const t = useTranslations("common");
  const hasImage = machine.images.length > 0;
  const name = machine.name[locale];
  const style = PLACEHOLDER_STYLE[machine.stage];
  const modelCode = machine.model ?? machine.slug.toUpperCase();

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {hasImage ? (
          <Image
            src={machine.images[0]}
            alt={`${name}, ${machine.short[locale]}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            priority={priority}
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{ background: style.gradient }}
          >
            {/* Subtle engineering-grid overlay, sells the technical feel */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            {/* Accent glow keyed to stage, position varies for visual rhythm */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse 70% 60% at ${style.glowPos}, ${style.glow} 0%, transparent 65%)`,
              }}
            />

            {/* Large stage icon, dominant element */}
            <div className="absolute inset-0 flex items-center justify-center">
              <StageIcon
                stage={machine.stage}
                size={88}
                className="text-text-invert/45"
              />
            </div>

            {/* Model code mono, anchored bottom-left as if stencilled on */}
            <span className="absolute bottom-3 left-3 mono text-[11px] tracking-[0.18em] uppercase text-text-invert/70">
              {modelCode}
            </span>
          </div>
        )}

        {showDisclaimer && (
          <span
            aria-hidden="true"
            className="absolute top-2 right-2.5 mono text-sm font-semibold text-text-invert/70"
          >
            *
          </span>
        )}
      </div>

      {showDisclaimer && (
        <p className="text-[11px] leading-relaxed text-text-muted">
          {t("imageDisclaimer")}
        </p>
      )}
    </div>
  );
}
