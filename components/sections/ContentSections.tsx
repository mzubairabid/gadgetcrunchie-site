import type { Block, Section } from "@/lib/types";
import RichText from "./RichText";

function BlockView({ b }: { b: Block }) {
  switch (b.type) {
    case "p": return <p><RichText text={b.text} /></p>;
    case "h3": return <h3>{b.text}</h3>;
    case "list": {
      const items = b.items.map((t, i) => <li key={i}><RichText text={t} /></li>);
      return b.ordered ? <ol>{items}</ol> : <ul>{items}</ul>;
    }
    case "formula":
      return (
        <p className="formula">
          {b.text}
          {b.caption ? <span className="formula-caption">{b.caption}</span> : null}
        </p>
      );
    case "table":
      return (
        <div className="table-scroll">
          <table className="data-table">
            {b.caption ? <caption>{b.caption}</caption> : null}
            <thead><tr>{b.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
            <tbody>{b.rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}><RichText text={c} /></td>)}</tr>)}</tbody>
          </table>
        </div>
      );
    case "image":
      return (
        <figure className="figure">
          <img src={b.src} alt={b.alt} width={b.width} height={b.height} loading="lazy" decoding="async" />
          {b.caption ? <figcaption>{b.caption}</figcaption> : null}
        </figure>
      );  
    case "callout":
      return <p className={`callout callout-${b.tone}`}><RichText text={b.text} /></p>;
  }
}

/** Renders long-form content. Used by tool pages AND normal pages, so every page looks the same. */
export default function ContentSections({ sections }: { sections: Section[] }) {
  return (
    <div className="prose-gc">
      {sections.map((s) => (
        <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`}>
          <h2 id={`${s.id}-h`}>{s.heading}</h2>
          {s.blocks.map((b, i) => <BlockView key={i} b={b} />)}
        </section>
      ))}
    </div>
  );
}
