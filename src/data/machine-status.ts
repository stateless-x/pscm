// Single source of truth for machine production status.
// Owns the values, the UI mapping (badge colors + CTA wording key),
// and the type. Anywhere that needs a status (the data file, badge
// component, product page CTA) imports from here.
//
// Adding a new status = add one entry to MACHINE_STATUS and one Thai+
// English translation to messages/{th,en}.json under "status".

export const MACHINE_STATUS = {
  available: {
    /** i18n key under "status" namespace */
    labelKey: "available",
    /** i18n key under "common" for the product-page primary CTA */
    ctaKey: "enquire",
    /** Tailwind classes for the badge: uses CSS var tokens from globals.css */
    badgeClass:
      "bg-[var(--status-available)]/15 text-[var(--status-available)] ring-[var(--status-available)]/30",
  },
  made_to_order: {
    labelKey: "made_to_order",
    ctaKey: "discussSpec",
    badgeClass: "bg-amber/15 text-amber-strong ring-amber/40",
  },
  on_request: {
    labelKey: "on_request",
    ctaKey: "askFeasibility",
    badgeClass:
      "bg-[var(--status-request)]/15 text-[var(--status-request)] ring-[var(--status-request)]/30",
  },
} as const;

export type MachineStatus = keyof typeof MACHINE_STATUS;

export const ALL_MACHINE_STATUSES = Object.keys(MACHINE_STATUS) as MachineStatus[];

export function statusConfig(status: MachineStatus) {
  return MACHINE_STATUS[status];
}
