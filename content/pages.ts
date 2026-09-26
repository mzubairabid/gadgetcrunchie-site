import type { PageContent } from "@/lib/types";
import { SITE } from "@/lib/site";

const UPDATED = "2026-09-27";

export const HOME: PageContent = {
  title: "Gadget Crunchie: Free Power, Battery and Charging Calculators",
  description:
    "Free calculators for power station runtime, UPS backup, solar sizing, electricity cost, power banks, charging time and screen PPI. Every result shows its formula.",
  h1: "Will it run, and for how long?",
  intro:
    "Free calculators for the questions people ask before an outage, a flight or a purchase. Every result shows its formula, so you can check the maths yourself.",
  quickAnswer:
    "Gadget Crunchie has ten free calculators for batteries, charging, home energy and screens. They run in your browser, need no sign-up and show the formula behind every answer. Units work for the US, UK, Pakistan and elsewhere: watts, watt-hours, mAh, inches or centimetres, and your own electricity price in any currency.",
  updated: UPDATED,
  sections: [
    {
      id: "why",
      heading: "Why these calculators exist",
      blocks: [
        { type: "p", text: "Most battery and power questions come down to three numbers: how much energy is stored (watt-hours), how fast something uses it (watts) and how much is lost along the way. The trouble is that products are labelled inconsistently. Power banks list mAh, power stations list Wh, inverter batteries list Ah, and chargers list watts. Airlines write their rules in Wh. Your electricity bill counts kWh, or 'units'." },
        { type: "p", text: "Each tool here converts those labels into the answer you actually need: hours of runtime, the number of panels to buy, the cost per month, whether a charger is strong enough, or whether you can board a plane with your power bank." },
      ],
    },
    {
      id: "how-to-use",
      heading: "How to get an accurate answer",
      blocks: [
        { type: "list", ordered: true, items: [
          "**Read the label.** Capacity, voltage and watts are almost always printed on the device, the battery or the charger.",
          "**Use average power, not the maximum.** Fridges, fans and pumps cycle on and off. A plug-in energy meter gives the real figure.",
          "**Keep the defaults unless you know better.** Efficiency and reserve values are set to realistic middle values, not best-case marketing numbers.",
          "**Read the notes under the result.** They flag overloads, start-up surges, airline limits and other things that change the answer.",
        ] },
        { type: "p", text: "If you want to understand the reasoning behind the defaults, the [how we calculate](/how-we-calculate/) page explains every assumption and where it comes from." },
      ],
    },
    {
      id: "who",
      heading: "Who uses these tools",
      blocks: [
        { type: "p", text: "People preparing for power cuts use the [power station runtime](/tools/power-station-runtime-calculator/) and [UPS backup](/tools/ups-backup-time-calculator/) calculators to plan what they can keep running. In Pakistan and India, where scheduled load-shedding is common, the UPS tool is built around the 12 V, 24 V and 48 V lead-acid and lithium batteries sold locally." },
        { type: "p", text: "Travellers check their power bank against airline limits before packing. Homeowners size a solar system or work out which appliance is quietly adding to the bill. Anyone choosing a new monitor or laptop charger can compare options on equal terms before buying." },
      ],
    },
    {
      id: "promise",
      heading: "What we promise",
      blocks: [
        { type: "list", items: [
          "**No data collection from the tools.** Calculations happen in your browser; the numbers you type aren't sent anywhere.",
          "**Formulas on every page,** with a worked example you can check by hand.",
          "**Conservative defaults.** We'd rather you plan for a little less runtime than be caught out.",
          "**Corrections welcome.** If you spot a mistake, [tell us](/contact/) and we'll fix it and update the date.",
        ] },
      ],
    },
  ],
  faqs: [
    { q: "Are the calculators free?", a: "Yes. Every tool is free, with no sign-up. The site is supported by advertising." },
    { q: "How accurate are the results?", a: "They are as accurate as the numbers you enter. The formulas are standard physics; the uncertainty comes from real-world factors like battery age, temperature and how much a device actually draws. Treat results as planning estimates." },
    { q: "Do the tools work outside the US?", a: "Yes. Energy units are the same everywhere, and the electricity cost tool accepts any currency. Screen tools work in inches or centimetres." },
    { q: "Can I suggest a new calculator?", a: "Please do. Send the question you're trying to answer through the [contact page](/contact/)." },
  ],
};

export const TOOLS_INDEX: PageContent = {
  title: "All Calculators: Batteries, Charging, Solar and Screens",
  description:
    "Browse every Gadget Crunchie calculator: power station runtime, UPS backup, solar size, electricity cost, power bank, charging time, charger wattage and screen PPI.",
  h1: "All calculators",
  intro: "Pick the question you're trying to answer. Each calculator explains its formula, lists common values and flags the mistakes people usually make.",
  quickAnswer:
    "The tools are grouped by job: batteries and runtime (how long will it last), charging (how long to refill, which charger, airline limits), home energy (running cost and solar sizing) and screens (pixel density and size). If you're not sure where to start, begin with the runtime calculator.",
  updated: UPDATED,
  sections: [
    {
      id: "choose",
      heading: "Which calculator do I need?",
      blocks: [
        { type: "table", head: ["Your question", "Use this"], rows: [
          ["How long will my power station run my devices?", "[Power station runtime](/tools/power-station-runtime-calculator/)"],
          ["How many hours of backup from my inverter battery?", "[UPS backup time](/tools/ups-backup-time-calculator/)"],
          ["How many solar panels and batteries do I need?", "[Solar panel size](/tools/solar-panel-size-calculator/)"],
          ["What does this appliance cost to run?", "[Electricity cost](/tools/electricity-cost-calculator/)"],
          ["Can I take this power bank on a plane?", "[Power bank airline checker](/tools/power-bank-airline-checker/)"],
          ["How many phone charges from my power bank?", "[Power bank charges](/tools/power-bank-charges-calculator/)"],
          ["How many Wh is this mAh battery?", "[mAh to Wh converter](/tools/mah-to-wh-converter/)"],
          ["How long will it take to charge?", "[Charging time](/tools/battery-charging-time-calculator/)"],
          ["Is this USB-C charger enough for my laptop?", "[Laptop charger checker](/tools/laptop-charger-wattage-checker/)"],
          ["How sharp is this monitor or TV?", "[Screen PPI](/tools/screen-ppi-calculator/)"],
        ] },
      ],
    },
    {
      id: "units",
      heading: "The units behind every tool",
      blocks: [
        { type: "p", text: "**Watts (W)** measure power: how fast energy is used or delivered right now. A 60 W laptop charger can deliver up to 60 watts at any moment." },
        { type: "p", text: "**Watt-hours (Wh)** measure energy: power multiplied by time. A 1,000 Wh battery can, in theory, supply 100 W for 10 hours. Kilowatt-hours (kWh) are the same unit × 1,000 and are what electricity bills count." },
        { type: "p", text: "**mAh and Ah** measure electric charge. They only become energy when multiplied by voltage: Wh = Ah × V. That's why two batteries with the same mAh can hold very different amounts of energy, and why the [mAh to Wh converter](/tools/mah-to-wh-converter/) asks for voltage." },
        { type: "p", text: "**Efficiency** is the share of energy that survives conversion. Turning battery DC into AC, stepping USB voltages up and down, and charging a battery all waste some energy as heat. Our tools apply realistic efficiency values rather than assuming a perfect 100%." },
      ],
    },
    {
      id: "limits",
      heading: "What the calculators can't know",
      blocks: [
        { type: "p", text: "A calculator can't see your specific fridge, your battery's age or the temperature in your garage. Each of these can move the real result by 10 to 30%. Where it matters most (motor start-up surges, medical equipment, airline rules), the tools show a warning next to the result." },
        { type: "p", text: "For safety-critical decisions, such as powering medical devices or wiring a home solar system, use these results for planning and confirm with the manufacturer or a qualified electrician." },
      ],
    },
  ],
  faqs: [
    { q: "Do I need to create an account?", a: "No. Every calculator works immediately in your browser." },
    { q: "Can I use the calculators on my phone?", a: "Yes. Every page is designed for small screens first, and results update as you type." },
    { q: "Will you add more calculators?", a: "Yes. New tools are added regularly. Suggestions through the [contact page](/contact/) help decide what comes next." },
  ],
};

export const ABOUT: PageContent = {
  title: "About Gadget Crunchie",
  description: `Who builds Gadget Crunchie, why the calculators exist, and how we keep the numbers honest. Built and maintained by ${SITE.author.name} of ${SITE.builtBy.name}.`,
  h1: "About Gadget Crunchie",
  intro: "A small, independent site of power and gadget calculators, built by a web developer from Pakistan who got tired of guessing how long the lights would stay on.",
  updated: UPDATED,
  sections: [
    {
      id: "who",
      heading: "Who's behind the site",
      blocks: [
        { type: "p", text: `I'm **${SITE.author.name}**, a web developer from Pakistan and the founder of [${SITE.builtBy.name}](${SITE.builtBy.url}). I build websites and web tools for businesses. I have been building websites since 2019. Gadget Crunchie is where I use the same skills to turn confusing battery and power questions into clear, checkable answers.` },
        { type: "p", text: "The site started with a problem I deal with at home. In Pakistan, scheduled power cuts (load-shedding) are part of daily life, and every household asks the same questions: how long will this UPS battery last, is a bigger battery worth it, should we add solar, which charger is enough? When I looked for answers, I found two kinds of pages: sales pages pushing one product, and calculators that assumed perfect efficiency and gave numbers nobody sees in real life." },
        { type: "p", text: "So I built calculators that use realistic assumptions, show their working and warn you about the things that catch people out: lead-acid batteries that shouldn't be drained past half, fridges that need two to three times their running power just to start, and power banks that deliver roughly two-thirds of their rated capacity." },
      ],
    },
    {
      id: "tools",
      heading: "What you'll find here",
      blocks: [
        { type: "p", text: "The calculators cover four kinds of question. **Batteries and runtime:** how long a power station, power bank or UPS battery will keep your devices running. **Charging:** how long a battery takes to refill, whether a charger is strong enough, and whether a power bank is allowed on a plane. **Home energy:** what an appliance costs to run and how big a solar system needs to be. **Screens:** how sharp a monitor, laptop or TV really is." },
        { type: "p", text: "The tools are built for people in the US, the UK, Pakistan and anywhere else. Energy units are the same everywhere, and where money or local rules come in, you enter your own price per unit, your own currency and your own battery voltage." },
        { type: "p", text: "Every calculator page follows the same layout: a short answer at the top, the tool itself, the formula with a worked example, the mistakes people usually make and a list of common questions. Once you've used one, you know where to find everything on the others." },
      ],
    },
    {
      id: "principles",
      heading: "How the numbers are kept honest",
      blocks: [
        { type: "list", items: [
          "**Formulas first.** Every tool publishes its formula and a worked example, so you can check the result with a phone calculator in under a minute.",
          "**Realistic defaults.** Efficiency, reserve and usable-capacity values are set to typical real-world figures, not best-case marketing claims.",
          "**Labelled estimates.** Typical device wattages are shown as ranges and marked as typical. Specific product specs are only listed after checking them against the manufacturer's published data.",
          "**Your data stays with you.** The calculators run in your browser. Nothing you type is sent to or stored on a server.",
          "**Dated updates.** Each page shows when it was last reviewed. When rules change, such as airline battery limits, the page is updated and re-dated.",
        ] },
        { type: "p", text: "The full list of assumptions and where they come from is on the [how we calculate](/how-we-calculate/) page." },
      ],
    },
    {
      id: "money",
      heading: "How the site is funded",
      blocks: [
        { type: "p", text: "Gadget Crunchie is free to use and supported by advertising. Some pages may later include affiliate links to products; if they do, it will be disclosed on the page, and it will never change a calculation. No manufacturer or shop pays to be featured or to influence results." },
      ],
    },
    {
      id: "contact",
      heading: "Get in touch",
      blocks: [
        { type: "p", text: "Found an error, want a calculator that doesn't exist yet, or have a question about a result? Use the [contact page](/contact/). Corrections are the most useful messages I get, and they're fixed quickly." },
        { type: "p", text: `If you need a website, web app or a custom calculator for your own business, that's what I do at [${SITE.builtBy.name}](${SITE.builtBy.url}).` },
      ],
    },
  ],
  faqs: [
    { q: "Is Gadget Crunchie connected to any brand?", a: "No. It's independent and isn't sponsored by any manufacturer or retailer." },
    { q: "Who checks the calculators?", a: `${SITE.author.name} builds and tests every tool, and checks each formula against a worked example by hand before it goes live.` },
    { q: "Can I use a calculator on my own website?", a: "You're welcome to link to any tool. For an embeddable or custom version for your business, get in touch." },
  ],
};

export const METHODOLOGY: PageContent = {
  title: "How We Calculate: Formulas, Assumptions and Sources",
  description:
    "The formulas and default assumptions behind every Gadget Crunchie calculator: efficiency, reserve, depth of discharge, charging taper, peak sun hours and airline battery rules.",
  h1: "How we calculate",
  intro: "Every assumption the calculators make, why we chose it, and when you should change it.",
  quickAnswer:
    "All tools use standard electrical relationships (W, Wh, V, Ah) plus a few conservative real-world factors: 85% inverter efficiency, 92% DC efficiency, 10% battery reserve, 50% usable capacity for lead-acid, 90% for lithium, 65% power bank delivery and a half-speed charge above 80%. You can change most of these in the tools.",
  updated: UPDATED,
  sections: [
    {
      id: "core",
      heading: "The core relationships",
      blocks: [
        { type: "formula", text: "Energy (Wh) = Power (W) × Time (h)" },
        { type: "formula", text: "Energy (Wh) = Charge (Ah) × Voltage (V)" },
        { type: "p", text: "Everything else builds on these two lines. Runtime is usable energy divided by power; charging time is energy needed divided by charging power; cost is energy in kWh multiplied by price." },
      ],
    },
    {
      id: "defaults",
      heading: "Default values and why we use them",
      blocks: [
        { type: "table", head: ["Assumption", "Default", "Why"], rows: [
          ["Inverter efficiency (AC output)", "85%", "Typical for portable power stations and home inverters across normal loads; lower at very light loads."],
          ["DC output efficiency (USB, 12 V)", "92%", "DC-DC conversion loses less than DC-AC inversion."],
          ["Battery reserve", "10%", "Most battery systems cut off before 0% to protect the cells."],
          ["Lead-acid usable capacity", "50%", "Discharging deeper sharply shortens lead-acid battery life."],
          ["Lithium / LiFePO4 usable capacity", "90%", "Lithium chemistries tolerate deep discharge; the battery management system keeps a small buffer."],
          ["Power bank delivery", "65%", "Voltage step-up, the phone's own charging circuit, cable losses and heat."],
          ["Charging efficiency", "85%", "Heat and conversion losses during charging."],
          ["Charge taper above 80%", "Half speed", "Constant-voltage charging slows as the battery fills."],
          ["Solar system losses", "25%", "Heat, dust, shading, wiring, controller and inverter combined."],
        ] },
        { type: "p", text: "Each default sits in the middle of the realistic range. Where the tool lets you change it, the hint text tells you when to go higher or lower." },
      ],
    },
    {
      id: "devices",
      heading: "Device wattages",
      blocks: [
        { type: "p", text: "Preset device wattages are typical averages for common products, shown in the tools with a '~' and described as typical. Real devices vary widely; a measurement with a plug-in energy meter is always better. Appliances with compressors (fridges, freezers) are listed at their average draw across a day, not their running peak." },
        { type: "p", text: "Portable power station models only appear in the runtime calculator once their capacity and output have been checked against the manufacturer's published specifications." },
      ],
    },
    {
      id: "rules",
      heading: "Rules and regulations",
      blocks: [
        { type: "p", text: "The airline checker follows the US FAA and TSA thresholds for lithium-ion batteries (up to 100 Wh, 101 to 160 Wh with airline approval, over 160 Wh forbidden, spare batteries in carry-on only), which most airlines worldwide also use. Airlines may apply stricter rules, and IATA guidance for 2026 points towards a 100 Wh cap for power banks, so the tool always tells you to confirm with your airline." },
        { type: "p", text: "Where a rule can change, the page shows its last-updated date. If you notice that a rule has changed, please [let us know](/contact/)." },
      ],
    },
    {
      id: "not-modelled",
      heading: "What the calculators don't model",
      blocks: [
        { type: "list", items: [
          "**Battery ageing.** A battery at 80% health holds about 80% of its rated energy. Reduce the capacity you enter for older batteries.",
          "**Temperature.** Lithium batteries deliver less energy in the cold; lead-acid batteries age faster in the heat.",
          "**Peukert effect.** Lead-acid batteries deliver less than their rated Ah at high discharge rates. The UPS tool warns you when the load is high relative to the battery.",
          "**Idle draw.** Inverters and power stations use a few watts just by being switched on, which matters for very small loads over long periods.",
        ] },
      ],
    },
    {
      id: "check",
      heading: "How to check a result yourself",
      blocks: [
        { type: "p", text: "Take the capacity in Wh, multiply by the efficiency and usable share shown on the tool page, and divide by the load in watts. For example, 1,000 Wh × 0.85 × 0.9 ÷ 100 W = 7.65 hours. If your figure matches the tool, the inputs were read correctly; if it doesn't, check units first (Wh vs mAh, W vs kW), because that's where most mistakes happen." },
      ],
    },
    {
      id: "rounding",
      heading: "Rounding and precision",
      blocks: [
        { type: "p", text: "Results are rounded to a sensible precision: minutes for runtime, one decimal for watt-hours, whole numbers for PPI. Showing more digits would suggest more certainty than the inputs support." },
      ],
    },
  ],
};

export const CONTACT: PageContent = {
  title: "Contact Gadget Crunchie",
  description: "Report a mistake, suggest a new calculator or ask about a result. Corrections are usually fixed within a few days.",
  h1: "Contact",
  intro: "Questions, corrections or a calculator you'd like to see? Here's how to reach us.",
  updated: UPDATED,
  sections: [
    {
      id: "email",
      heading: "Email",
      blocks: [
        { type: "p", text: `Write to **${SITE.contactEmail}**. We usually reply within two working days.` },
        { type: "p", text: "To help us answer quickly, include the page you were on, the numbers you entered and the result you expected. For product questions, a photo of the label is often the fastest way to sort things out." },
      ],
    },
    {
      id: "what",
      heading: "What we can help with",
      blocks: [
        { type: "list", items: [
          "**Errors:** a wrong formula, an outdated rule or a typo. These get priority.",
          "**New calculators:** tell us the question you're trying to answer.",
          "**Results:** if a number looks off, we'll explain how it was worked out.",
        ] },
        { type: "p", text: "We can't give personalised electrical, legal or medical advice, recommend installers or diagnose a faulty device. For wiring, solar installations or medical equipment, please speak to a qualified professional." },
      ],
    },
  ],
  faqs: [
    { q: "How quickly are mistakes fixed?", a: "Usually within a few days. The page's 'updated' date changes when a fix goes live." },
    { q: "Can you add a calculator for my product or business?", a: "We add general-purpose tools that help many people. For a custom calculator on your own website, contact [MZA Dev](https://www.mzadev.com)." },
    { q: "Do you accept sponsored content?", a: "No. Manufacturers can't pay to be featured or to change results." },
  ],
};

export const PRIVACY: PageContent = {
  title: "Privacy Policy",
  description: "How Gadget Crunchie handles your data: calculators run in your browser, Google AdSense uses cookies for ads, and how to control or opt out of personalised advertising.",
  h1: "Privacy policy",
  intro: "The short version: the calculators don't collect what you type. Advertising partners use cookies, and you can control them.",
  updated: UPDATED,
  sections: [
    // TODO: review before launch. Update if you add analytics, a newsletter or a contact form.
    {
      id: "who",
      heading: "Who we are",
      blocks: [
        { type: "p", text: `This policy covers ${SITE.url}. The site is operated by ${SITE.author.name}. Contact: ${SITE.contactEmail}.` },
      ],
    },
    {
      id: "calculators",
      heading: "Information you enter in the calculators",
      blocks: [
        { type: "p", text: "Calculations run entirely in your web browser. The numbers you type are not sent to or stored on our servers, and we can't see them." },
      ],
    },
    {
      id: "ads",
      heading: "Advertising and cookies",
      blocks: [
        { type: "p", text: "This site uses Google AdSense to show ads. Google and its partners use cookies and similar technologies to serve ads based on your visits to this and other websites, to measure ad performance and to prevent fraud." },
        { type: "p", text: "We also use Google Analytics to understand, in aggregate, how many people visit and which calculators they use. Google Analytics uses cookies for this." },
        { type: "list", items: [
          "You can opt out of personalised advertising in [Google's Ads Settings](https://adssettings.google.com).",
          "You can learn how Google uses information from sites that use its services at [policies.google.com/technologies/partner-sites](https://policies.google.com/technologies/partner-sites).",
          "Visitors in the UK, the European Economic Area and Switzerland are asked for consent before personalised ads are shown, and can change their choice at any time through the privacy message.",
        ] },
      ],
    },
        {
      id: "cookies",
      heading: "Which cookies are used",
      blocks: [
        { type: "table", head: ["Set by", "Purpose", "Can you refuse?"], rows: [
          ["Google AdSense and its ad partners", "Showing and measuring ads, limiting how often you see an ad, detecting fraud; personalising ads where you have allowed it", "Yes, through the consent message (UK, EEA, Switzerland) or Google's Ads Settings"],
          ["Google Analytics", "Counting visits and seeing which calculators are used, in aggregate. We don't use it to identify you", "Yes, through the consent message or by blocking cookies in your browser"],
          ["Cloudflare", "Security and bot protection, keeping the site available", "These are strictly necessary for the site to work"],
        ] },
        { type: "p", text: "The calculators themselves don't set cookies. You can also block or delete cookies in your browser settings; the calculators will keep working, but ads may be less relevant." },
        { type: "p", text: "You can stop Google Analytics from collecting data about your visits on any site with Google's [Analytics opt-out browser add-on](https://tools.google.com/dlpage/gaoptout)." },
      ],
    },
    {
      id: "retention",
      heading: "How long data is kept",
      blocks: [
        { type: "p", text: "Emails you send us are kept only as long as needed to answer and follow up, and deleted after that. Advertising and hosting partners keep data according to their own policies, linked above." },
      ],
    },
    {
      id: "logs",
      heading: "Hosting and technical data",
      blocks: [
        { type: "p", text: "The site is delivered through Cloudflare, which processes technical information such as IP addresses and browser type to deliver pages securely and protect against abuse. We don't use this information to identify you." },
      ],
    },
    {
      id: "email",
      heading: "If you email us",
      blocks: [
        { type: "p", text: "If you contact us by email, we use your address and message only to reply. We don't add you to any mailing list or share your details." },
      ],
    },
    {
      id: "rights",
      heading: "Your rights",
      blocks: [
        { type: "p", text: "Depending on where you live, you may have the right to access, correct or delete personal data about you, or to object to its use. Because we don't store calculator inputs or run accounts, we usually hold nothing beyond emails you send us. To make a request, email us." },
        { type: "p", text: "This site isn't aimed at children under 13 and doesn't knowingly collect their data." },
      ],
    },
    {
      id: "changes",
      heading: "Changes to this policy",
      blocks: [
        { type: "p", text: "If we change this policy, we'll update the date at the top of the page. Significant changes will be highlighted on the home page." },
      ],
    },
  ],
};

export const TERMS: PageContent = {
  title: "Terms of Use",
  description: "The terms for using Gadget Crunchie's free calculators and content.",
  h1: "Terms of use",
  intro: "By using this site, you agree to these terms. They're short and written in plain English.",
  updated: UPDATED,
  sections: [
    // TODO: review before launch.
    {
      id: "use",
      heading: "Using the calculators",
      blocks: [
        { type: "p", text: "The calculators and articles are free for personal and commercial use. They provide estimates based on the information you enter and on typical values. They are provided 'as is', without any guarantee that results are accurate, complete or suitable for a particular purpose." },
        { type: "p", text: "You are responsible for how you use the results. Don't rely on them alone for safety-critical decisions such as powering medical equipment, sizing electrical wiring or complying with transport regulations." },
      ],
    },
    {
      id: "content",
      heading: "Content and copyright",
      blocks: [
        { type: "p", text: "You're welcome to link to any page and to quote short passages with a link back. Please don't copy calculators, code or large parts of the text to another site without permission." },
      ],
    },
    {
      id: "links",
      heading: "Links and advertising",
      blocks: [
        { type: "p", text: "The site shows third-party ads and may link to other websites. We don't control and aren't responsible for their content, products or privacy practices." },
      ],
    },
    {
      id: "liability",
      heading: "Limitation of liability",
      blocks: [
        { type: "p", text: "To the extent allowed by law, we aren't liable for any loss or damage arising from the use of the site or reliance on its results." },
      ],
    },
    {
      id: "changes",
      heading: "Changes",
      blocks: [
        { type: "p", text: "We may update these terms. The current version and its date are always on this page. Questions: [contact us](/contact/)." },
      ],
    },
  ],
};

export const DISCLAIMER: PageContent = {
  title: "Disclaimer",
  description: "Gadget Crunchie calculator results are estimates. Read this before relying on them for medical equipment, electrical work or travel.",
  h1: "Disclaimer",
  intro: "Please read this before relying on any result.",
  updated: UPDATED,
  sections: [
    {
      id: "estimates",
      heading: "Results are estimates",
      blocks: [
        { type: "p", text: "The calculators use standard formulas and realistic assumptions, explained on [how we calculate](/how-we-calculate/). Real results depend on your specific devices, battery age and health, temperature, wiring and usage, and can be noticeably lower than the estimate." },
      ],
    },
    {
      id: "safety",
      heading: "Safety-critical uses",
      blocks: [
        { type: "p", text: "Don't rely on these estimates alone for medical equipment (such as CPAP machines or oxygen concentrators), safety systems or any situation where losing power could cause harm. Follow the manufacturer's guidance and keep a backup plan." },
        { type: "p", text: "Electrical installations, including home solar, inverter and battery systems, should be designed and installed by a qualified electrician in line with local regulations." },
      ],
    },
    {
      id: "travel",
      heading: "Travel rules",
      blocks: [
        { type: "p", text: "Airline and security rules for batteries change and vary by airline and country. The airline checker reflects widely used thresholds, but your airline has the final say. Always confirm before you travel." },
      ],
    },
    {
      id: "affiliate",
      heading: "Advertising and affiliate links",
      blocks: [
        { type: "p", text: "The site is funded by advertising. Some pages may include affiliate links; if you buy through them, the site may earn a commission at no extra cost to you. This never changes a calculation." },
      ],
    },
  ],
};
