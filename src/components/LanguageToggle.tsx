"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";

export function LanguageToggle({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();

  const next = locale === "th" ? "en" : "th";
  const label = next.toUpperCase();

  return (
    <button
      type="button"
      onClick={() =>
        startTransition(() => {
          router.replace(pathname, { locale: next });
        })
      }
      disabled={pending}
      aria-label={`Switch language to ${label}`}
      className={`mono inline-flex h-9 items-center justify-center rounded-sm border border-line-dark bg-transparent px-3 text-xs font-medium tracking-wider text-text-invert transition hover:border-amber hover:text-amber ${className ?? ""}`}
    >
      {label}
    </button>
  );
}
