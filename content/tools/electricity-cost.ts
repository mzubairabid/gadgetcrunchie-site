import type { ToolContent } from "@/lib/types";

const tool: ToolContent = {
  slug: "electricity-cost-calculator",
  name: "Electricity cost",
  h1: "Electricity cost calculator for any device",
  title: "Electricity Cost Calculator: What Does a Device Cost to Run?",
  description: "Calculate what any appliance or gadget costs to run per day, month and year. Enter watts, hours and your price per kWh in USD, GBP, EUR, PKR, INR and more.",
  blurb: "What any appliance or gadget costs to run per day, month and year.",
  category: "Home energy",
  icon: "receipt",
  intro: "Enter a device's wattage, how long it runs and the price on your electricity bill. You'll see the cost per day, month and year, and the energy it uses in kWh (the 'units' on your bill).",
  quickAnswer: "Cost = watts × hours ÷ 1,000 × price per kWh. A 150 W gaming PC used 8 hours a day uses 1.2 kWh a day. At $0.20 per kWh that is $0.24 a day, about $7.20 a month (30 days) and $86 a year. One kWh is one 'unit' on an electricity bill.",
  updated: "2026-09-27",
  sections: [
    {
      id: "formula", heading: "How do you calculate electricity cost?",
      blocks: [
        { type: "formula", text: "kWh = Watts × Hours ÷ 1,000", caption: "1 kWh = one 'unit' on your electricity bill." },
        { type: "formula", text: "Cost = kWh × Price per kWh" },
        { type: "p", text: "Watts measure how fast a device uses energy. Multiply by the hours it runs and you get watt-hours; divide by 1,000 for kilowatt-hours, which is what your utility charges for." },
      ],
    },
    {
      id: "example", heading: "Worked examples",
      blocks: [
        { type: "table", caption: "Example prices only. Use the rate on your own bill.", head: ["Device", "Use", "kWh per month", "At $0.20/kWh", "At £0.25/kWh"], rows: [
          ["Wi-Fi router, 12 W", "24 h/day", "8.6", "$1.73", "£2.16"],
          ["Laptop, 60 W", "8 h/day", "14.4", "$2.88", "£3.60"],
          ["Gaming PC, 300 W", "4 h/day", "36", "$7.20", "£9.00"],
          ["Ceiling fan, 75 W", "12 h/day", "27", "$5.40", "£6.75"],
          ["Fridge, 80 W average", "24 h/day", "57.6", "$11.52", "£14.40"],
        ] },
        { type: "p", text: "The pattern is clear: small devices that never switch off (routers, fridges, set-top boxes) often cost more over a year than powerful devices you use briefly, like a kettle or a microwave." },
      ],
    },
    {
      id: "rates", heading: "Where do I find my price per kWh?",
      blocks: [
        { type: "p", text: "Your bill shows it as the unit rate or energy charge. In the US it's usually listed in cents per kWh, in the UK in pence per kWh. Enter it as a decimal: 17 cents is 0.17, 25 pence is 0.25." },
        { type: "p", text: "In **Pakistan and India** tariffs are slab-based: the price per unit rises with your monthly usage, and taxes, fuel adjustments and fixed charges are added. The simplest honest figure is your **effective rate**: total bill ÷ units used. That already includes the slab and taxes." },
        { type: "callout", tone: "info", text: "This calculator estimates the energy part of your bill. Standing charges, fixed monthly fees and taxes that don't depend on usage aren't included unless you build them into your rate." },
      ],
    },
    {
      id: "save", heading: "How can you cut running costs?",
      blocks: [
        { type: "list", items: [
          "**Measure, don't guess.** A plug-in energy meter shows the real draw, including standby.",
          "**Target always-on devices first.** Shaving 20 W off something that runs all day saves more than 1,000 W on something used for five minutes.",
          "**Check the label's watts, not the charger's maximum.** A laptop with a 100 W charger rarely draws 100 W.",
          "**Replace old fridges and lights.** Modern LED bulbs and inverter fridges use a fraction of older models.",
        ] },
      ],
    },
  ],
  faqs: [
    { q: "How much does it cost to run a 1,000 W appliance for one hour?", a: "It uses exactly 1 kWh, so it costs your price per kWh: for example $0.20, £0.25 or whatever one unit costs on your bill." },
    { q: "What is a unit of electricity?", a: "One unit is one kilowatt-hour (kWh): 1,000 watts running for one hour, or 100 watts for ten hours." },
    { q: "Do devices use power on standby?", a: "Yes. Most modern devices use under 1 W on standby, but older TVs, set-top boxes and chargers can draw several watts all day." },
    { q: "Why is my bill higher than this calculator says?", a: "Bills add fixed charges, taxes and, in slab tariffs, higher rates once you pass a usage threshold. Also, estimated watts and hours are often lower than real use." },
    { q: "How do I work out a whole home's usage?", a: "Add up each device's kWh per day, or read the monthly kWh (units) on your bill and divide by 30. The [solar panel size calculator](/tools/solar-panel-size-calculator/) uses that daily figure." },
  ],
  related: ["solar-panel-size-calculator", "ups-backup-time-calculator", "power-station-runtime-calculator"],
};
export default tool;
