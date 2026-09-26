import type { ToolContent } from "@/lib/types";

const tool: ToolContent = {
  slug: "power-bank-charges-calculator",
  name: "Power bank charges",
  h1: "How many times will a power bank charge my phone?",
  title: "Power Bank Calculator: How Many Phone Charges Will You Get?",
  description: "Find out how many full phone, earbud or tablet charges you'll really get from a 10,000, 20,000 or 30,000 mAh power bank, including real-world losses.",
  blurb: "How many real phone charges you'll get from a 10,000 or 20,000 mAh bank.",
  category: "Charging",
  icon: "smartphone",
  intro: "A 20,000 mAh power bank doesn't charge a 5,000 mAh phone four times. Enter both batteries to see the realistic number, and why the difference exists.",
  quickAnswer: "Charges ≈ power bank Wh × efficiency ÷ phone battery Wh. A 20,000 mAh bank (74 Wh at 3.7 V) delivering about 65% of its energy gives about 48 Wh, enough for roughly 2.5 full charges of a 5,000 mAh phone (19.25 Wh). A 10,000 mAh bank gives about 1.2 charges.",
  updated: "2026-09-27",
  sections: [
    {
      id: "formula", heading: "How do you calculate power bank charges?",
      blocks: [
        { type: "formula", text: "Charges = (Bank mAh × Bank V) × Efficiency ÷ (Phone mAh × Phone V)" },
        { type: "p", text: "Comparing mAh directly is misleading because the two batteries run at different voltages: power bank cells at about 3.7 V, modern phone batteries at about 3.85 V. Converting both to watt-hours puts them on equal terms." },
        { type: "p", text: "**Efficiency** is the share of stored energy that actually reaches your phone. The power bank steps its 3.7 V up to 5 V or 9 V for USB, the phone steps it back down, and the cable and both circuits lose some as heat. 60 to 70% is realistic for most power banks; the default here is 65%." },
      ],
    },
    {
      id: "table", heading: "How many charges do common power banks give?",
      blocks: [
        { type: "table", caption: "At 65% efficiency. Phone battery 5,000 mAh at 3.85 V (19.25 Wh).", head: ["Power bank", "Stored energy", "Delivered", "Full phone charges"], rows: [
          ["5,000 mAh", "18.5 Wh", "12.0 Wh", "About 0.6"],
          ["10,000 mAh", "37 Wh", "24.1 Wh", "About 1.2"],
          ["20,000 mAh", "74 Wh", "48.1 Wh", "About 2.5"],
          ["26,800 mAh", "99.2 Wh", "64.5 Wh", "About 3.3"],
        ] },
        { type: "p", text: "Smaller phones (3,300 to 4,000 mAh) get proportionally more charges. Earbuds cases hold only 1 to 2 Wh, so even a small bank charges them many times." },
      ],
    },
    {
      id: "why-less", heading: "Why do you get fewer charges than the mAh suggests?",
      blocks: [
        { type: "list", items: [
          "**Different voltages.** The rating is for 3.7 V cells; your phone's battery runs higher.",
          "**Conversion losses.** Stepping up to USB voltage and back down wastes energy as heat.",
          "**Fast charging is less efficient.** High-watt charging generates more heat than slow charging.",
          "**Using the phone while charging.** The screen and radios draw power that never reaches the battery.",
          "**Age and cold.** Older power banks and cold weather both reduce usable capacity.",
        ] },
        { type: "callout", tone: "info", text: "Planning to fly with it? A 20,000 mAh bank is 74 Wh, under the 100 Wh limit. Check any size with the [power bank airline checker](/tools/power-bank-airline-checker/)." },
      ],
    },
    {
      id: "buying", heading: "Which power bank size should you buy?",
      blocks: [
        { type: "list", items: [
          "**10,000 mAh:** one full phone charge with some spare; pocket-sized. Good for a day out.",
          "**20,000 mAh:** two to three phone charges, or a partial laptop top-up with USB-C PD. Good for travel.",
          "**25,000 to 27,000 mAh:** the largest size that stays under the 100 Wh airline limit.",
        ] },
        { type: "p", text: "For laptops, check the power bank's USB-C output (for example 45 W, 65 W or 100 W) against your laptop's charger with the [laptop charger checker](/tools/laptop-charger-wattage-checker/)." },
      ],
    },
  ],
  faqs: [
    { q: "How many times will a 10,000 mAh power bank charge an iPhone?", a: "Roughly 1.5 to 2 times for a 3,300 to 3,600 mAh iPhone battery, and about 1.2 times for a large 5,000 mAh phone, at typical efficiency." },
    { q: "How many times will a 20,000 mAh power bank charge a phone?", a: "About 2.5 full charges of a 5,000 mAh phone, or 3.5 to 4 charges of a 3,500 mAh phone." },
    { q: "Why isn't my power bank giving the charges it advertises?", a: "Advertised figures often compare mAh directly and ignore voltage and conversion losses. Real-world efficiency of 60 to 70% is normal, not a fault." },
    { q: "Does fast charging use more of the power bank?", a: "A little. Higher-power charging produces more heat, so efficiency drops slightly compared with slow charging." },
    { q: "Can a power bank charge a laptop?", a: "Yes, if it has USB-C Power Delivery output with enough watts. A 20,000 mAh (74 Wh) bank can add roughly 60 to 80% to a 60 Wh laptop battery." },
  ],
  related: ["power-bank-airline-checker", "mah-to-wh-converter", "battery-charging-time-calculator"],
};
export default tool;
