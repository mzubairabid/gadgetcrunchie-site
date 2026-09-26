import type { ToolContent } from "@/lib/types";

const tool: ToolContent = {
  slug: "mah-to-wh-converter",
  name: "mAh to Wh converter",
  h1: "mAh to Wh converter (and Wh to mAh)",
  title: "mAh to Wh Converter: Battery Capacity Calculator",
  description: "Convert battery capacity between mAh, Ah and Wh for power banks, phones, laptops, drones and LiFePO4 packs. Includes the formula and common voltages.",
  blurb: "Convert battery capacity between mAh, Ah and Wh using the right voltage.",
  category: "Charging",
  icon: "repeat",
  intro: "mAh tells you charge, Wh tells you energy, and the voltage links the two. Convert either way, and see why two batteries with the same mAh can hold very different amounts of energy.",
  quickAnswer: "Wh = mAh × V ÷ 1,000, and mAh = Wh × 1,000 ÷ V. A 10,000 mAh power bank at 3.7 V holds 37 Wh. A 99 Wh laptop battery at 11.55 V is about 8,570 mAh. Always use the battery's nominal voltage, not the charger's.",
  updated: "2026-09-27",
  sections: [
    {
      id: "formula", heading: "How do you convert mAh to Wh?",
      blocks: [
        { type: "formula", text: "Wh = mAh × V ÷ 1,000" },
        { type: "formula", text: "mAh = Wh × 1,000 ÷ V" },
        { type: "p", text: "**mAh** (milliamp-hours) measures electric charge: how much current a battery can supply for how long. **Wh** (watt-hours) measures energy, which is what you actually care about for runtime. Multiplying charge by voltage gives energy, and dividing by 1,000 turns milliamps into amps." },
      ],
    },
    {
      id: "voltages", heading: "Which voltage should you use?",
      blocks: [
        { type: "p", text: "Use the battery's **nominal voltage**, printed on the battery or in its spec sheet." },
        { type: "table", head: ["Battery", "Nominal voltage"], rows: [
          ["Power bank cells", "3.6 to 3.7 V"], ["Modern phone batteries", "About 3.85 to 3.89 V"],
          ["Laptop packs", "7.4 to 15.4 V (2 to 4 cells in series)"], ["Drone batteries", "7.4 V (2S) to 22.2 V (6S)"],
          ["12 V lead-acid", "12 V"], ["12 V LiFePO4", "12.8 V"], ["E-bike packs", "36 V or 48 V"],
        ] },
        { type: "callout", tone: "warn", text: "Don't use 5 V just because a power bank has USB ports. The cells inside run at about 3.7 V, and 5 V is only the output after conversion. Using 5 V overstates the energy by roughly 35%." },
      ],
    },
    {
      id: "examples", heading: "Worked examples",
      blocks: [
        { type: "list", items: [
          "**Power bank:** 20,000 mAh × 3.7 V ÷ 1,000 = 74 Wh.",
          "**Phone:** 5,000 mAh × 3.85 V ÷ 1,000 = 19.25 Wh.",
          "**Laptop:** 99.6 Wh × 1,000 ÷ 11.55 V ≈ 8,623 mAh.",
          "**LiFePO4 pack:** 100 Ah (100,000 mAh) × 12.8 V ÷ 1,000 = 1,280 Wh.",
        ] },
        { type: "p", text: "This is why a 5,000 mAh phone battery and a 5,000 mAh drone battery aren't the same size: at 11.1 V, the drone pack holds three times the energy." },
      ],
    },
    {
      id: "why", heading: "Why does Wh matter more than mAh?",
      blocks: [
        { type: "p", text: "Wh lets you compare any two batteries directly and work out runtime: divide usable Wh by a device's watts. It's also what airlines use for their limits; the [power bank airline checker](/tools/power-bank-airline-checker/) applies the 100 Wh and 160 Wh rules for you." },
        { type: "p", text: "For runtime, remember that you never get 100% of the Wh out. Conversion losses and cut-off voltages mean 60 to 90% is typical, depending on the device." },
      ],
    },
  ],
  faqs: [
    { q: "How many Wh is 10,000 mAh?", a: "37 Wh at 3.7 V, or 36 Wh at 3.6 V." },
    { q: "How many Wh is 20,000 mAh?", a: "74 Wh at 3.7 V, well under the 100 Wh airline limit." },
    { q: "How many mAh is 100 Wh?", a: "At 3.7 V, about 27,027 mAh. That's why the largest airline-friendly power banks are around 26,800 mAh." },
    { q: "Is Ah the same as mAh?", a: "Yes, just scaled: 1 Ah = 1,000 mAh. Large batteries (car, inverter, LiFePO4) are listed in Ah." },
    { q: "Why does my power bank deliver less than its mAh rating?", a: "The rating is for the internal cells at 3.7 V. Stepping up to 5 V or more for USB, plus heat and cable losses, means you typically get 60 to 70% of it into your phone." },
  ],
  related: ["power-bank-airline-checker", "power-bank-charges-calculator", "battery-charging-time-calculator"],
};
export default tool;
