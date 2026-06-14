import { SITE } from "@/lib/site";
import type { Machine } from "@/data/machines";
import type { Post } from "@/lib/posts";

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
    description: machine.description?.[locale] ?? machine.short[locale],
    category: machine.category[locale],
    // Absolute image URL when a real photo exists — lets the machine show in
    // Google's product rich results and image search. Omitted for machines
    // still on the gradient placeholder (no real photo to point at).
    ...(machine.images[0] && {
      image: `${SITE.url}${machine.images[0]}`,
    }),
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

// Accepts a flat {q, a}[] so it works for both blog posts (frontmatter.faq)
// and machine pages (machine.faq mapped to the active locale). Callers map
// their own shape to this before passing it in.
export function FaqJsonLd({ faq }: { faq?: { q: string; a: string }[] }) {
  if (!faq || faq.length === 0) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return <Script data={data} />;
}

export function ArticleJsonLd({
  post,
  url,
  locale,
}: {
  post: Post;
  url: string;
  locale: "th" | "en";
}) {
  const fm = post.frontmatter;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: fm.title,
    description: fm.description,
    inLanguage: locale,
    keywords: fm.keywords?.join(", "),
    datePublished: fm.publishDate,
    dateModified: fm.lastUpdated ?? fm.publishDate,
    author: {
      "@type": "Organization",
      name: fm.author ?? SITE.name[locale],
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name[locale],
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/logo.png`,
      },
    },
  };
  return <Script data={data} />;
}
