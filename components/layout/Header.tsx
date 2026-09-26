import { HEADER_CTA, LOGO, NAV, SITE } from "@/lib/site";
import { CATEGORIES, toolsIn } from "@/lib/tools";
import HeaderClient, { type MenuGroup } from "./HeaderClient";

/**
 * Server part of the header: builds a small menu list from the tool registry,
 * so the full page content is never shipped to the browser.
 */
export default function Header() {
  const groups: MenuGroup[] = CATEGORIES.map((c) => ({
    category: c,
    tools: toolsIn(c).map((t) => ({ slug: t.slug, name: t.name, icon: t.icon })),
  }));
  return <HeaderClient siteName={SITE.name} logo={LOGO} nav={NAV} cta={HEADER_CTA} groups={groups} />;
}
