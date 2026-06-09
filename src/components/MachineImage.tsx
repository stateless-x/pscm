import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Machine } from "@/data/machines";
import { StageIcon } from "./StageIcon";
import { cn } from "@/lib/cn";

// Locked 4:3 aspect ratio. If images[0] exists, render via next/image.
// Otherwise, a typed placeholder, never collapses layout.
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

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
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
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-text-invert-muted">
            <StageIcon
              stage={machine.stage}
              size={48}
              className="text-text-invert-muted/70"
            />
            <span className="mono text-xs tracking-wider uppercase">
              {machine.model ?? machine.slug}
            </span>
            <span className="px-4 text-center text-sm text-text-invert/80">
              {name}
            </span>
            <span className="absolute bottom-2 right-3 mono text-[10px] tracking-wider text-text-invert-muted/60">
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
