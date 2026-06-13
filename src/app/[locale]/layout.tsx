import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { SITE } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { OrganizationJsonLd } from "@/components/JsonLd";
import "../globals.css";

const sansThai = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-thai",
  display: "swap",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "meta" });
  const name = SITE.name[locale as "th" | "en"];

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: name,
      template: `%s | ${t("siteTitleSuffix")}`,
    },
    description: name,
    // SVG favicon — the PSCM stamp. Vector renders crisply at tab size in
    // modern browsers. (Site previously had no favicon at all.)
    icons: {
      icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
      apple: [{ url: "/logo.svg" }],
    },
    // Per-page generateMetadata sets the correct alternates for that path
    // (see lib/alternates.ts). The layout intentionally omits them.
    openGraph: {
      type: "website",
      siteName: name,
      locale: locale === "th" ? "th_TH" : "en_US",
      images: [
        {
          url: "/assets/og-card.webp",
          width: 1200,
          height: 655,
          alt: name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/assets/og-card.webp"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${sansThai.variable} ${sans.variable} ${mono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-text antialiased">
        <NextIntlClientProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyMobileCTA />
        </NextIntlClientProvider>
        <OrganizationJsonLd locale={locale as "th" | "en"} />
      </body>
    </html>
  );
}
