"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Icon from "@/components/ui/Icon";
import ThemeToggle from "./ThemeToggle";
import type { IconName } from "@/lib/types";
import type { NavItem } from "@/lib/site";

export type MenuGroup = { category: string; tools: { slug: string; name: string; icon: IconName }[] };

type Props = {
  siteName: string;
  logo: { src: string; width: number; height: number; showName: boolean };
  nav: NavItem[];
  cta: { href: string; label: string } | null;
  groups: MenuGroup[];
};

export default function HeaderClient({ siteName, logo, nav, cta, groups }: Props) {
  const pathname = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const toolsRef = useRef<HTMLLIElement>(null);
  const panelId = useId();
  const megaId = useId();

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  // Close menus when the page changes.
  useEffect(() => {
    setMobileOpen(false);
    setToolsOpen(false);
  }, [pathname]);

  // Escape closes everything; click outside closes the desktop dropdown.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setToolsOpen(false); setMobileOpen(false); }
    };
    const onClick = (e: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(e.target as Node)) setToolsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("mousedown", onClick); };
  }, []);

  // Stop the page scrolling behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const Brand = (
    <Link href="/" className="brand" aria-label={`${siteName} home`}>
      <Image src={logo.src} alt={logo.showName ? "" : siteName} width={logo.width} height={logo.height} priority unoptimized />
      {logo.showName ? <span className="brand-name">{siteName}</span> : null}
    </Link>
  );

  return (
    <header className="site-header">
      <div className="container-site header-bar">
        {Brand}

        {/* Desktop navigation */}
        <nav className="nav-desktop" aria-label="Main">
          <ul className="nav-list">
            {nav.map((item) =>
              item.menu === "tools" ? (
                <li key={item.href} ref={toolsRef} className="nav-item-menu">
                  <button
                    type="button"
                    className="nav-link nav-trigger"
                    aria-expanded={toolsOpen}
                    aria-controls={megaId}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    onClick={() => setToolsOpen((o) => !o)}
                  >
                    {item.label}
                    <ChevronDown size={16} aria-hidden="true" className="nav-chevron" />
                  </button>
                  <div id={megaId} className="mega" hidden={!toolsOpen}>
                    <div className="mega-grid">
                      {groups.map((g) => (
                        <div key={g.category}>
                          <p className="mega-title">{g.category}</p>
                          <ul className="mega-list">
                            {g.tools.map((t) => (
                              <li key={t.slug}>
                                <Link href={`/tools/${t.slug}/`} className="mega-link"
                                  aria-current={pathname.startsWith(`/tools/${t.slug}/`) ? "page" : undefined}>
                                  <span className="mega-icon"><Icon name={t.icon} size={18} /></span>
                                  {t.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mega-foot">
                      <Link href={item.href} className="btn btn-primary btn-sm">See all calculators</Link>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} className="nav-link" aria-current={isActive(item.href) ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          {cta ? <Link href={cta.href} className="btn btn-charge btn-sm">{cta.label}</Link> : null}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          {/* Mobile menu button (hidden on desktop) */}
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={mobileOpen}
            aria-controls={panelId}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div id={panelId} className="mobile-panel" hidden={!mobileOpen}>
        <nav aria-label="Main mobile" className="container-site">
          <ul className="mobile-list">
            {nav.map((item) =>
              item.menu === "tools" ? (
                <li key={item.href}>
                  <details className="mobile-group" open={pathname.startsWith("/tools/")}>
                    <summary className="mobile-link">{item.label}</summary>
                    {groups.map((g) => (
                      <div key={g.category} className="mobile-sub">
                        <p className="mega-title">{g.category}</p>
                        <ul>
                          {g.tools.map((t) => (
                            <li key={t.slug}>
                              <Link href={`/tools/${t.slug}/`} className="mega-link"
                                aria-current={pathname.startsWith(`/tools/${t.slug}/`) ? "page" : undefined}>
                                <span className="mega-icon"><Icon name={t.icon} size={18} /></span>
                                {t.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <Link href={item.href} className="mega-link mobile-all">See all calculators</Link>
                  </details>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} className="mobile-link" aria-current={isActive(item.href) ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          {cta ? <Link href={cta.href} className="btn btn-charge mobile-cta">{cta.label}</Link> : null}
        </nav>
      </div>
    </header>
  );
}
