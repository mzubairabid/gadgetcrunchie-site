import Link from "next/link";
import { SITE } from "@/lib/site";
import { formatDate } from "@/lib/format";

export default function Byline({ updated }: { updated: string }) {
  return (
    <p className="byline mt-12">
      Written and maintained by <a href={SITE.author.url}>{SITE.author.name}</a>. Results are estimates; see{" "}
      <Link href="/how-we-calculate/">how we calculate</Link> and the <Link href="/disclaimer/">disclaimer</Link>.
      Last updated <time dateTime={updated}>{formatDate(updated)}</time>.
    </p>
  );
}
