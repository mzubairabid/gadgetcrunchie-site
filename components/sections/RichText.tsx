import Link from "next/link";
import type { ReactNode } from "react";

/** Tiny formatter for content strings: **bold** and [text](/url). */
export default function RichText({ text }: { text: string }) {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) out.push(<strong key={k++}>{m[1]}</strong>);
    else if (m[2] && m[3]) {
      const href = m[3];
      out.push(
        href.startsWith("/") ? <Link key={k++} href={href}>{m[2]}</Link> : <a key={k++} href={href} rel="noopener">{m[2]}</a>
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}
