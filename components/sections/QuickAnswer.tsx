import RichText from "./RichText";

/** Short, direct answer near the top: what search snippets and AI answers quote. */
export default function QuickAnswer({ text, title = "Quick answer" }: { text: string; title?: string }) {
  return (
    <div className="quick-answer" role="note">
      <p className="quick-answer-title">{title}</p>
      <p className="m-0"><RichText text={text} /></p>
    </div>
  );
}
