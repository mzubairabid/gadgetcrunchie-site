export const SITE = {
  name: "Gadget Crunchie",
  url: "https://gadgetcrunchie.com",
  description:
    "Free calculators for power stations, power banks, UPS backup, solar, charging and screens. Clear formulas, US, UK and Pakistan friendly.",
  author: {
    name: "Zubair Abid",
    url: "https://www.mzadev.com/about",
    jobTitle: "Web developer",
  },
  builtBy: { name: "MZA Dev", url: "https://www.mzadev.com" },
  contactEmail: "contact@mzadev.com", // TODO: change to an inbox you read every day
  launched: "2026-09-22",
  locale: "en",
} as const;

/**
 * Tracking and verification IDs. Replace the empty strings with your own IDs.
 * Empty string = that code is not added to the site.
 */
export const TRACKING = {
  // AdSense > Account > Account information > Publisher ID. Format: "ca-pub-1234567890123456"
  adsenseClient: "ca-pub-3163343689639183",
  // Google Analytics > Admin > Data streams > your web stream > Measurement ID. Format: "G-XXXXXXXXXX"
  gaMeasurementId: "G-N0M1J1VK29",
  // OPTIONAL. GSC URL-prefix property > Settings > Ownership verification > HTML tag: only the content="..." value
  googleSiteVerification: "",
  // OPTIONAL. Bing Webmaster Tools > HTML meta tag: only the content="..." value (or just import from GSC)
  bingSiteVerification: "",
} as const;

/** Logo in the header and footer. Replace public/logo-mark.svg with your own file (same name) or change src. */
export const LOGO = {
  src: "/logo.webp",
  width: 51,
  height: 36,
  showName: true, // false = sirf logo image (agar aapke logo mein naam pehle se likha hai)
} as const;

/** Main menu. `menu: "tools"` turns the item into the calculators dropdown. */
export type NavItem = { href: string; label: string; menu?: "tools" };
export const NAV: NavItem[] = [
  { href: "/tools/", label: "Calculators", menu: "tools" },
  { href: "/how-we-calculate/", label: "How we calculate" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

/** Button on the right of the header. null karo to button chhup jayega. */
export const HEADER_CTA: { href: string; label: string } | null = {
  href: "/tools/power-station-runtime-calculator/",
  label: "Runtime calculator",
};

export const FOOTER_LINKS = [
  { href: "/about/", label: "About" },
  { href: "/how-we-calculate/", label: "How we calculate" },
  { href: "/contact/", label: "Contact" },
  { href: "/privacy-policy/", label: "Privacy policy" },
  { href: "/terms/", label: "Terms of use" },
  { href: "/disclaimer/", label: "Disclaimer" },
];
