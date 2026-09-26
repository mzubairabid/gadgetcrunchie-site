import type { ReactNode } from "react";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import { SITE } from "@/lib/site";
import { formatDate } from "@/lib/format";

/** Page header used on every page except the home page. */
export default function PageHero({ h1, intro, crumbs, updated, children }: {
  h1: string; intro?: string; crumbs?: Crumb[]; updated?: string; children?: ReactNode;
}) {
  return (
    <header className="pt-8 pb-6">
      {crumbs ? <div className="mb-3"><Breadcrumbs items={crumbs} /></div> : null}
      <h1 className="h-page mb-3">{h1}</h1>
      {intro ? <p className="lede m-0">{intro}</p> : null}
      {updated ? (
        <p className="hint mt-3 mb-0">
          By <a href={SITE.author.url}>{SITE.author.name}</a>. Updated <time dateTime={updated}>{formatDate(updated)}</time>.
        </p>
      ) : null}
      {children}
    </header>
  );
}
