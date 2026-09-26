import type { ToolContent } from "@/lib/types";

const tool: ToolContent = {
  slug: "battery-charging-time-calculator",
  name: "Charging time",
  h1: "Battery charging time calculator",
  title: "Charging Time Calculator: Phone, Laptop, Power Bank, Power Station",
  description: "Estimate how long it takes to charge a phone, power bank, laptop or power station with any charger, including the slower last 20% and the device's own speed limit.",
  blurb: "How long a phone, power bank, laptop or power station takes to charge.",
  category: "Charging",
  icon: "zap",
  intro: "Enter the battery size, the charger's watts and your starting level. The estimate includes charging losses, the device's own speed limit and the slowdown after 80% that most calculators ignore.",
  quickAnswer: "Charging time ≈ energy needed (Wh) ÷ (charger watts × efficiency), with the last 20% taking about twice as long. A 5,000 mAh phone (19.25 Wh) on a 25 W charger reaches 80% from 10% in about 38 minutes and 100% in about an hour.",
  updated: "2026-09-27",
  sections: [
    {
      id: "formula", heading: "How is charging time calculated?",
      blocks: [
        { type: "formula", text: "Time (h) = Energy needed (Wh) ÷ (Charging power (W) × Efficiency)" },
        { type: "p", text: "**Energy needed** is the battery's Wh multiplied by the percentage you want to add. **Charging power** is the lower of two numbers: what the charger can supply and what the device will accept. A 100 W charger won't charge a phone that is limited to 25 W any faster. **Efficiency** covers heat and conversion losses, typically 80 to 90%." },
      ],
    },
    {
      id: "taper", heading: "Why is the last 20% so slow?",
      blocks: [
        { type: "p", text: "Lithium batteries charge in two stages. First, **constant current**: the charger pushes in as much as the battery safely takes, and the percentage climbs fast. Around 80%, it switches to **constant voltage**: the current gradually drops to avoid stressing the cells." },
        { type: "p", text: "The calculator models this by charging the last 20% at half speed. It's a simplification, but it matches real devices far better than a straight line, and it's why '0 to 50% in 30 minutes' claims are common while '0 to 100%' times are rarely advertised." },
      ],
    },
    {
      id: "examples", heading: "Typical charging times",
      blocks: [
        { type: "table", caption: "From 10% to 100%, 85% efficiency, calculated with this tool.", head: ["Device", "Battery", "Charger", "Estimated time"], rows: [
          ["Phone", "5,000 mAh (19.25 Wh)", "25 W", "About 1 h"],
          ["Phone", "5,000 mAh (19.25 Wh)", "10 W (old USB-A)", "About 2 h 30 min"],
          ["Power bank", "20,000 mAh (74 Wh)", "20 W", "About 4 h 45 min"],
          ["Laptop", "60 Wh", "65 W", "About 1 h 10 min"],
          ["Power station", "1,024 Wh", "500 W AC input", "About 2 h 40 min"],
        ] },
        { type: "p", text: "Power stations often advertise much faster AC charging (for example 0 to 80% in under an hour) because they accept 1,000 W or more. Enter the input watts from the spec sheet." },
      ],
    },
    {
      id: "tips", heading: "How can you charge faster, and should you?",
      blocks: [
        { type: "list", items: [
          "**Match the charger to the device's maximum.** Beyond that, extra watts do nothing.",
          "**Use a cable rated for the power.** USB-C above 60 W needs a 5 A e-marked cable. See the [laptop charger checker](/tools/laptop-charger-wattage-checker/).",
          "**Keep it cool.** Phones slow charging when hot. Take off thick cases and avoid charging in direct sun.",
          "**Stop at 80% when you can.** Many phones and laptops offer an 80% limit that extends battery life over the years.",
        ] },
      ],
    },
  ],
  faqs: [
    { q: "How long does it take to charge a 20,000 mAh power bank?", a: "With a 20 W charger, about 4.5 to 5 hours from nearly empty. With an 18 W or older 10 W charger it can take 6 to 9 hours. Check the power bank's maximum input: many are limited to 18 to 30 W." },
    { q: "Will a higher-watt charger damage my phone?", a: "No. USB-PD and similar standards negotiate the power: the phone only takes what it's designed for." },
    { q: "Why does my phone charge slower than the calculator says?", a: "Heat, a weak cable, using the phone while charging, or a charger that can't deliver its rated power all slow things down. Background battery optimisation can also pause charging at 80% overnight." },
    { q: "How long to charge a power station with solar?", a: "Use the real solar input, not the panel rating: a 200 W panel often delivers 120 to 160 W in good sun. Enter that as the charger watts." },
    { q: "What does the 'device max charging speed' field mean?", a: "Every device caps how much power it will accept. Phones are often limited to 20 to 45 W, laptops to their original charger's wattage. The calculator uses whichever is lower: charger or device." },
  ],
  related: ["mah-to-wh-converter", "laptop-charger-wattage-checker", "power-bank-charges-calculator"],
};
export default tool;
