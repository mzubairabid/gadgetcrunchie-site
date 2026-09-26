import Link from "next/link";
import Icon from "@/components/ui/Icon";
import type { ToolContent } from "@/lib/types";

export function ToolCard({ tool, showCategory = true }: { tool: ToolContent; showCategory?: boolean }) {
  return (
    <Link href={`/tools/${tool.slug}/`} className="tool-card">
      <span className="tool-icon"><Icon name={tool.icon} /></span>
      <span className="tool-card-name">{tool.name}</span>
      <span className="tool-card-blurb">{tool.blurb}</span>
      {showCategory ? <span className="tool-card-cat">{tool.category}</span> : null}
    </Link>
  );
}

export default function ToolGrid({ tools, showCategory = true }: { tools: ToolContent[]; showCategory?: boolean }) {
  return <div className="tool-grid">{tools.map((t) => <ToolCard key={t.slug} tool={t} showCategory={showCategory} />)}</div>;
}
