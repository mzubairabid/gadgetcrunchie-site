# Gadget Crunchie

Next.js 16 + TypeScript + Tailwind CSS v4, exported as a static site (`/out`) for Cloudflare Pages.
10 calculators, shared design system, SEO / AEO / GEO built in.

## Commands
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in /out
npm run words    # word count per page (after build); flags pages under 600
npm run lint     # TypeScript check
```

## Folder map
```
app/
  globals.css                 THE design system: colours, fonts, buttons, cards, fields, gauge, FAQ, tables
  layout.tsx                  header, footer, fonts, sitewide schema, AdSense script
  page.tsx                    home
  tools/page.tsx              all calculators
  tools/[slug]/page.tsx       ONE template renders every tool page
  about, how-we-calculate, contact, privacy-policy, terms, disclaimer
  sitemap.ts robots.ts manifest.ts icon.svg apple-icon.png not-found.tsx
components/
  layout/      Header, Footer
  sections/    PageHero, Breadcrumbs, QuickAnswer, ContentSections, FAQ, ToolGrid,
               TableOfContents, CTABand, Byline, StandardPage, JsonLd, RichText
  ui/          Fields (NumberField, SelectField, Segmented, RangeField), Icon
  tool/        ResultCard, Gauge
  calculators/ one client component per tool + index.ts (slug -> component)
content/
  tools/*.ts   text for each tool page (quick answer, sections, table, FAQs, related)
  pages.ts     text for home, tools index, about, methodology, contact, legal pages
lib/
  site.ts      name, URL, author, nav, footer links
  tools.ts     tool registry (single source of truth)
  types.ts seo.ts schema.ts format.ts devices.ts stations.ts
public/        og.png, icon.png, ads.txt, llms.txt
scripts/       wordcount.mjs
```

## Reusing sections
Every page is assembled from the same parts, so the design stays identical everywhere:
```tsx
import PageHero from "@/components/sections/PageHero";
import QuickAnswer from "@/components/sections/QuickAnswer";
import ContentSections from "@/components/sections/ContentSections";
import FAQ from "@/components/sections/FAQ";
```
Content is data (`Section[]` with blocks: p, h3, list, formula, table, callout). Text supports `**bold**` and `[link](/url)`.

## Add a new tool (about 1-2 hours each)
1. `content/tools/my-tool.ts`: copy an existing file, change slug, title, description, quick answer, sections, FAQs.
2. `components/calculators/MyTool.tsx`: build it from `NumberField`, `Segmented`, `ResultCard`, `Gauge`.
3. Register it in `lib/tools.ts` (TOOLS array) and `components/calculators/index.ts`.
4. Add a line to `public/llms.txt`.
The page, sitemap, footer, home grid, schema and related links update automatically.

## SEO / AEO / GEO included
- Unique title, description and canonical on every page (`lib/seo.ts`); Open Graph + Twitter image.
- `sitemap.xml` with lastmod, `robots.txt` allowing search and AI search crawlers.
- JSON-LD: Organization, WebSite, WebApplication (each tool), FAQPage, BreadcrumbList, ItemList, Person.
  Note: Google shows FAQ rich results only for a few authoritative sites; the markup still helps machines read the page.
- AEO: "Quick answer" box (40-70 words) at the top, question-style H2s, formulas as text, tables, FAQs.
- GEO: named author + methodology page, dated updates, sourced rules, `llms.txt` (optional, no proven ranking effect).
- Semantic HTML, breadcrumbs, table of contents, internal links between related tools, skip link, keyboard focus, dark mode.

## Before launch (checklist)
- [ ] `lib/site.ts`: `contactEmail` → an inbox you read.
- [ ] `content/pages.ts`: rewrite ABOUT in your own words (TODO), add a real photo if you can.
- [ ] Review PRIVACY and TERMS (TODO comments).
- [ ] `lib/stations.ts`: verify each model on the maker's site, add `source`, set `verified: true`.
- [ ] `public/ads.txt`: your publisher ID.
- [ ] `npm run build && npm run words` passes, and click through every tool on mobile.

## Deploy (Cloudflare Pages)
Workers & Pages → Create → Pages → Connect to Git → this repo.
Build command `npm run build`, output `out`, env `NODE_VERSION=22`.
On launch day add `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-...` and redeploy.

## Launch day: point gadgetcrunchie.com here
1. Cloudflare → Rules → Redirect Rules: delete the homepage rule and the catch-all rule.
2. Bulk Redirects: add only the old kept-post and service URLs (from the shutdown sheet) → blog.mzadev.com / www.mzadev.com.
3. DNS: delete `A @ 192.0.2.1` and the `www` CNAME.
4. Pages project → Custom domains: add `gadgetcrunchie.com` and `www.gadgetcrunchie.com`.
5. AdSense → Privacy & messaging: turn on the consent message for UK/EEA/CH.
6. Search Console + Bing: submit `https://gadgetcrunchie.com/sitemap.xml`.

Never click your own ads or reload pages to create impressions.
