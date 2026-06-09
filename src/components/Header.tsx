import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/site";
import { Phone } from "lucide-react";
import { MobileNav } from "./MobileNav";
import { LanguageToggle } from "./LanguageToggle";

const NAV_ITEMS = [
  { href: "/products", key: "products" },
  { href: "/solutions", key: "solutions" },
  { href: "/custom", key: "custom" },
  { href: "/service", key: "service" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const phone = SITE.phones[0];

  return (
    <header className="sticky top-0 z-40 border-b border-line-dark bg-bg/95 text-text-invert backdrop-blur supports-[backdrop-filter]:bg-bg/85">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center gap-3 px-5 md:px-8">
        {/* Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 mr-auto lg:mr-6"
          aria-label="Petkasem Ceramic Machine"
        >
          <span className="grid h-9 w-9 place-items-center bg-amber text-ink ring-1 ring-amber-strong">
            <span className="mono text-base font-bold">P</span>
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="mono text-[11px] uppercase tracking-[0.18em] text-text-invert-muted">
              PSCM
            </span>
            <span className="text-sm font-semibold text-text-invert">
              {SITE.shortName.en}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 mr-auto">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="px-3 py-2 text-sm text-text-invert hover:text-amber"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-2">
          <LanguageToggle />
          <a
            href={`tel:${phone.tel}`}
            className="mono inline-flex h-10 items-center gap-2 px-3 text-sm text-text-invert hover:text-amber"
          >
            <Phone size={16} />
            {phone.display}
          </a>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center px-4 bg-amber text-ink text-sm font-semibold hover:bg-amber-strong"
          >
            {t("quote")}
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
