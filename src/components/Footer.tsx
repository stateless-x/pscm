import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/site";
import { PscmMark } from "./PscmMark";

const NAV_ITEMS = [
  { href: "/", key: "home" },
  { href: "/products", key: "products" },
  { href: "/solutions", key: "solutions" },
  { href: "/custom", key: "custom" },
  { href: "/service", key: "service" },
  { href: "/blog", key: "blog" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export function Footer() {
  const t = useTranslations();
  const locale = useLocale() as "th" | "en";

  return (
    <footer className="mt-20 bg-bg text-text-invert">
      {/* Extra bottom padding on mobile clears the fixed StickyMobileCTA bar
          (≈52px + safe-area), which is md:hidden — so the gap is mobile-only.
          Without this the copyright line sits behind the call/LINE bar. */}
      <div className="mx-auto max-w-[1200px] px-5 pt-12 pb-[calc(env(safe-area-inset-bottom)+72px)] md:px-8 md:py-16 md:pb-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <PscmMark className="h-8 w-auto text-amber" />
            <div className="mt-3 text-base font-semibold">
              {SITE.name[locale]}
            </div>
            <p className="mt-3 text-sm text-text-invert-muted">
              {t("footer.tagline")}
            </p>
            <p className="mono mt-4 text-[10px] uppercase tracking-[0.2em] text-text-invert-muted">
              {t("common.madeInThailand")}
            </p>
          </div>

          <div>
            <div className="eyebrow text-text-invert-muted">
              {t("footer.navTitle")}
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-text-invert hover:text-amber"
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow text-text-invert-muted">
              {t("footer.contactTitle")}
            </div>
            <address className="mt-4 not-italic text-sm leading-relaxed text-text-invert-muted">
              {SITE.address[locale]}
            </address>
            <ul className="mt-3 space-y-1.5 text-sm">
              {SITE.phones.map((p) => (
                <li key={p.tel}>
                  <a
                    href={`tel:${p.tel}`}
                    className="mono text-text-invert hover:text-amber"
                  >
                    {p.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-text-invert hover:text-amber"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="text-text-invert-muted">{SITE.hours[locale]}</li>
            </ul>
          </div>
        </div>

        <div className="rule-dark mt-12 pt-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="mono text-[10px] uppercase tracking-[0.18em] text-text-invert-muted">
            © {SITE.foundedYear}–{new Date().getFullYear()} {SITE.shortName[locale]}.{" "}
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
