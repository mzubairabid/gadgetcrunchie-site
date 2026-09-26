import Script from "next/script";
import type { Metadata, Viewport } from "next";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow/700.css";
import "@fontsource/barlow-condensed/700.css";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Tracking from "@/components/layout/Tracking";
import ScrollToTop from "@/components/layout/ScrollToTop";
import JsonLd from "@/components/sections/JsonLd";
import { SITE, TRACKING } from "@/lib/site";
import { organizationLd, websiteLd } from "@/lib/schema";


export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name}: power and gadget calculators`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.author.name, url: SITE.author.url }],
  creator: SITE.author.name,
  formatDetection: { telephone: false },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } as Metadata["robots"],
    // AdSense account meta tag: lets AdSense confirm the site without needing its script in the HTML.
  other: TRACKING.adsenseClient ? { "google-adsense-account": TRACKING.adsenseClient } : {},
  verification: {
    ...(TRACKING.googleSiteVerification ? { google: TRACKING.googleSiteVerification } : {}),
    ...(TRACKING.bingSiteVerification ? { other: { "msvalidate.01": TRACKING.bingSiteVerification } } : {}),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a2128" },
  ],
};

const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Applies the saved light/dark choice before the page paints (no flash). */}
        <Script id="theme-init" strategy="beforeInteractive">{THEME_SCRIPT}</Script>
      </head>
      <body suppressHydrationWarning>
        <a href="#main" className="skip-link">Skip to content</a>
        <JsonLd data={[organizationLd, websiteLd]} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ScrollToTop />
        <Tracking />
      </body>
    </html>
  );
}
