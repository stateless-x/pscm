import type { Machine } from "@/data/machines";
import { machinePopularName } from "@/data/machines";
import { Link } from "@/i18n/navigation";
import { MachineImage } from "./MachineImage";

// Buyer-first card: gradient identity + popular-alias name + one-line
// benefit. That's it. Status badge, model code, category, MADE IN
// THAILAND stamp, nameplate, bottom CTA bar — all removed. They were
// noise on a scannable grid. They live on the product detail page
// where buyers are evaluating, not scanning.
//
// Whole card is the link. Hover lifts the border a touch and scales
// the image subtly; no SaaS-glow.
export function MachineCard({
  machine,
  locale,
  priority,
}: {
  machine: Machine;
  locale: "th" | "en";
  priority?: boolean;
}) {
  const name = machinePopularName(machine, locale);

  return (
    <Link
      href={`/products/${machine.slug}` as const}
      className="group flex h-full flex-col gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
    >
      <div className="overflow-hidden ring-1 ring-line/60 transition group-hover:ring-text/30">
        <div className="transition duration-300 group-hover:scale-[1.02]">
          <MachineImage machine={machine} locale={locale} priority={priority} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-semibold leading-snug text-text transition group-hover:text-amber-strong">
          {name}
        </h3>
        <p className="text-sm leading-snug text-text-muted line-clamp-2">
          {machine.short[locale]}
        </p>
      </div>
    </Link>
  );
}
