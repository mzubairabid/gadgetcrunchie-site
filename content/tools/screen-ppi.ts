import type { ToolContent } from "@/lib/types";

const tool: ToolContent = {
  slug: "screen-ppi-calculator",
  name: "Screen PPI",
  h1: "Screen PPI and viewing distance calculator",
  title: "PPI Calculator: Pixel Density, Screen Size and Viewing Distance",
  description: "Calculate pixels per inch (PPI) for any monitor, TV, laptop or phone, plus screen width, height, dot pitch, aspect ratio and the distance where pixels disappear.",
  blurb: "Pixel density, real screen size and the distance where pixels disappear.",
  category: "Screens",
  icon: "monitor",
  intro: "Compare monitors and TVs by how sharp they actually look. Enter the resolution and diagonal size to get pixel density, physical dimensions and the viewing distance at which individual pixels become invisible.",
  quickAnswer: "PPI = √(width² + height²) ÷ diagonal in inches. A 27-inch 1440p monitor (2560 × 1440) has about 109 PPI; a 27-inch 4K monitor about 163 PPI. With 20/20 vision, pixels stop being visible beyond roughly 3,438 ÷ PPI inches: about 32 inches for 109 PPI.",
  updated: "2026-09-27",
  sections: [
    {
      id: "formula", heading: "How is PPI calculated?",
      blocks: [
        { type: "formula", text: "PPI = √(Width px² + Height px²) ÷ Diagonal (in)" },
        { type: "p", text: "The top part is the number of pixels along the diagonal, found with Pythagoras. Dividing by the diagonal length in inches gives pixels per inch. Higher PPI means smaller pixels and sharper text at the same distance." },
        { type: "formula", text: "Distance where pixels blend (in) ≈ 3,438 ÷ PPI", caption: "Based on 20/20 vision resolving about 1 arcminute." },
      ],
    },
    {
      id: "compare", heading: "Common screens compared",
      blocks: [
        { type: "table", head: ["Screen", "Resolution", "PPI", "Pixels blend beyond"], rows: [
          ["24-inch monitor", "1920 × 1080", "92", "About 37 in (94 cm)"],
          ["27-inch monitor", "2560 × 1440", "109", "About 32 in (80 cm)"],
          ["27-inch monitor", "3840 × 2160", "163", "About 21 in (54 cm)"],
          ["34-inch ultrawide", "3440 × 1440", "110", "About 31 in (79 cm)"],
          ["55-inch TV", "3840 × 2160", "80", "About 43 in (109 cm)"],
          ["6.1-inch phone", "1170 × 2532", "457", "About 7.5 in (19 cm)"],
        ] },
        { type: "p", text: "This explains why a 55-inch 4K TV looks sharp from the sofa despite low PPI, and why 1080p on a 27-inch monitor looks soft at a desk: you sit closer than the distance where its pixels blend." },
      ],
    },
    {
      id: "choose", heading: "What PPI should you look for?",
      blocks: [
        { type: "list", items: [
          "**Desk monitors (50 to 70 cm away):** 100 to 110 PPI is comfortable; 140+ looks crisp for text and photo work, often with display scaling.",
          "**Laptops:** 150 to 220 PPI is typical at 13 to 16 inches.",
          "**TVs:** Pick size by viewing distance rather than PPI. At 2.5 m, 4K on a 55 to 65-inch screen is past the point where pixels are visible.",
          "**Gaming:** Higher PPI costs frame rate. 27-inch 1440p is a popular balance of sharpness and GPU load.",
        ] },
        { type: "callout", tone: "info", text: "PPI isn't everything: panel type, brightness, scaling and viewing distance all change how sharp a screen looks. Use PPI to compare screens of different sizes on equal terms." },
      ],
    },
    {
      id: "size", heading: "How big is the screen really?",
      blocks: [
        { type: "p", text: "Two screens with the same diagonal can have very different widths. A 34-inch 21:9 ultrawide is about as tall as a 27-inch 16:9 monitor but much wider. The calculator gives width and height so you can check desk space or a wall mount before buying." },
        { type: "p", text: "Dot pitch (the distance between pixel centres, in millimetres) is just the inverse of PPI: 25.4 ÷ PPI. Smaller dot pitch = sharper image." },
      ],
    },
  ],
  faqs: [
    { q: "What is a good PPI for a monitor?", a: "Around 100 to 110 PPI looks fine at a normal desk distance. 140 PPI or more looks noticeably sharper for text, usually with 125 to 150% scaling." },
    { q: "Is 1080p on a 27-inch monitor bad?", a: "At 82 PPI, text looks soft at a normal desk distance. 1440p (109 PPI) or 4K (163 PPI) is a better fit for 27 inches." },
    { q: "What does 'Retina' mean?", a: "Apple's term for a screen where pixels can't be seen at a typical viewing distance. The 3,438 ÷ PPI rule in this calculator estimates that distance for 20/20 vision." },
    { q: "How do I convert screen size from cm to inches?", a: "Divide by 2.54. The calculator does this if you switch the size unit to centimetres." },
    { q: "Does higher PPI use more battery or GPU power?", a: "Yes. More pixels means more work for the graphics card and, on laptops and phones, somewhat higher power use." },
  ],
  related: ["electricity-cost-calculator", "laptop-charger-wattage-checker", "battery-charging-time-calculator"],
};
export default tool;
