import type { Section } from "@/lib/types";

export default function TableOfContents({ sections, extra = [] }: { sections: Section[]; extra?: { id: string; heading: string }[] }) {
  const items = [...sections.map((s) => ({ id: s.id, heading: s.heading })), ...extra];
  return (
    <nav className="toc" aria-label="On this page">
      <p className="font-bold mb-2">On this page</p>
      <ol>{items.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.heading}</a></li>)}</ol>
    </nav>
  );
}
