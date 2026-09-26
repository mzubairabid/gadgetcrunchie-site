import Link from "next/link";

export default function CTABand({ title, text, primary, secondary }: {
  title: string; text: string; primary: { href: string; label: string }; secondary?: { href: string; label: string };
}) {
  return (
    <section className="cta-band mt-14" aria-label={title}>
      <h2 className="h-section mb-2">{title}</h2>
      <p className="mb-5 max-w-[60ch] opacity-90">{text}</p>
      <div className="flex flex-wrap gap-3">
        <Link href={primary.href} className="btn btn-charge">{primary.label}</Link>
        {secondary ? <Link href={secondary.href} className="btn btn-ghost">{secondary.label}</Link> : null}
      </div>
    </section>
  );
}
