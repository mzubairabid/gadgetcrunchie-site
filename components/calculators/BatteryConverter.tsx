"use client";
import { useState } from "react";
import { fmt, num } from "@/lib/format";
import { NumberField, Segmented } from "@/components/ui/Fields";
import ResultCard from "@/components/tool/ResultCard";

export default function BatteryConverter() {
  const [dir, setDir] = useState("toWh");
  const [mah, setMah] = useState("10000");
  const [wh, setWh] = useState("37");
  const [v, setV] = useState("3.7");

  const V = num(v);
  const outWh = (num(mah) * V) / 1000;
  const outMah = V > 0 ? (num(wh) * 1000) / V : 0;
  const ok = V > 0 && (dir === "toWh" ? num(mah) > 0 : num(wh) > 0);
  const valueMah = dir === "toWh" ? num(mah) : outMah;

  return (
    <div className="calc">
      <div className="calc-inputs">
        <section className="card" aria-label="Convert">
          <h2 className="card-title">Convert</h2>
          <Segmented label="Direction" value={dir} onChange={setDir} options={[{ value: "toWh", label: "mAh → Wh" }, { value: "toMah", label: "Wh → mAh" }]} />
          {dir === "toWh"
            ? <NumberField label="Capacity" unit="mAh" value={mah} onChange={setMah} />
            : <NumberField label="Energy" unit="Wh" value={wh} onChange={setWh} />}
          <NumberField label="Voltage" unit="V" value={v} onChange={setV} step={0.01}
            hint="Nominal battery voltage: 3.6 to 3.85 V for phone and power bank cells, 12.8 V for a 12 V LiFePO4 pack, 12 V for lead-acid." />
        </section>
      </div>
      <ResultCard title="Result" value={ok ? (dir === "toWh" ? `${fmt(outWh, 2)} Wh` : `${fmt(outMah)} mAh`) : undefined}
        empty={ok ? undefined : "Enter a capacity and voltage."}
        facts={ok ? [{ label: "Amp-hours", value: `${fmt(valueMah / 1000, 2)} Ah` }, { label: "At voltage", value: `${fmt(V, 2)} V` }] : []}
        notes={ok ? [{ tone: "info", text: "mAh only means something next to a voltage. A 10,000 mAh bank at 3.7 V holds 37 Wh, not the same as 10,000 mAh at 5 V." }] : []} />
    </div>
  );
}
