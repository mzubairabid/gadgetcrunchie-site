import type { ToolContent } from "@/lib/types";

const tool: ToolContent = {
  slug: "power-bank-airline-checker",
  name: "Power bank airline checker",
  h1: "Can I take this power bank on a plane?",
  title: "Power Bank Airline Checker: mAh to Wh and the 100 Wh Rule",
  description: "Convert your power bank's mAh to Wh and check it against airline limits: 100 Wh without approval, 101 to 160 Wh with airline approval, over 160 Wh forbidden.",
  blurb: "Convert mAh to Wh and check it against the 100 Wh and 160 Wh flight limits.",
  category: "Charging",
  icon: "plane",
  intro: "Airline rules are written in watt-hours, but power banks are sold in mAh. Enter the numbers from the label to see which rule applies to you before you get to the airport.",
  quickAnswer: "Power banks are allowed in carry-on bags only, never in checked luggage. Up to 100 Wh needs no approval; 101 to 160 Wh needs airline approval (usually two per person); over 160 Wh is forbidden. A 20,000 mAh power bank at 3.7 V is 74 Wh, so it is allowed. Some airlines are stricter, so check yours.",
  updated: "2026-09-27",
  sections: [
    {
      id: "rules", heading: "What are the airline rules for power banks?",
      blocks: [
        { type: "p", text: "In the US, the FAA sorts lithium-ion batteries into three bands by watt-hours, and most airlines worldwide use the same numbers:" },
        { type: "table", head: ["Capacity", "Rule", "Where"], rows: [
          ["Up to 100 Wh", "Allowed, no approval needed", "Carry-on only"],
          ["101 to 160 Wh", "Airline approval needed, usually max two spares", "Carry-on only"],
          ["Over 160 Wh", "Forbidden on passenger aircraft", "Not allowed"],
        ] },
        { type: "p", text: "Power banks count as **spare batteries**, even when a cable is plugged in, so they can never go in checked luggage. If your cabin bag is taken at the gate, remove the power bank first." },
        { type: "callout", tone: "warn", text: "Rules are tightening. IATA's 2026 guidance to airlines presents 100 Wh as the maximum for power banks ahead of a planned 2027 change, and several airlines restrict using or charging power banks during the flight. The airline you fly with has the final say, so check its website before travel." },
      ],
    },
    {
      id: "convert", heading: "How do you convert mAh to Wh?",
      blocks: [
        { type: "formula", text: "Wh = mAh × Voltage ÷ 1,000" },
        { type: "p", text: "Use the **cell voltage**, not the USB output voltage. Almost every power bank uses lithium cells at 3.6 or 3.7 V, and that is the number security staff and airlines use. Using 5 V overstates the Wh by about a third." },
        { type: "h3", text: "Common sizes" },
        { type: "table", head: ["Power bank", "Wh at 3.7 V", "Verdict"], rows: [
          ["10,000 mAh", "37 Wh", "Allowed"], ["20,000 mAh", "74 Wh", "Allowed"], ["26,800 mAh", "99.2 Wh", "Allowed, just under the limit"],
          ["30,000 mAh", "111 Wh", "Airline approval"], ["40,000 mAh", "148 Wh", "Airline approval"], ["50,000 mAh", "185 Wh", "Forbidden"],
        ] },
      ],
    },
    {
      id: "label", heading: "What if the label only shows mAh?",
      blocks: [
        { type: "p", text: "Most reputable power banks print the Wh on the case because airlines ask for it. If yours shows only mAh, look for the small print near the input and output ratings: the cell voltage (3.6 V or 3.7 V) is usually listed there. A power bank with no readable capacity at all can be refused at security." },
        { type: "list", items: [
          "Keep it in your cabin bag or pocket.",
          "Protect the ports from short circuits: a case or a small pouch is enough.",
          "Don't bring swollen, damaged or recalled batteries.",
          "Laptops and phones with their batteries installed follow separate, looser rules.",
        ] },
      ],
    },
    {
      id: "power-stations", heading: "Can I fly with a portable power station?",
      blocks: [
        { type: "p", text: "Almost never. Even small portable power stations hold more than 200 Wh, which is over the 160 Wh ceiling. Ship them by ground courier or rent one at your destination. For CPAP travel, look for batteries sold specifically for flying, which stay under 100 Wh." },
      ],
    },
  ],
  faqs: [
    { q: "Can I take a 20,000 mAh power bank on a plane?", a: "Yes, in your carry-on. At 3.7 V it is 74 Wh, below the 100 Wh limit, so no airline approval is needed under FAA rules." },
    { q: "Can I take a 30,000 mAh power bank on a plane?", a: "Only with airline approval. At 3.7 V it is 111 Wh, which falls in the 101 to 160 Wh band. Some airlines refuse these outright, so ask before you fly." },
    { q: "Why can't power banks go in checked luggage?", a: "A lithium battery fire in the hold is hard to detect and put out. In the cabin, crew can see and deal with it quickly, which is why spare batteries must stay with you." },
    { q: "How many power banks can I take?", a: "For batteries up to 100 Wh, US rules set no fixed limit for personal use, but many airlines set their own (often two to five). For 101 to 160 Wh, the limit is two per person with approval." },
    { q: "Can I use my power bank during the flight?", a: "It depends on the airline. A growing number ban charging from or recharging power banks in flight, or require them to stay visible, not in an overhead bin. Check your carrier's current policy." },
  ],
  related: ["mah-to-wh-converter", "power-bank-charges-calculator", "battery-charging-time-calculator"],
};
export default tool;
