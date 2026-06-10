"use client";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/site";
import { LanguageToggle } from "./LanguageToggle";

type Route =
  | "/"
  | "/products"
  | "/solutions"
  | "/custom"
  | "/service"
  | "/about"
  | "/contact";

const NAV_ITEMS: { href: Route; key: "home" | "products" | "solutions" | "custom" | "service" | "about" | "contact" }[] = [
  { href: "/", key: "home" },
  { href: "/products", key: "products" },
  { href: "/solutions", key: "solutions" },
  { href: "/custom", key: "custom" },
  { href: "/service", key: "service" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
];

export function MobileNav() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const phone = SITE.phones[0];

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

          <nav className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-lg text-text-invert hover:text-amber"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3 border-t border-line-dark pt-6">
              <LanguageToggle />
              <span className="mono text-[10px] uppercase tracking-wider text-text-invert-muted">
                TH / EN
              </span>
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
