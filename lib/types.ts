export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "formula"; text: string; caption?: string }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  | { type: "callout"; tone: "info" | "warn" | "ok"; text: string }
  | { type: "image"; src: string; alt: string; width: number; height: number; caption?: string };

export type Section = { id: string; heading: string; blocks: Block[] };
export type Faq = { q: string; a: string };

export type ToolCategory = "Batteries & runtime" | "Charging" | "Home energy" | "Screens";

export type IconName =
  | "battery" | "plane" | "plug" | "sun" | "receipt" | "repeat" | "zap" | "laptop" | "monitor" | "smartphone";

export type ToolContent = {
  slug: string;
  name: string; // card + breadcrumb name
  h1: string;
  title: string; // <title> (template adds " | Gadget Crunchie")
  description: string; // meta description, 140-160 chars
  blurb: string; // one sentence for cards
  category: ToolCategory;
  icon: IconName;
  intro: string;
  quickAnswer: string; // 40-70 words, answers the main question directly (AEO)
  updated: string; // YYYY-MM-DD
  sections: Section[];
  faqs: Faq[];
  related: string[]; // slugs
};

export type PageContent = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  quickAnswer?: string;
  updated: string;
  sections: Section[];
  faqs?: Faq[];
};
