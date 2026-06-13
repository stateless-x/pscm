import Image from "next/image";
import { cn } from "@/lib/cn";

// Brand/lifestyle imagery (the public/assets/*.webp set). Static export
// serves these files as-is (`images: { unoptimized: true }`), so the source
// files are pre-sized to ~1600px by scripts/resize-assets.mjs — that, not a
// runtime srcset, is what saves bytes here.
//
// Always pass intrinsic width/height so the browser reserves the box and we
// get zero layout shift. `priority` only on a genuinely above-the-fold image
// (none currently — every placement sits below a text hero, so all lazy-load).
const SIZES = {
  "handcraft.webp": { w: 1600, h: 873 },
  "installed.webp": { w: 1600, h: 873 },
  "soldering.webp": { w: 1600, h: 900 },
  "team.webp": { w: 1600, h: 900 },
} as const;

export function WorkshopImage({
  src,
  alt,
  className,
  imgClassName,
  priority = false,
}: {
  src: keyof typeof SIZES;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  const { w, h } = SIZES[src];
  return (
    <div className={cn("relative overflow-hidden bg-paper-2", className)}>
      <Image
        src={`/assets/${src}`}
        alt={alt}
        width={w}
        height={h}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </div>
  );
}
