import { SITE } from "@/lib/site";
import type { Machine } from "@/data/machines";

function Script({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd({ locale }: { locale: "th" | "en" }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}#organization`,
    name: SITE.name[locale],
    alternateName: locale === "th" ? SITE.name.en : SITE.name.th,
    url: SITE.url,
    foundingDate: String(SITE.foundedYear),
    areaServed: "TH",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.addressParts.streetAddress,
      addressLocality: SITE.addressParts.addressLocality,
      addressRegion: SITE.addressParts.addressRegion,
      postalCode: SITE.addressParts.postalCode,
      addressCountry: SITE.addressParts.addressCountry,
    },
    telephone: SITE.phones.map((p) => p.tel),
    email: SITE.email,
  };
  return <Script data={data} />;
}

export function LocalBusinessJsonLd({ locale }: { locale: "th" | "en" }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}#localbusiness`,
    name: SITE.name[locale],
    url: SITE.url,
    telephone: SITE.phones[0].tel,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.addressParts.streetAddress,
      addressLocality: SITE.addressParts.addressLocality,
      addressRegion: SITE.addressParts.addressRegion,
      postalCode: SITE.addressParts.postalCode,
      addressCountry: SITE.addressParts.addressCountry,
    },
    openingHours: "Mo-Sa 08:00-17:00",
  };
  return <Script data={data} />;
}

export function ProductJsonLd({
  machine,
  locale,
}: {
  machine: Machine;
  locale: "th" | "en";
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: machine.name[locale],
    description: machine.short[locale],
    category: machine.category[locale],
    brand: {
      "@type": "Brand",
      name: SITE.shortName.en,
    },
    manufacturer: {
      "@type": "Organization",
      name: SITE.name.en,
      url: SITE.url,
    },
    countryOfOrigin: "TH",
    sku: machine.model ?? machine.slug.toUpperCase(),
  };
  return <Script data={data} />;
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <Script data={data} />;
}
