"use client";
import { useState } from "react";
import { fmt, formatDuration, num } from "@/lib/format";
import { NumberField, RangeField, Segmented } from "@/components/ui/Fields";
import ResultCard from "@/components/tool/ResultCard";

export default function ChargingTime() {
  const [unit, setUnit] = useState("mah");
  const [mah, setMah] = useState("5000");
  const [v, setV] = useState("3.85");
  const [whIn, setWhIn] = useState("1024");
  const [charger, setCharger] = useState("25");
  const [maxIn, setMaxIn] = useState("25");
  const [from, setFrom] = useState(10);
  const [to, setTo] = useState(100);
  const [eff, setEff] = useState(85);

  const wh = unit === "mah" ? (num(mah) * num(v)) / 1000 : num(whIn);
  const power = Math.min(num(charger), num(maxIn) > 0 ? num(maxIn) : Infinity) * (eff / 100);
  const lo = Math.min(from, to), hi = Math.max(from, to);
  // Fast phase up to 80%, then roughly half speed for the last 20% (constant-voltage taper).
  const fast = Math.max(0, Math.min(hi, 80) - lo) / 100;
  const slow = Math.max(0, hi - Math.max(lo, 80)) / 100;
  const hours = wh > 0 && power > 0 ? (wh * fast) / power + (wh * slow) / (power * 0.5) : null;
  const to80 = wh > 0 && power > 0 && lo < 80 ? (wh * (80 - lo)) / 100 / power : null;

  return (
    <div className="calc">
      <div className="calc-inputs">
        <section className="card" aria-label="Battery">
          <h2 className="card-title">The battery</h2>
          <Segmented label="Capacity listed in" value={unit} onChange={setUnit} options={[{ value: "mah", label: "mAh (phones, power banks)" }, { value: "wh", label: "Wh (laptops, power stations)" }]} />
          {unit === "mah" ? (
            <div className="grid-2">
              <NumberField label="Capacity" unit="mAh" value={mah} onChange={setMah} />
              <NumberField label="Voltage" unit="V" value={v} onChange={setV} step={0.01} hint="Phones ~3.85 V, power banks ~3.7 V." />
            </div>
          ) : <NumberField label="Capacity" unit="Wh" value={whIn} onChange={setWhIn} />}
          <div className="grid-2">
            <RangeField label="Start at" suffix="%" value={from} onChange={setFrom} min={0} max={95} step={5} />
            <RangeField label="Charge to" suffix="%" value={to} onChange={setTo} min={5} max={100} step={5} />
          </div>
        </section>
        <section className="card" aria-label="Charger">
          <h2 className="card-title">The charger</h2>
          <div className="grid-2">
            <NumberField label="Charger output" unit="W" value={charger} onChange={setCharger} hint="Printed on the plug, e.g. 20 W, 65 W." />
            <NumberField label="Device's max charging speed" unit="W" value={maxIn} onChange={setMaxIn} hint="The device limits speed too. Use 0 if unknown." />
          </div>
          <RangeField label="Charging efficiency" suffix="%" value={eff} onChange={setEff} min={60} max={95} hint="Heat and conversion losses. 80 to 90% is typical." />
        </section>
      </div>
      <ResultCard title="Estimated charging time" value={hours != null ? formatDuration(hours) : undefined}
        sub={hours != null ? `from ${lo}% to ${hi}%` : undefined}
        empty={hours == null ? "Enter the battery size and charger watts." : undefined}
        facts={hours != null ? [{ label: "Energy added", value: `${fmt((wh * (hi - lo)) / 100, 1)} Wh` }, { label: "Effective power", value: `${fmt(power, 1)} W` },
          ...(to80 != null ? [{ label: "Time to 80%", value: formatDuration(to80) }] : [])] : []}
        notes={hours != null ? [{ tone: "info", text: "Charging slows after about 80% to protect the battery. That is why the last 20% takes as long as the previous 40%." }] : []} />
    </div>
  );
}
