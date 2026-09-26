import type { ToolContent } from "@/lib/types";

const tool: ToolContent = {
  slug: "power-station-runtime-calculator",
  name: "Power station runtime",
  h1: "Power station runtime calculator",
  title: "Power Station Runtime Calculator: How Long Will It Run?",
  description: "Find out how many hours a portable power station will run your fridge, router, laptop or CPAP, the time it will run out, and whether it can handle the load.",
  blurb: "How long a portable power station will run your fridge, router, laptop or CPAP.",
  category: "Batteries & runtime",
  icon: "battery",
  intro: "Add the devices you want to run and see how many hours your portable power station, power bank or backup battery will last, and whether it can handle the load at all.",
  quickAnswer: "Runtime in hours = battery capacity (Wh) × 0.85 × (1 − reserve) ÷ total load (W). A 1,000 Wh power station running a 72 W load (a router and a laptop) lasts about 10.5 hours from its AC sockets with a 10% reserve. Motor devices like fridges also need enough surge power to start.",
  updated: "2026-09-27",
  sections: [
    {
      id: "formula", heading: "How is power station runtime calculated?",
      blocks: [
        { type: "formula", text: "Runtime (h) = Capacity (Wh) × Efficiency × (1 − Reserve) ÷ Load (W)" },
        { type: "p", text: "**Capacity** is the energy stored in the battery, in watt-hours. **Load** is the total power your devices draw at the same time, in watts. **Efficiency** accounts for energy lost as heat, mostly in the inverter that turns battery power into AC for wall sockets. **Reserve** is the part of the battery you don't use, because most units switch off early to protect the cells." },
        { type: "p", text: "The calculator uses 85% efficiency for AC sockets and 92% for USB and 12 V outputs. Those are conservative middle values: good units can be a little better, cheap ones worse, and efficiency drops when you run a tiny load on a big inverter." },
      ],
    },
    {
      id: "example", heading: "Worked example: router and laptop in an outage",
      blocks: [
        { type: "p", text: "A 1,024 Wh power station runs a Wi-Fi router (12 W) and a laptop (60 W) from its AC sockets, keeping 10% in reserve:" },
        { type: "formula", text: "1,024 × 0.85 × 0.90 ÷ 72 ≈ 10.9 hours" },
        { type: "p", text: "Power both from USB-C and the 12 V port instead and you skip the inverter losses, which adds roughly another hour. Unplug the laptop once it's charged and the router alone would run for more than two days." },
      ],
    },
    {
      id: "realistic", heading: "How do you get a realistic number?",
      blocks: [
        { type: "p", text: "The formula is simple. The inputs are where estimates go wrong." },
        { type: "list", items: [
          "**Use average watts, not the label maximum.** Fridges, freezers and pumps cycle on and off, so their average draw across a day is far lower than the sticker. A plug-in energy meter gives you the real figure in 24 hours.",
          "**Check start-up power separately.** Anything with a motor or compressor needs 2 to 3 times its running watts for a moment. If that is higher than the unit's surge rating, it trips, however big the battery is.",
          "**Expect less in the cold.** Lithium batteries deliver noticeably less energy near freezing. For winter outages or camping, raise the reserve.",
          "**Older batteries hold less.** After a few hundred cycles capacity drops. For a unit a few years old, enter 10 to 20% less Wh.",
        ] },
      ],
    },
    {
      id: "typical-draw", heading: "Typical device power draw",
      blocks: [
        { type: "table", caption: "Typical ranges, not measurements of any specific model.", head: ["Device", "Typical average", "Start-up surge"], rows: [
          ["Wi-Fi router", "8 to 15 W", "No"], ["Laptop (charging)", "45 to 90 W", "No"], ["LED bulb", "6 to 12 W", "No"],
          ["43-inch LED TV", "50 to 90 W", "No"], ["CPAP, no humidifier", "30 to 60 W", "No"],
          ["Full-size fridge (daily average)", "60 to 100 W", "Yes, 2 to 3×"], ["Ceiling fan", "50 to 90 W", "Small"],
        ] },
        { type: "p", text: "Planning for a UPS with lead-acid batteries rather than a portable station? Use the [UPS backup time calculator](/tools/ups-backup-time-calculator/), which accounts for the 50% depth-of-discharge limit." },
      ],
    },
  ],
  faqs: [
    { q: "Why is the result lower than capacity divided by watts?", a: "Some energy is lost as heat when battery power is converted to AC, and most units stop before the battery is completely empty. The calculator applies 85% efficiency for AC, 92% for USB and 12 V outputs, and the reserve you choose." },
    { q: "How long will a 1,000 Wh power station run a fridge?", a: "A full-size fridge averages roughly 60 to 100 W across a day because the compressor cycles. With 1,000 Wh, AC output and a 10% reserve, that is about 7.5 to 13 hours. Measure your own fridge with a plug-in meter for a better figure." },
    { q: "What is the difference between capacity and rated output?", a: "Capacity (Wh) is how much energy is stored, like the size of a fuel tank. Rated output (W) is the most power it can deliver at one moment. A big battery with a small output can run a router for days but still can't start a kettle." },
    { q: "Can I use this for a power bank?", a: "Yes. Switch the capacity to mAh and enter the cell voltage (usually 3.7 V). For phone charging specifically, the [power bank charges calculator](/tools/power-bank-charges-calculator/) is more precise." },
    { q: "Is it safe to run a CPAP from a power station?", a: "Many people do, but follow the CPAP maker's guidance. Turning off the heated humidifier cuts power use sharply, and running from a DC adapter instead of AC extends runtime. Treat any calculator result as an estimate." },
  ],
  related: ["ups-backup-time-calculator", "solar-panel-size-calculator", "battery-charging-time-calculator"],
};
export default tool;
