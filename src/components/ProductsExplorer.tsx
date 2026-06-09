"use client";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import type { Machine, Stage } from "@/data/machines";
import { allStages } from "@/data/machines";
import { MachineCard } from "./MachineCard";
import { CardGrid } from "./CardGrid";
import { cn } from "@/lib/cn";

export function ProductsExplorer({
  machines,
  locale,
}: {
  machines: Machine[];
  locale: "th" | "en";
}) {
  const tStage = useTranslations("stage");
  const tProducts = useTranslations("products");
  const [stage, setStage] = useState<Stage | "all">("all");

  const stagesWithMachines = useMemo(
    () => allStages.filter((s) => machines.some((m) => m.stage === s)),
    [machines],
  );

  const visible = useMemo(
    () =>
      stage === "all" ? machines : machines.filter((m) => m.stage === stage),
    [stage, machines],
  );

  return (
    <>
      <div className="mb-8">
        <div className="eyebrow mb-3 text-text-muted">
          {tProducts("filterByStage")}
        </div>
        <div className="flex flex-wrap gap-2">
          <FilterChip
            active={stage === "all"}
            onClick={() => setStage("all")}
            label={tProducts("filterAll")}
          />
          {stagesWithMachines.map((s) => (
            <FilterChip
              key={s}
              active={stage === s}
              onClick={() => setStage(s)}
              label={tStage(s)}
            />
          ))}
        </div>
      </div>
      {visible.length === 0 ? (
        <p className="py-12 text-center text-text-muted">
          {tProducts("noResults")}
        </p>
      ) : (
        <CardGrid>
          {visible.map((m, i) => (
            <MachineCard
              key={m.slug}
              machine={m}
              locale={locale}
              priority={i < 3}
            />
          ))}
        </CardGrid>
      )}
    </>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex h-9 items-center px-3 text-xs font-medium ring-1 transition",
        active
          ? "bg-bg text-text-invert ring-bg"
          : "bg-paper text-text ring-line hover:ring-amber",
      )}
    >
      {label}
    </button>
  );
}
