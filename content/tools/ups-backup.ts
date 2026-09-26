import type { ToolContent } from "@/lib/types";

const tool: ToolContent = {
  slug: "ups-backup-time-calculator",
  name: "UPS backup time",
  h1: "UPS and inverter backup time calculator",
  title: "UPS Backup Time Calculator for Inverter Batteries (Ah to Hours)",
  description: "Calculate how many hours your UPS or inverter battery will run fans, lights, a router or a TV. Works with 12 V, 24 V and 48 V lead-acid and lithium batteries.",
  blurb: "How many hours a UPS or inverter battery runs your fans, lights and router.",
  category: "Batteries & runtime",
  icon: "plug",
  intro: "Enter your battery's Ah and voltage, the battery type and your load. You'll get a realistic backup time and a sensible inverter size, whether you're planning for load-shedding or a home UPS.",
  quickAnswer: "Backup time (h) = Ah × V × number of batteries × usable fraction × inverter efficiency ÷ load (W). A single 150 Ah, 12 V lead-acid battery running a 300 W load gives about 2.5 hours, because only half the battery should be used and the inverter loses around 15%.",
  updated: "2026-09-27",
  sections: [
    {
      id: "formula", heading: "How is UPS backup time calculated?",
      blocks: [
        { type: "formula", text: "Backup (h) = Ah × V × Batteries × DoD × Efficiency ÷ Load (W)", caption: "DoD = depth of discharge: the share of the battery you can safely use." },
        { type: "p", text: "**Ah × V** gives the battery's energy in watt-hours. A 150 Ah, 12 V battery stores 1,800 Wh. **Depth of discharge** is where most online calculators go wrong: lead-acid and tubular batteries last far longer if you only use about half their capacity, so this tool counts 50%. Lithium and LiFePO4 batteries can safely use about 90%." },
        { type: "p", text: "**Inverter efficiency** covers the energy lost turning 12 V DC into 230 V or 120 V AC. Home inverters are usually 80 to 90% efficient; the default here is 85%." },
      ],
    },
    {
      id: "example", heading: "Worked example: fans, lights and Wi-Fi",
      blocks: [
        { type: "p", text: "Two ceiling fans (150 W), four LED lights (40 W), a router (12 W) and a TV (70 W) add up to about 272 W. On one 150 Ah, 12 V tubular battery:" },
        { type: "formula", text: "150 × 12 × 0.5 × 0.85 ÷ 272 ≈ 2.8 hours" },
        { type: "p", text: "Switch to a 150 Ah, 12.8 V LiFePO4 battery and the same load runs for about 5.4 hours, because you can use 90% of it instead of 50%." },
      ],
    },
    {
      id: "sizing", heading: "What size inverter do I need?",
      blocks: [
        { type: "p", text: "Inverters are rated in VA, not watts. For most homes, divide your load in watts by a power factor of 0.8, then add 25% headroom so the inverter isn't running flat out:" },
        { type: "formula", text: "Inverter VA ≈ Load (W) ÷ 0.8 × 1.25" },
        { type: "p", text: "A 300 W load needs roughly a 500 VA unit. Fridges, water pumps and air conditioners need extra headroom for their start-up surge. Air conditioners are usually impractical on a battery inverter unless it is designed for them." },
      ],
    },
    {
      id: "types", heading: "Battery types compared",
      blocks: [
        { type: "table", head: ["Type", "Usable share used here", "Typical life", "Notes"], rows: [
          ["Flooded lead-acid / tubular", "50%", "Hundreds of cycles to a few years", "Cheapest; needs water top-ups"],
          ["AGM / gel", "50%", "Similar to lead-acid", "Sealed, no maintenance"],
          ["LiFePO4 (lithium iron phosphate)", "90%", "Thousands of cycles", "Costs more up front, lighter, much longer life"],
        ] },
        { type: "p", text: "Real backup also drops at high loads: lead-acid batteries deliver less than their rated Ah when discharged quickly, and every battery loses capacity as it ages. If your battery is more than two years old, expect 20 to 30% less than the result." },
      ],
    },
  ],
  faqs: [
    { q: "How long will a 150 Ah battery last?", a: "With a lead-acid battery, 12 V and an 85% efficient inverter: about 7.6 hours at 100 W, 3.8 hours at 200 W and 2.5 hours at 300 W. A lithium battery of the same size lasts roughly 1.8 times longer." },
    { q: "How long will a 200 Ah battery last on a 500 W load?", a: "A 200 Ah, 12 V lead-acid battery gives about 2 hours at 500 W (200 × 12 × 0.5 × 0.85 ÷ 500 ≈ 2.04 hours)." },
    { q: "Does connecting two batteries double the backup?", a: "Yes, two identical batteries hold twice the energy, whether wired in series (for a 24 V inverter) or parallel (12 V). Enter the number of batteries and the tool multiplies the capacity." },
    { q: "Why does my UPS die faster than this calculator says?", a: "Usual causes: an ageing battery, a load higher than you think (use a plug-in meter), a low-quality inverter, or high discharge rates that reduce lead-acid capacity. Heat also shortens lead-acid life." },
    { q: "Can I use this for a computer UPS?", a: "Yes. Small computer UPS units use 12 V batteries of 7 to 9 Ah, which is why they only give minutes of runtime: they are designed to let you save work and shut down, not to keep running." },
  ],
  related: ["power-station-runtime-calculator", "solar-panel-size-calculator", "electricity-cost-calculator"],
};
export default tool;
