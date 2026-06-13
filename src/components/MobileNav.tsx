"use client";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { SITE } from "@/lib/site";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/cn";

type Route =
  | "/"
  | "/products"
  | "/solutions"
  | "/custom"
  | "/service"
  | "/blog"
  | "/about"
  | "/contact";

type NavKey =
  | "home"
  | "products"
  | "solutions"
  | "custom"
  | "service"
  | "blog"
  | "about"
  | "contact";

const NAV_ITEMS: { href: Route; key: NavKey }[] = [
  { href: "/", key: "home" },
  { href: "/products", key: "products" },
  { href: "/solutions", key: "solutions" },
  { href: "/custom", key: "custom" },
  { href: "/service", key: "service" },
  { href: "/blog", key: "blog" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
];

export function MobileNav() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const phone = SITE.phones[0];

  // Active when the path matches exactly (home) or is a section the current
  // page lives under (e.g. /products/ball-mill highlights "Machines").
  const isActive = (href: Route) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label={t("openMenu")}
          className="inline-flex h-11 w-11 items-center justify-center text-text-invert hover:text-amber lg:hidden"
        >
          <Menu size={24} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-in data-[state=open]:fade-in" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-bg text-text-invert shadow-xl data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=open]:duration-200">
          <div className="flex items-center justify-between border-b border-line-dark px-5 py-4">
            <Dialog.Title className="label-th text-xs font-semibold tracking-[0.08em] text-text-invert-muted">
              {t("menu")}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label={t("close")}
                className="inline-flex h-10 w-10 items-center justify-center text-text-invert hover:text-amber"
              >
                <X size={22} />
              </button>
            </Dialog.Close>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-4">
            <ul className="flex flex-col divide-y divide-line-dark/60">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center border-l-2 py-3.5 pl-3 text-lg transition",
                        active
                          ? "border-amber font-semibold text-amber"
                          : "border-transparent text-text-invert hover:border-line-dark hover:text-amber",
                      )}
                    >
                      {t(item.key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 flex items-center justify-between border-t border-line-dark pt-6">
              <span className="label-th text-xs font-semibold tracking-[0.08em] text-text-invert-muted">
                {t("language")}
              </span>
              <LanguageSwitcher />
            </div>
          </nav>

          <div className="safe-bottom border-t border-line-dark p-4">
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${phone.tel}`}
                onClick={() => setOpen(false)}
                className="inline-flex h-12 items-center justify-center gap-2 bg-amber text-sm font-semibold text-ink hover:bg-amber-strong"
              >
                <Phone size={18} />
                {t("call")}
              </a>
              <a
                href={SITE.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex h-12 items-center justify-center gap-2 bg-[#06C755] text-sm font-semibold text-white hover:bg-[#05a648]"
              >
                <MessageCircle size={18} />
                {t("line")}
              </a>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
