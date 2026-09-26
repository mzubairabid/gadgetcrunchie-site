import type { PageContent } from "@/lib/types";
import PageHero from "./PageHero";
import QuickAnswer from "./QuickAnswer";
import ContentSections from "./ContentSections";
import FAQ from "./FAQ";
import JsonLd from "./JsonLd";
import { breadcrumbLd, faqLd } from "@/lib/schema";

/** Template for text pages (about, methodology, legal). Same sections, same look as tool pages. */
export default function StandardPage({ page, path, extraLd = [] }: { page: PageContent; path: string; extraLd?: object[] }) {
  const crumbs = [{ name: "Home", href: "/" }, { name: page.h1 }];
  return (
    <div className="container-site">
      <JsonLd data={[breadcrumbLd([{ name: "Home", path: "/" }, { name: page.h1, path }]), ...(page.faqs?.length ? [faqLd(page.faqs)] : []), ...extraLd]} />
      <PageHero h1={page.h1} intro={page.intro} crumbs={crumbs} updated={page.updated} />
      {page.quickAnswer ? <div className="mb-4"><QuickAnswer text={page.quickAnswer} title="In short" /></div> : null}
      <ContentSections sections={page.sections} />
      {page.faqs?.length ? <div className="prose-gc"><FAQ items={page.faqs} /></div> : null}
    </div>
  );
}
