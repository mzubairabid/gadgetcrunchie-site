import Link from "next/link";
import { HOME } from "@/content/pages";
import { CATEGORIES, TOOLS, toolsIn } from "@/lib/tools";
import { pageMeta } from "@/lib/seo";
import { faqLd } from "@/lib/schema";
import ToolGrid from "@/components/sections/ToolGrid";
import QuickAnswer from "@/components/sections/QuickAnswer";
import ContentSections from "@/components/sections/ContentSections";
import FAQ from "@/components/sections/FAQ";
import CTABand from "@/components/sections/CTABand";
import JsonLd from "@/components/sections/JsonLd";

export const metadata = pageMeta({ title: HOME.title, description: HOME.description, path: "/", absoluteTitle: true });

export default function Home() {
  return (
    <div className="container-site">
      <JsonLd data={[faqLd(HOME.faqs ?? []), {
        "@context": "https://schema.org", "@type": "ItemList", name: "Gadget Crunchie calculators",
        itemListElement: TOOLS.map((t, i) => ({ "@type": "ListItem", position: i + 1, url: `https://gadgetcrunchie.com/tools/${t.slug}/`, name: t.h1 })),
      }]} />

      <section className="grid items-end gap-8 pt-12 pb-8 md:grid-cols-[1.3fr_1fr]">
        <div>
          <h1 className="h-display mb-4 max-w-[14ch]">{HOME.h1}</h1>
          <p className="lede mb-6">{HOME.intro}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/tools/power-station-runtime-calculator/" className="btn btn-charge">Check a battery's runtime</Link>
            <Link href="/tools/" className="btn btn-ghost">See all {TOOLS.length} calculators</Link>
          </div>
        </div>
        <HeroGauge />
      </section>

      <div className="mb-10"><QuickAnswer text={HOME.quickAnswer!} title="What is Gadget Crunchie?" /></div>

      {CATEGORIES.map((c) => (
        <section key={c} className="mb-10" aria-labelledby={`cat-${c}`}>
          <h2 id={`cat-${c}`} className="h-section mb-4">{c}</h2>
          <ToolGrid tools={toolsIn(c)} showCategory={false} />
        </section>
      ))}

      <ContentSections sections={HOME.sections} />
      <div className="prose-gc"><FAQ items={HOME.faqs ?? []} /></div>

      <CTABand title="Not sure which tool you need?" text="Start with the question you're trying to answer. The full list groups every calculator by job and explains the units behind them."
        primary={{ href: "/tools/", label: "Browse all calculators" }} secondary={{ href: "/how-we-calculate/", label: "How we calculate" }} />
    </div>
  );
}

/** Decorative battery visual in the hero: the site's signature element. */
function HeroGauge() {
  return (
    <div className="card" aria-hidden="true">
      <p className="hint mb-1">1,024 Wh power station running a router and a laptop</p>
      <p className="result-value" style={{ fontSize: "3rem" }}>10 h 53 min</p>
      <div className="gauge mt-3"><div className="gauge-fill" style={{ width: "45%" }} /></div>
      <div className="gauge-scale"><span style={{ left: 0 }}>0 h</span><span style={{ left: "50%" }}>12 h</span><span style={{ left: "100%" }}>24 h</span></div>
    </div>
  );
}
