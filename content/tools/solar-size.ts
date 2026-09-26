import type { ToolContent } from "@/lib/types";

const tool: ToolContent = {
  slug: "solar-panel-size-calculator",
  name: "Solar panel size",
  h1: "Solar panel and battery size calculator",
  title: "Solar Panel Size Calculator: How Many Panels and Batteries?",
  description: "Work out how many solar panels and how much battery storage you need from your daily energy use and local sun hours. For homes, cabins, RVs and backup systems.",
  blurb: "How many solar panels and how much battery you need for your daily use.",
  category: "Home energy",
  icon: "sun",
  intro: "Size a solar system from what you actually use each day and how much sun you get. You'll get the panel array size, the number of panels and the battery storage for the backup days you want.",
  quickAnswer: "Solar array (W) = daily energy use (Wh) ÷ (peak sun hours × (1 − losses)). To cover 3 kWh a day with 5 peak sun hours and 25% losses, you need about 800 W of panels, which is two 550 W panels with some margin. Battery size = daily use × backup days ÷ usable share.",
  updated: "2026-09-27",
  sections: [
    {
      id: "formula", heading: "How do you size a solar system?",
      blocks: [
        { type: "formula", text: "Array (W) = Daily use (Wh) ÷ (Peak sun hours × (1 − Losses))" },
        { type: "formula", text: "Battery (Wh) = Daily use (Wh) × Days of backup ÷ Usable share" },
        { type: "p", text: "**Peak sun hours** is not daylight hours. It's the number of hours of full-strength sunlight (1,000 W per square metre) your location gets on average. A sunny day with 12 hours of daylight might only deliver 5 or 6 peak sun hours. **Losses** cover heat, dust, shading, wiring, charge controller and inverter; 20 to 30% is normal." },
      ],
    },
    {
      id: "sun-hours", heading: "How many peak sun hours do you get?",
      blocks: [
        { type: "table", caption: "Rough annual averages. Your roof angle, shading and season change these a lot.", head: ["Region", "Typical peak sun hours"], rows: [
          ["Most of Pakistan, much of India", "5 to 6"], ["US South-West (Arizona, Nevada)", "6 to 7"], ["US North-East", "3.5 to 4.5"],
          ["Southern England", "About 2.5 to 3 (under 1 in December)"], ["Northern Europe", "2 to 3"],
        ] },
        { type: "p", text: "For a precise figure, use a free tool such as NREL's PVWatts (US) or the Global Solar Atlas (worldwide). If you need power all year, size for your worst month, not the average." },
      ],
    },
    {
      id: "example", heading: "Worked example: a home backup system",
      blocks: [
        { type: "p", text: "A home uses 500 W for 6 hours a day (fans, lights, fridge, TV, router) = 3,000 Wh. With 5 peak sun hours and 25% losses:" },
        { type: "formula", text: "3,000 ÷ (5 × 0.75) = 800 W of panels → 2 × 550 W panels" },
        { type: "p", text: "For one day of backup on LiFePO4 (90% usable): 3,000 × 1 ÷ 0.9 ≈ 3.3 kWh of battery, about 140 Ah at 24 V. On lead-acid (50% usable) you'd need 6 kWh, nearly double." },
      ],
    },
    {
      id: "mistakes", heading: "Common solar sizing mistakes",
      blocks: [
        { type: "list", items: [
          "**Sizing panels from appliance wattage alone.** You need energy per day (Wh), not just watts. Use the [electricity cost calculator](/tools/electricity-cost-calculator/) to find each device's daily kWh.",
          "**Using daylight hours instead of peak sun hours.** This alone can make a system look twice as big as it needs to be, or half as big as it should be.",
          "**Forgetting the inverter.** Panels and batteries cover energy; the inverter must handle your highest simultaneous load plus motor surges.",
          "**Planning with no margin.** Panels lose a little output each year, and households add appliances. Add 10 to 20%.",
        ] },
      ],
    },
  ],
  faqs: [
    { q: "How many solar panels do I need for 1 kWh a day?", a: "With 5 peak sun hours and 25% losses, about 267 W of panels, so one 300 to 400 W panel. With 3 peak sun hours (UK summer average or less), about 444 W." },
    { q: "How many panels for a 5 kW system?", a: "Divide by the panel size: 5,000 ÷ 550 ≈ 9.1, so ten 550 W panels, or thirteen 400 W panels." },
    { q: "Do I need batteries?", a: "Only if you want power at night or during outages. Grid-tied systems without batteries usually shut down during a power cut for safety. Hybrid systems with batteries keep running." },
    { q: "What battery size do I need for solar?", a: "Daily use × days of backup ÷ usable share. For 3 kWh a day and one day of backup: 3.3 kWh of lithium or 6 kWh of lead-acid." },
    { q: "Is this calculator accurate enough to buy a system?", a: "It's accurate enough to plan and compare quotes. An installer should still check your roof angle, shading, wiring, local rules and net-metering options before you buy." },
  ],
  related: ["ups-backup-time-calculator", "electricity-cost-calculator", "power-station-runtime-calculator"],
};
export default tool;
