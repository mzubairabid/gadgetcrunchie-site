"use client";
import { useState } from "react";
import { fmt, num } from "@/lib/format";
import { NumberField, SelectField } from "@/components/ui/Fields";
import ResultCard from "@/components/tool/ResultCard";
import Gauge from "@/components/tool/Gauge";

const CABLES = [
  { value: "60", label: "Standard USB-C cable (3 A, up to 60 W)" },
  { value: "100", label: "5 A e-marked cable (up to 100 W)" },
  { value: "240", label: "240 W EPR cable (up to 240 W)" },
  { value: "0", label: "Not sure" },
];

export default function ChargerCheck() {
  const [need, setNeed] = useState("65");
  const [charger, setCharger] = useState("45");
  const [cable, setCable] = useState("60");

  const cableW = num(cable);
  const effective = cableW > 0 ? Math.min(num(charger), cableW) : Math.min(num(charger), 60);
  const ratio = num(need) > 0 ? effective / num(need) : 0;
  const ok = num(need) > 0 && num(charger) > 0;

  let v = { cls: "verdict-ok", text: "Full-speed charging" };
  let detail = "This charger can supply everything your laptop asks for.";
  if (ratio < 1 && ratio >= 0.6) { v = { cls: "verdict-mid", text: "Works, but slower" }; detail = "It will charge while idle or lightly used. Under heavy work (gaming, video export) the battery may still drain slowly."; }
  else if (ratio < 0.6) { v = { cls: "verdict-warn", text: "Probably too weak" }; detail = "Many laptops charge only when asleep with this much power, show a 'slow charger' warning, or refuse to charge."; }

  return (
    <div className="calc">
      <div className="calc-inputs">
        <section className="card" aria-label="Laptop and charger">
          <h2 className="card-title">Laptop and charger</h2>
          <NumberField label="Your laptop's original charger" unit="W" value={need} onChange={setNeed} hint="Printed on the original adapter, e.g. 45 W, 65 W, 100 W, 140 W." />
          <NumberField label="The charger you want to use" unit="W" value={charger} onChange={setCharger} hint="Its maximum USB-C PD output." />
          <SelectField label="Cable" value={cable} onChange={setCable} options={CABLES} hint="Above 60 W, the cable must be rated for it. If unsure, we assume 60 W." />
        </section>
      </div>
      <ResultCard title="Will it charge?" empty={ok ? undefined : "Enter both wattages."}
        facts={ok ? [{ label: "Laptop wants", value: `${fmt(num(need))} W` }, { label: "Actually delivered", value: `${fmt(effective)} W` }] : []}
        notes={ok ? [
          ...(cableW > 0 && num(charger) > cableW ? [{ tone: "warn" as const, text: `Your cable limits the charger to ${fmt(cableW)} W.` }] : []),
          { tone: "info" as const, text: "Using a bigger charger than needed is safe. The laptop only takes what it can use." },
        ] : []}>
        {ok ? (
          <>
            <p className={`verdict ${v.cls} mb-3`}>{v.text}</p>
            <p className="mb-4">{detail}</p>
            <Gauge percent={ratio * 100} label={`${Math.round(ratio * 100)}% of the power your laptop wants`} />
            <p className="hint mt-2">{Math.round(Math.min(ratio, 9.99) * 100)}% of the power your laptop's own charger gives.</p>
          </>
        ) : null}
      </ResultCard>
    </div>
  );
}
