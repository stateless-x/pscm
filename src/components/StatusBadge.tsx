import { useTranslations } from "next-intl";
import { statusConfig, type MachineStatus } from "@/data/machine-status";
import { cn } from "@/lib/cn";

export function StatusBadge({
  status,
  className,
}: {
  status: MachineStatus;
  className?: string;
}) {
  const t = useTranslations("status");
  const config = statusConfig(status);
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset",
        config.badgeClass,
        className,
      )}
    >
      <span
        className="inline-block h-1.5 w-1.5 rounded-full bg-current"
        aria-hidden="true"
      />
      {t(config.labelKey)}
    </span>
  );
}
