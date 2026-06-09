import type { Stage } from "@/data/machines";

// Per-stage placeholder visual. Each stage gets a distinct graphite
// gradient + accent so a grinding machine reads differently from a
// glazing one at a glance, while the whole grid stays disciplined
// (cool industrial neutrals with warmer accents for heat-related stages).
//
// gradient: full CSS background value for the panel
// glow: radial highlight pushed against the gradient; should be visible
// glowPos: where the glow sits, varies direction across stages
export type PlaceholderStyle = {
  gradient: string;
  glow: string;
  glowPos: string;
};

export const PLACEHOLDER_STYLE: Record<Stage, PlaceholderStyle> = {
  // Coarse, heavy: cold steel, light from top-left
  crushing: {
    gradient:
      "linear-gradient(135deg, #2f343b 0%, #181c21 60%, #0d1014 100%)",
    glow: "rgba(180, 195, 210, 0.18)",
    glowPos: "20% 15%",
  },
  // Rotating drums: slight warm cast, glow centred low
  grinding: {
    gradient:
      "linear-gradient(160deg, #2d3036 0%, #1a1d22 55%, #11141a 100%)",
    glow: "rgba(220, 195, 150, 0.18)",
    glowPos: "30% 80%",
  },
  // Wet slurry mixing: blue-grey
  mixing: {
    gradient:
      "linear-gradient(155deg, #1d2a36 0%, #131c26 55%, #0c1218 100%)",
    glow: "rgba(110, 165, 210, 0.22)",
    glowPos: "75% 30%",
  },
  // Water removal, dewatering: cool teal
  filtering: {
    gradient:
      "linear-gradient(145deg, #1a2a30 0%, #121e24 55%, #0b1418 100%)",
    glow: "rgba(95, 170, 185, 0.22)",
    glowPos: "30% 35%",
  },
  // Magnetic separation, purification: cool steel
  purification: {
    gradient:
      "linear-gradient(120deg, #292d33 0%, #181c22 55%, #11141a 100%)",
    glow: "rgba(170, 180, 195, 0.20)",
    glowPos: "70% 25%",
  },
  // Clay forming: earthy warm graphite
  forming: {
    gradient:
      "linear-gradient(150deg, #322c22 0%, #1f1c15 55%, #14110c 100%)",
    glow: "rgba(220, 175, 120, 0.20)",
    glowPos: "25% 70%",
  },
  // Hydraulic pressing: deep, with vertical light from above
  pressing: {
    gradient:
      "linear-gradient(180deg, #2c2f35 0%, #16181d 60%, #0a0c0f 100%)",
    glow: "rgba(220, 200, 150, 0.22)",
    glowPos: "50% 10%",
  },
  // Spray glaze: amber wash
  glazing: {
    gradient:
      "linear-gradient(150deg, #32281a 0%, #1d1610 55%, #120d07 100%)",
    glow: "rgba(232, 163, 23, 0.32)",
    glowPos: "70% 30%",
  },
  // Warm air drying
  drying: {
    gradient:
      "linear-gradient(140deg, #2e251b 0%, #1c160f 55%, #110c07 100%)",
    glow: "rgba(232, 170, 95, 0.24)",
    glowPos: "30% 30%",
  },
  // Kiln fire: hottest accent
  firing: {
    gradient:
      "linear-gradient(155deg, #3a2615 0%, #1f130a 50%, #100804 100%)",
    glow: "rgba(255, 110, 40, 0.36)",
    glowPos: "55% 60%",
  },
  // Conveyor, lateral flow
  "material-handling": {
    gradient:
      "linear-gradient(95deg, #232934 0%, #161b24 55%, #0d111a 100%)",
    glow: "rgba(150, 170, 210, 0.20)",
    glowPos: "85% 50%",
  },
};
