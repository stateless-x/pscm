import {
  Hammer,
  Disc3,
  Tornado,
  Filter,
  Magnet,
  CircleDashed,
  ChevronsDown,
  SprayCan,
  Wind,
  Flame,
  MoveHorizontal,
  type LucideIcon,
} from "lucide-react";
import type { Stage } from "@/data/machines";

const ICONS: Record<Stage, LucideIcon> = {
  crushing: Hammer,
  grinding: Disc3,
  mixing: Tornado,
  filtering: Filter,
  purification: Magnet,
  forming: CircleDashed,
  pressing: ChevronsDown,
  glazing: SprayCan,
  drying: Wind,
  firing: Flame,
  "material-handling": MoveHorizontal,
};

export function StageIcon({
  stage,
  className,
  size = 24,
}: {
  stage: Stage;
  className?: string;
  size?: number;
}) {
  const Icon = ICONS[stage];
  return <Icon className={className} size={size} aria-hidden="true" />;
}
