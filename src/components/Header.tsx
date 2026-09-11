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
    <header className="sticky top-0 z-40 border-b-2 border-bg bg-paper/95 text-text backdrop-blur supports-[backdrop-filter]:bg-paper/88">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center gap-4 px-5 md:px-8">
        <Link
          href="/"
          className="group mr-auto flex items-center gap-3 lg:mr-8"
          aria-label="Petkasem Ceramic Machine"
        >
          {/* PSCM stamp mark — inline so it inherits currentColor (amber).
              The mark already reads "PSCM", so no separate text label. */}
          <PscmMark className="h-7 w-auto shrink-0 text-amber-strong transition group-hover:text-amber" />
          <span className="hidden border-l border-line pl-3 text-[9px] font-semibold uppercase leading-tight tracking-[0.18em] text-text-muted sm:block">
            Ceramic<br />Machine · 1986
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 mr-auto">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="whitespace-nowrap px-2.5 py-2 text-[13px] font-medium text-text-muted transition hover:bg-paper-2 hover:text-cobalt"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="kiln-stamp inline-flex h-10 items-center whitespace-nowrap bg-amber px-4 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-amber-strong hover:text-white"
          >
            {t("quote")}
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
