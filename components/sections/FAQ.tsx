import type { Faq } from "@/lib/types";
import RichText from "./RichText";

/** Accordion built on <details>: opens on click, works without JavaScript, fully crawlable. */
export default function FAQ({ items, heading = "Frequently asked questions", id = "faq" }: {
  items: Faq[]; heading?: string; id?: string;
}) {
  if (!items.length) return null;
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="mt-12">
      <h2 id={`${id}-h`} className="h-section mb-4">{heading}</h2>
      <div className="faq">
        {items.map((f, i) => (
          <details key={f.q} open={i === 0}>
            <summary>{f.q}</summary>
            <div className="faq-answer"><RichText text={f.a} /></div>
          </details>
        ))}
      </div>
    </section>
  );
}
