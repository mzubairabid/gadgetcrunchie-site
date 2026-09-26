import { SITE } from "./site";
import type { Faq, ToolContent } from "./types";

const abs = (path: string) => `${SITE.url}${path}`;

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#org`,
  name: SITE.name,
  url: SITE.url,
  logo: abs("/icon.png"),
  founder: { "@type": "Person", name: SITE.author.name, url: SITE.author.url },
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  publisher: { "@id": `${SITE.url}/#org` },
  inLanguage: "en",
};

export const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.author.name,
  url: SITE.author.url,
  jobTitle: SITE.author.jobTitle,
  worksFor: { "@type": "Organization", name: SITE.builtBy.name, url: SITE.builtBy.url },
};

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.path) })),
  };
}

export function faqLd(faqs: Faq[]) {
  const strip = (s: string) => s.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[(.+?)\]\((.+?)\)/g, "$1");
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: strip(f.a) } })),
  };
}

export function toolLd(t: ToolContent) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: t.h1,
    url: abs(`/tools/${t.slug}/`),
    description: t.description,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any (runs in the browser)",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Person", name: SITE.author.name, url: SITE.author.url },
    publisher: { "@id": `${SITE.url}/#org` },
    dateModified: t.updated,
    inLanguage: "en",
  };
}
