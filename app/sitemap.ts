import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { TOOLS } from "@/lib/tools";

export const dynamic = "force-static";

const PAGES: { path: string; priority: number; updated: string }[] = [
  { path: "/", priority: 1, updated: "2026-09-27" },
  { path: "/tools/", priority: 0.9, updated: "2026-09-27" },
  { path: "/how-we-calculate/", priority: 0.5, updated: "2026-09-27" },
  { path: "/about/", priority: 0.4, updated: "2026-09-27" },
  { path: "/contact/", priority: 0.3, updated: "2026-09-27" },
  { path: "/privacy-policy/", priority: 0.2, updated: "2026-09-27" },
  { path: "/terms/", priority: 0.2, updated: "2026-09-27" },
  { path: "/disclaimer/", priority: 0.2, updated: "2026-09-27" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...PAGES.map((p) => ({ url: `${SITE.url}${p.path}`, lastModified: p.updated, priority: p.priority })),
    ...TOOLS.map((t) => ({ url: `${SITE.url}/tools/${t.slug}/`, lastModified: t.updated, priority: 0.8 })),
  ];
}
