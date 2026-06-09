import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Machine } from "@/data/machines";
import { StageIcon } from "./StageIcon";
import { PLACEHOLDER_STYLE } from "./placeholder-style";
import { cn } from "@/lib/cn";

// Locked 4:3 aspect ratio. If images[0] exists, render via next/image.
// Otherwise, a stage-typed gradient placeholder, never collapses layout.
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

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-text-invert-muted">
              <div
                className="grid h-16 w-16 place-items-center rounded-full ring-1 ring-white/10"
                style={{ background: style.glow }}
              >
                <StageIcon
                  stage={machine.stage}
                  size={28}
                  className="text-text-invert/80"
                />
              </div>
              <span className="mono text-xs tracking-wider uppercase text-text-invert/60">
                {machine.model ?? machine.slug}
              </span>
              <span className="px-4 text-center text-sm text-text-invert/85">
                {name}
              </span>
            </div>

            <span className="absolute bottom-2 right-3 mono text-[10px] tracking-wider text-text-invert-muted/55">
              {t("photoComing")}
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
