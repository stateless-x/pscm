import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MobileNav } from "./MobileNav";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { PscmMark } from "./PscmMark";

const NAV_ITEMS = [
  { href: "/products", key: "products" },
  { href: "/solutions", key: "solutions" },
  { href: "/custom", key: "custom" },
  { href: "/service", key: "service" },
  { href: "/blog", key: "blog" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-40 border-b border-line-dark bg-bg/95 text-text-invert backdrop-blur supports-[backdrop-filter]:bg-bg/85">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center gap-4 px-5 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 mr-auto lg:mr-8"
          aria-label="Petkasem Ceramic Machine"
        >
          {/* PSCM stamp mark — inline so it inherits currentColor (amber).
              The mark already reads "PSCM", so no separate text label. */}
          <PscmMark className="h-7 w-auto shrink-0 text-amber" />
        </Link>

        <nav className="hidden lg:flex items-center gap-5 mr-auto">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="whitespace-nowrap text-sm text-text-invert hover:text-amber"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="inline-flex h-10 items-center whitespace-nowrap bg-amber px-4 text-sm font-semibold text-ink hover:bg-amber-strong"
          >
            {t("quote")}
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
