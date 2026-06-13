"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

// Subtle scroll parallax for atmosphere imagery (NOT the LCP hero). The child
// translates vertically as the wrapper scrolls through the viewport, giving a
// sense of depth without scroll-jacking.
//
// Two safety properties baked in:
//  1. Reduced motion — useReducedMotion() short-circuits to a plain wrapper
//     with no transform, since our global CSS guard can't neutralise a JS
//     scroll-linked transform.
//  2. No edge gap — the child is over-scaled (scale > 1) so that at the
//     translate extremes the box stays fully covered. The wrapper must clip
//     (the consumer's box is `overflow-hidden`).
//
// `travel` is the one-directional shift as a PERCENT of the element's own
// height (total swing is 2×travel, split +/- around centre). Using a percent
// — not fixed px — is what keeps coverage correct at every viewport: motion
// resolves the % `y` against the same box height the over-scale is computed
// from, so the gap-free guarantee below holds on mobile and desktop alike.
// Keep it modest (~6–9%) for a premium, not woozy, feel.
export function Parallax({
  children,
  travel = 8,
  className,
}: {
  children: React.ReactNode;
  travel?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    // From when the element's top hits the viewport bottom, to when its
    // bottom hits the viewport top — the full pass-through.
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${travel}%`, `${-travel}%`],
  );

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  // Over-scale so the translated child never reveals a gap. At the scroll
  // extremes the child shifts `travel`% off-centre, exposing `travel`% of the
  // box on one edge; scaling up by 2×travel% (plus a 1% margin for rounding)
  // covers exactly that on both edges, at any box height.
  const scale = 1 + (2 * travel) / 100 + 0.01;

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, scale }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
