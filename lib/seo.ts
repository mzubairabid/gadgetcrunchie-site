import type { Metadata } from "next";
import { SITE } from "./site";

/** One place to build page metadata: canonical, Open Graph and Twitter stay consistent. */
export function pageMeta({ title, description, path, absoluteTitle = false }: {
  title: string; description: string; path: string; absoluteTitle?: boolean;
}): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url, siteName: SITE.name, type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE.name }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}
