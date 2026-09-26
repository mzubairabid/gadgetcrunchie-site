"use client";
import { useState } from "react";
import { fmt, formatDuration, num } from "@/lib/format";
import { NumberField, RangeField, SelectField } from "@/components/ui/Fields";
import ResultCard, { type Note } from "@/components/tool/ResultCard";
import Gauge from "@/components/tool/Gauge";

const TYPES = {
  leadacid: { label: "Lead-acid / tubular (use 50%)", dod: 0.5 },
  agm: { label: "AGM / gel (use 50%)", dod: 0.5 },
  lithium: { label: "Lithium / LiFePO4 (use 90%)", dod: 0.9 },
} as const;
type T = keyof typeof TYPES;

export default function UpsBackup() {
  const [ah, setAh] = useState("150");
  const [v, setV] = useState("12");
  const [count, setCount] = useState("1");
  const [type, setType] = useState<T>("leadacid");
  const [eff, setEff] = useState(85);
  const [load, setLoad] = useState("300");

  const batWh = num(ah) * num(v) * Math.max(1, num(count));
  const usable = batWh * TYPES[type].dod * (eff / 100);
  const w = num(load);
  const hours = batWh > 0 && w > 0 ? usable / w : null;
  const inverterVA = w > 0 ? Math.ceil(((w / 0.8) * 1.25) / 50) * 50 : 0;

  const notes: Note[] = [];
  if (type !== "lithium") notes.push({ tone: "info", text: "Draining lead-acid batteries below about 50% shortens their life, so this tool only counts half the capacity." });
  if (hours != null && hours < 1) notes.push({ tone: "warn", text: "Under an hour of backup. At high loads, lead-acid batteries also deliver less than their rated Ah, so real runtime may be shorter." });

  return (
    <div className="calc">
      <div className="calc-inputs">
        <section className="card" aria-label="Battery bank">
          <h2 className="card-title">Battery bank</h2>
          <div className="grid-2">
            <NumberField label="Battery capacity" unit="Ah" value={ah} onChange={setAh} hint="Printed on the battery, e.g. 150 Ah or 200 Ah." />
            <SelectField label="Battery voltage" value={v} onChange={setV} options={[{ value: "12", label: "12 V" }, { value: "24", label: "24 V" }, { value: "48", label: "48 V" }]} />
          </div>
          <NumberField label="Number of batteries" value={count} onChange={setCount} step={1} min={1} hint="Two 12 V batteries in series for a 24 V inverter = 2." />
          <SelectField label="Battery type" value={type} onChange={(x) => setType(x as T)} options={Object.entries(TYPES).map(([k, o]) => ({ value: k, label: o.label }))} />
          <RangeField label="Inverter efficiency" suffix="%" value={eff} onChange={setEff} min={70} max={95} step={1} hint="Most home UPS/inverters are 80 to 90% efficient." />
        </section>
        <section className="card" aria-label="Load">
          <h2 className="card-title">What it powers</h2>
          <NumberField label="Total load" unit="W" value={load} onChange={setLoad} hint="Add up everything running at once: e.g. 2 fans (150 W) + 4 LED lights (40 W) + router (12 W) + TV (70 W)." />
        </section>
      </div>
      <ResultCard title="Estimated backup time" value={hours != null ? formatDuration(hours) : undefined}
        empty={hours == null ? "Enter battery capacity and load." : undefined}
        facts={[{ label: "Battery energy", value: `${fmt(batWh)} Wh` }, { label: "Usable energy", value: `${fmt(usable)} Wh` },
          { label: "Suggested inverter size", value: inverterVA ? `${fmt(inverterVA)} VA` : "–" }, { label: "Load", value: `${fmt(w)} W` }]}
        notes={notes}>
        {hours != null ? <Gauge hours={hours} /> : null}
      </ResultCard>
    </div>
  );
}
