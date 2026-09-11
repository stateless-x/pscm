import type { Machine } from "@/data/machines";
import { machineDisplayName } from "@/data/machines";
import { Link } from "@/i18n/navigation";
import { MachineImage } from "./MachineImage";
import { ArrowUpRight } from "lucide-react";

// Buyer-first card: gradient identity + popular-alias name + one-line
// benefit. That's it. Status badge, model code, category, MADE IN
// THAILAND stamp, nameplate, bottom CTA bar — all removed. They were
// noise on a scannable grid. They live on the product detail page
// where buyers are evaluating, not scanning.
//
// Whole card is the link. Hover lifts the image block (slight rise + soft
// shadow), tightens the ring, and scales the image subtly; no SaaS-glow.
export function MachineCard({
  machine,
  locale,
  priority,
  headingLevel = "h3",
}: {
  machine: Machine;
  locale: "th" | "en";
  priority?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  const name = machineDisplayName(machine, locale);
  const Heading = headingLevel;

  return (
    <Link
      href={`/products/${machine.slug}` as const}
      className="job-sheet group flex h-full flex-col p-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
    >
      <div className="relative z-[1] overflow-hidden bg-bg transition duration-300 group-hover:-translate-y-1">
        <div className="transition duration-300 group-hover:scale-[1.02]">
          <MachineImage machine={machine} locale={locale} priority={priority} />
        </div>
      </div>
      <div className="relative z-[1] flex flex-1 flex-col gap-2 px-2 pb-2 pt-3">
        <div className="flex items-start justify-between gap-3">
          <div className="mono text-[10px] font-medium uppercase tracking-[0.18em] text-cobalt">{machine.model ?? machine.slug}</div>
          <ArrowUpRight size={17} className="text-amber-strong transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </div>
        <Heading className="text-lg font-bold leading-snug text-text transition group-hover:text-cobalt">
          {name}
        </Heading>
        <p className="text-sm leading-snug text-text-muted line-clamp-2">
          {machine.short[locale]}
        </p>
      </div>
    </Link>
  );
}
