import { useTranslations } from "next-intl";
import type { Machine } from "@/data/machines";
import { StatusBadge } from "./StatusBadge";
import { cn } from "@/lib/cn";

// The signature equipment data plate (spec §2, §9).
// Used at the top of MachineCard and on product hero.
export function Nameplate({
  machine,
  locale,
  size = "card",
  className,
}: {
  machine: Machine;
  locale: "th" | "en";
  size?: "card" | "hero";
  className?: string;
}) {
  const t = useTranslations("common");
  const isHero = size === "hero";

  return (
    <div
      className={cn(
        "rivets-4 relative bg-surface text-text-invert ring-1 ring-line-dark",
        isHero ? "px-5 py-4 md:px-6 md:py-5" : "px-4 py-3",
        className,
      )}
    >
      <span className="rivet-bl" aria-hidden="true" />
      <span className="rivet-br" aria-hidden="true" />

      {/* inner hairline border */}
      <div className="pointer-events-none absolute inset-2 ring-1 ring-line-dark/60" />

      <div className="relative flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="mono text-[10px] tracking-[0.2em] uppercase text-text-invert-muted">
            {machine.model ?? machine.slug.toUpperCase()}
          </div>
          <div
            className={cn(
              "mt-1 font-semibold leading-tight text-text-invert",
              isHero ? "text-lg md:text-xl" : "text-sm",
            )}
          >
            {machine.category[locale]}
          </div>
        </div>
        <StatusBadge status={machine.status} />
      </div>

      <div className="relative mt-3 flex items-center justify-between border-t border-line-dark/60 pt-2">
        <span className="mono text-[10px] tracking-[0.2em] uppercase text-text-invert-muted">
          {t("madeInThailand")}
        </span>
        <span className="mono text-[10px] tracking-[0.2em] uppercase text-amber/80">
          PSCM
        </span>
      </div>
    </div>
  );
}
