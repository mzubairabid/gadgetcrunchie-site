import { TOOLS_INDEX } from "@/content/pages";
import { CATEGORIES, TOOLS, toolsIn } from "@/lib/tools";
import { pageMeta } from "@/lib/seo";
import { breadcrumbLd, faqLd } from "@/lib/schema";
import PageHero from "@/components/sections/PageHero";
import QuickAnswer from "@/components/sections/QuickAnswer";
import ToolGrid from "@/components/sections/ToolGrid";
import ContentSections from "@/components/sections/ContentSections";
import FAQ from "@/components/sections/FAQ";
import JsonLd from "@/components/sections/JsonLd";

export const metadata = pageMeta({ title: TOOLS_INDEX.title, description: TOOLS_INDEX.description, path: "/tools/" });

export default function ToolsIndex() {
  return (
    <div className="container-site">
      <JsonLd data={[breadcrumbLd([{ name: "Home", path: "/" }, { name: "All calculators", path: "/tools/" }]), faqLd(TOOLS_INDEX.faqs ?? [])]} />
      <PageHero h1={`${TOOLS_INDEX.h1} (${TOOLS.length})`} intro={TOOLS_INDEX.intro} crumbs={[{ name: "Home", href: "/" }, { name: "All calculators" }]} updated={TOOLS_INDEX.updated} />
      <div className="mb-10"><QuickAnswer text={TOOLS_INDEX.quickAnswer!} title="How the tools are organised" /></div>
      {CATEGORIES.map((c) => (
        <section key={c} className="mb-10" aria-labelledby={`c-${c}`}>
          <h2 id={`c-${c}`} className="h-section mb-4">{c}</h2>
          <ToolGrid tools={toolsIn(c)} showCategory={false} />
        </section>
      ))}
      <ContentSections sections={TOOLS_INDEX.sections} />
      <div className="prose-gc"><FAQ items={TOOLS_INDEX.faqs ?? []} /></div>
    </div>
  );
}
