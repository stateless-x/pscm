import { useTranslations } from "next-intl";
import type { Machine } from "@/data/machines";
import { machinePopularName } from "@/data/machines";
import { Link } from "@/i18n/navigation";
import { MachineImage } from "./MachineImage";
import { Nameplate } from "./Nameplate";
import { ArrowUpRight } from "lucide-react";

export function MachineCard({
  machine,
  locale,
  priority,
}: {
  machine: Machine;
  locale: "th" | "en";
  priority?: boolean;
}) {
  const t = useTranslations("common");
  const tStage = useTranslations("stage");
  // Card title uses the most-searched alias (e.g. "บอลมิล" instead of
  // "หม้อบด"). Detail page still shows the formal name as H1.
  const name = machinePopularName(machine, locale);

  return (
    <Link
      href={`/products/${machine.slug}` as const}
      className="group flex h-full flex-col bg-paper-2 ring-1 ring-line transition hover:ring-amber/60 hover:shadow-[0_2px_24px_rgba(232,163,23,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
    >
      <Nameplate machine={machine} locale={locale} />
      <MachineImage machine={machine} locale={locale} priority={priority} />
      <div className="flex flex-1 flex-col gap-3 p-4 md:p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-semibold leading-tight text-text">
            {name}
          </h3>
          <span className="eyebrow shrink-0">
            {tStage(machine.stage)}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-text-muted">
          {machine.short[locale]}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-line pt-3">
          <span className="text-sm font-medium text-text">
            {t("enquire")}
          </span>
          <ArrowUpRight
            size={18}
            className="text-text-muted transition group-hover:text-amber"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}
