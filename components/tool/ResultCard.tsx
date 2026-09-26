import type { ReactNode } from "react";

export type Fact = { label: string; value: string };
export type Note = { tone: "info" | "warn" | "ok"; text: ReactNode };

export default function ResultCard({ title = "Result", value, sub, children, facts = [], notes = [], empty }: {
  title?: string; value?: string; sub?: ReactNode; children?: ReactNode; facts?: Fact[]; notes?: Note[]; empty?: string;
}) {
  return (
    <aside className="card result" aria-live="polite">
      <h2 className="card-title">{title}</h2>
      {empty ? (
        <p className="hint" style={{ padding: "1rem 0" }}>{empty}</p>
      ) : (
        <>
          {value ? <p className="result-value">{value}</p> : null}
          {sub ? <p className="result-sub">{sub}</p> : null}
          {children}
          {facts.length ? (
            <dl className="facts">
              {facts.map((f) => (
                <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
              ))}
            </dl>
          ) : null}
        </>
      )}
      {notes.map((n, i) => (
        <p key={i} className={`callout callout-${n.tone}`}>{n.text}</p>
      ))}
    </aside>
  );
}
