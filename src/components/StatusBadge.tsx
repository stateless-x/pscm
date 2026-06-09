import { useTranslations } from "next-intl";
import type { MachineStatus } from "@/data/machines";
import { cn } from "@/lib/cn";

const COLORS: Record<MachineStatus, string> = {
  available:
    "bg-[var(--status-available)]/15 text-[var(--status-available)] ring-[var(--status-available)]/30",
  made_to_order:
    "bg-amber/15 text-amber-strong ring-amber/40",
  on_request:
    "bg-[var(--status-request)]/15 text-[var(--status-request)] ring-[var(--status-request)]/30",
};

export function StatusBadge({
  status,
  className,
}: {
  status: MachineStatus;
  className?: string;
}) {
  const t = useTranslations("status");
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset",
        COLORS[status],
        className,
      )}
    >
      <span
        className="inline-block h-1.5 w-1.5 rounded-full bg-current"
        aria-hidden="true"
      />
      {t(status)}
    </span>
  );
}
