import Image from "next/image";
import { useTranslations } from "next-intl";
import type { Machine } from "@/data/machines";
import { StageIcon } from "./StageIcon";
import { cn } from "@/lib/cn";

// Locked 4:3 aspect ratio. If images[0] exists, render via next/image.
// Otherwise, a typed placeholder, never collapses layout.
export function MachineImage({
  machine,
  locale,
  className,
  priority,
}: {
  machine: Machine;
  locale: "th" | "en";
  className?: string;
  priority?: boolean;
}) {
  const t = useTranslations("common");
  const hasImage = machine.images.length > 0;
  const name = machine.name[locale];

  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden bg-surface",
        className,
      )}
    >
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
    </div>
  );
}
