import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, LOGO, SITE } from "@/lib/site";
import { TOOLS } from "@/lib/tools";

/** Footer logo size compared with the header logo (1.6 = 60% bigger). */
const FOOTER_LOGO_SCALE = 1.6;

export default function Footer() {
  const cats = Array.from(new Set(TOOLS.map((t) => t.category)));
  return (
    <footer className="site-footer">
      <div className="container-site grid gap-8 py-10 md:grid-cols-[1.2fr_2fr]">
        <div>
          <Link href="/" className="brand brand-lg mb-3">
            <Image src={LOGO.src} alt={LOGO.showName ? "" : SITE.name}
              width={Math.round(LOGO.width * FOOTER_LOGO_SCALE)} height={Math.round(LOGO.height * FOOTER_LOGO_SCALE)} unoptimized />
            {LOGO.showName ? <span className="brand-name" style={{ color: "var(--ink)" }}>{SITE.name}</span> : null}
          </Link>
          <p className="max-w-[40ch]">Free power and gadget calculators that show their working. No sign-up, nothing stored.</p>
          <p className="mt-3">Built by <a href={SITE.builtBy.url}>{SITE.builtBy.name}</a>.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {cats.map((c) => (
            <div key={c}>
              <p className="footer-title">{c}</p>
              <ul className="grid gap-1">
                {TOOLS.filter((t) => t.category === c).map((t) => (
                  <li key={t.slug}><Link href={`/tools/${t.slug}/`}>{t.name}</Link></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="footer-title">Site</p>
            <ul className="grid gap-1">
              {FOOTER_LINKS.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
            </ul>
          </div>
        </div>
      </div>
      <div className="container-site border-t border-line py-5 text-sm">
        © {new Date().getFullYear()} {SITE.name}. Calculator results are estimates.
      </div>
    </footer>
  );
}
