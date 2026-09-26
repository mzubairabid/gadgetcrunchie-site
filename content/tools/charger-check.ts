import type { ToolContent } from "@/lib/types";

const tool: ToolContent = {
  slug: "laptop-charger-wattage-checker",
  name: "Laptop charger checker",
  h1: "Will this USB-C charger work with my laptop?",
  title: "Laptop Charger Wattage Checker: Is a Lower-Watt USB-C Charger OK?",
  description: "Check whether a USB-C charger has enough watts for your laptop, what happens if it's lower, and whether your cable limits it. 45 W, 65 W, 100 W and 140 W explained.",
  blurb: "Check whether a USB-C charger and cable have enough watts for your laptop.",
  category: "Charging",
  icon: "laptop",
  intro: "Borrowed a friend's charger, or want one charger for everything? Enter your laptop's original charger wattage and the one you plan to use. You'll see whether it charges at full speed, slowly, or not at all, and whether the cable is holding it back.",
  quickAnswer: "A USB-C charger with equal or higher wattage than your laptop's original charger charges at full speed and is safe. A charger with about 60 to 99% of the wattage usually works but charges slower and may not keep up under heavy use. Much lower, and many laptops won't charge while in use. Above 60 W you also need a 5 A e-marked cable.",
  updated: "2026-09-27",
  sections: [
    {
      id: "how", heading: "How does USB-C laptop charging work?",
      blocks: [
        { type: "p", text: "USB-C chargers use **USB Power Delivery (PD)**. When you plug in, the laptop and charger agree on a voltage and current. The laptop can never pull more than the charger offers, and a bigger charger never forces extra power into a smaller device. That's why using a higher-watt charger is safe." },
        { type: "p", text: "The result is the lowest of three limits: what the **charger** can give, what the **cable** can carry and what the **laptop** will accept." },
        { type: "formula", text: "Delivered power = the lowest of charger W, cable W and laptop W" },
      ],
    },
    {
      id: "cables", heading: "Does the USB-C cable matter?",
      blocks: [
        { type: "table", head: ["Cable type", "Maximum power"], rows: [
          ["Standard USB-C (3 A)", "60 W (20 V × 3 A)"],
          ["5 A e-marked USB-C", "100 W (20 V × 5 A)"],
          ["240 W EPR USB-C", "240 W (48 V × 5 A)"],
        ] },
        { type: "p", text: "Most cables bundled with phones are 3 A, 60 W cables. Pair one with a 100 W charger and your laptop only gets 60 W. Cables rated for 100 W or 240 W usually say so on the packaging or connector." },
      ],
    },
    {
      id: "outcomes", heading: "What happens with a lower-watt charger?",
      blocks: [
        { type: "table", head: ["Charger vs original", "What you'll usually see"], rows: [
          ["100% or more", "Normal, full-speed charging"],
          ["About 60 to 99%", "Charges, but slower. Under heavy load (gaming, video export) the battery may still drain slowly"],
          ["Below about 60%", "'Slow charger' warning, charges only when asleep, or doesn't charge at all"],
        ] },
        { type: "p", text: "Exactly where a laptop gives up varies by brand. Many ultrabooks with 45 to 65 W chargers happily trickle-charge from a 30 W phone charger when idle. Performance laptops with 140 W or larger bricks often won't charge from USB-C below 60 W, and some gaming laptops need their barrel charger for full performance." },
      ],
    },
    {
      id: "choose", heading: "How do you choose one charger for everything?",
      blocks: [
        { type: "list", items: [
          "**Match your hungriest device.** If your laptop came with 65 W, buy a 65 W or larger charger.",
          "**On multi-port chargers, read the split.** A '100 W' two-port charger might give 65 W + 30 W when both are used, not 100 W to each.",
          "**Buy the cable with the charger.** Get a 100 W (5 A) cable if the laptop needs more than 60 W.",
          "**Prefer certified products.** USB-IF certified or well-known brands follow the PD standard properly.",
        ] },
        { type: "p", text: "To see how long a full charge takes with a given charger, use the [charging time calculator](/tools/battery-charging-time-calculator/)." },
      ],
    },
  ],
  faqs: [
    { q: "Can I use a 45 W charger on a 65 W laptop?", a: "Usually yes. It's about 70% of the original, so the laptop charges more slowly and may not gain charge under heavy load, but it's safe." },
    { q: "Can I use a 100 W charger on a 65 W laptop?", a: "Yes. The laptop only takes the 65 W it needs. Bigger chargers are safe with USB-C PD." },
    { q: "Can I charge my laptop with a phone charger?", a: "With a USB-C PD phone charger of 20 to 30 W, many thin laptops charge slowly while asleep or idle. Older 5 V USB-A phone chargers generally won't charge a laptop." },
    { q: "Why does my laptop say 'slow charger connected'?", a: "The charger or cable delivers less power than the laptop expects. Check the charger's wattage and use a cable rated for at least that much." },
    { q: "Is it bad for the battery to use a weaker charger?", a: "Not in itself. The battery may cycle more if it drains while plugged in under load, but occasional use is fine." },
  ],
  related: ["battery-charging-time-calculator", "power-station-runtime-calculator", "mah-to-wh-converter"],
};
export default tool;
