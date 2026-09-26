import { notFound } from "next/navigation";
import { TOOLS, getTool } from "@/lib/tools";
import { CALCULATORS } from "@/components/calculators";
import { pageMeta } from "@/lib/seo";
import { breadcrumbLd, faqLd, toolLd } from "@/lib/schema";
import PageHero from "@/components/sections/PageHero";
import QuickAnswer from "@/components/sections/QuickAnswer";
import ContentSections from "@/components/sections/ContentSections";
import TableOfContents from "@/components/sections/TableOfContents";
import FAQ from "@/components/sections/FAQ";
import ToolGrid from "@/components/sections/ToolGrid";
import Byline from "@/components/sections/Byline";
import JsonLd from "@/components/sections/JsonLd";

export const dynamicParams = false;
export function generateStaticParams() {
  return TOOLS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const t = getTool((await params).slug);
  if (!t) return {};
  return pageMeta({ title: t.title, description: t.description, path: `/tools/${t.slug}/` });
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const t = getTool((await params).slug);
  if (!t) notFound();
  const Calculator = CALCULATORS[t.slug];
  const related = t.related.map((s) => getTool(s)).filter(Boolean) as typeof TOOLS;
  const path = `/tools/${t.slug}/`;

  return (
    <div className="container-site">
      <JsonLd data={[toolLd(t), faqLd(t.faqs), breadcrumbLd([{ name: "Home", path: "/" }, { name: "Calculators", path: "/tools/" }, { name: t.name, path }])]} />
      <PageHero h1={t.h1} intro={t.intro} updated={t.updated}
        crumbs={[{ name: "Home", href: "/" }, { name: "Calculators", href: "/tools/" }, { name: t.name }]} />

      <div className="mb-6"><QuickAnswer text={t.quickAnswer} /></div>

      <Calculator />

      <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px]">
        <div>
          <ContentSections sections={t.sections} />
          <div className="prose-gc"><FAQ items={t.faqs} /></div>
          <div className="prose-gc"><Byline updated={t.updated} /></div>
        </div>
        <aside className="hidden lg:block">
          <div className="toc-sticky"><TableOfContents sections={t.sections} extra={[{ id: "faq", heading: "Questions" }]} /></div>
        </aside>
      </div>

      {related.length ? (
        <section className="mt-14" aria-labelledby="related-h">
          <h2 id="related-h" className="h-section mb-4">Related calculators</h2>
          <ToolGrid tools={related} />
        </section>
      ) : null}
    </div>
  );
}
