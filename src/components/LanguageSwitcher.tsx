"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";
import { cn } from "@/lib/cn";

const LOCALES = ["th", "en"] as const;
type Locale = (typeof LOCALES)[number];

// Segmented TH | EN control. Both languages are always visible; the CURRENT
// one is highlighted (amber) and inert, tapping the other switches to it.
// This replaces the old single toggle whose label showed the *target*
// language — ambiguous, since "EN" could read as "you're on EN" or "switch
// to EN". Here there's no guessing: the highlighted segment is where you are.
export function LanguageSwitcher({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  const active = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "mono inline-flex items-center border p-0.5 text-xs font-medium tracking-wider",
        inverted ? "border-line-dark" : "border-line",
        className,
      )}
    >
      {LOCALES.map((loc) => {
        const isActive = loc === active;
        return (
          <button
            key={loc}
            type="button"
            // The active segment is current state, not an action.
            aria-current={isActive ? "true" : undefined}
            disabled={isActive || pending}
            onClick={() =>
              startTransition(() => {
                router.replace(pathname, { locale: loc });
              })
            }
            className={cn(
              "inline-flex h-7 min-w-[2.25rem] items-center justify-center rounded-[3px] px-2.5 transition",
              isActive
                ? "bg-amber text-ink"
                : inverted
                  ? "text-text-invert-muted hover:text-amber"
                  : "text-text-muted hover:text-cobalt",
            )}
          >
            {loc.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
