"use client";
import { useEffect, useMemo, useState } from "react";
import { DEVICE_PRESETS, type DevicePreset } from "@/lib/devices";
import { VERIFIED_STATIONS } from "@/lib/stations";
import { fmt, formatDuration, num } from "@/lib/format";
import { NumberField, RangeField, Segmented, SelectField } from "@/components/ui/Fields";
import ResultCard, { type Note } from "@/components/tool/ResultCard";
import Gauge from "@/components/tool/Gauge";

const EFF = { ac: 0.85, dc: 0.92 } as const;
type Row = { key: number; name: string; watts: string; qty: string; motor: boolean; medical: boolean };
let nextKey = 1;
const toRow = (p: DevicePreset): Row => ({ key: nextKey++, name: p.name, watts: String(p.watts), qty: "1", motor: !!p.motor, medical: !!p.medical });

function untilText(now: Date | null, h: number) {
  if (!now) return "";
  const end = new Date(now.getTime() + h * 3600e3);
  const t = end.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  const d0 = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const d1 = new Date(end.getFullYear(), end.getMonth(), end.getDate()).getTime();
  const days = Math.round((d1 - d0) / 86400000);
  if (days === 0) return `Start now and it runs until about ${t} today.`;
  if (days === 1) return `Start now and it runs until about ${t} tomorrow.`;
  return `Start now and it runs until about ${t}, ${days} days from today.`;
}

export default function RuntimeCalculator() {
  const [unit, setUnit] = useState("wh");
  const [wh, setWh] = useState("1000");
  const [mah, setMah] = useState("20000");
  const [volts, setVolts] = useState("3.7");
  const [outputW, setOutputW] = useState("1500");
  const [output, setOutput] = useState<"ac" | "dc">("ac");
  const [reserve, setReserve] = useState(10);
  const [rows, setRows] = useState<Row[]>(() => [toRow(DEVICE_PRESETS[0]), toRow(DEVICE_PRESETS[2])]);
  const [pick, setPick] = useState("fridge");
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => setNow(new Date()), []);

  const capacity = unit === "wh" ? num(wh) : (num(mah) * num(volts)) / 1000;
  const load = rows.reduce((s, r) => s + num(r.watts) * num(r.qty), 0);
  const usable = capacity * EFF[output] * (1 - reserve / 100);
  const hours = useMemo(() => (capacity > 0 && load > 0 ? usable / load : null), [capacity, load, usable]);

  const notes: Note[] = [];
  if (num(outputW) > 0 && load > num(outputW))
    notes.push({ tone: "warn", text: `Your devices need ${fmt(load)} W together, but this unit supplies ${fmt(num(outputW))} W. It will shut off. Unplug something or choose a bigger unit.` });
  else if (rows.some((r) => r.motor && num(r.qty) > 0))
    notes.push({ tone: "info", text: "Fridges, fans and pumps need 2 to 3 times their running watts for a second at start-up. Check the unit's surge rating covers that." });
  if (rows.some((r) => r.medical && num(r.qty) > 0))
    notes.push({ tone: "warn", text: "For CPAP or other medical equipment, follow the maker's backup-power guidance and treat this as a rough estimate." });

  const update = (key: number, f: "name" | "watts" | "qty", v: string) => setRows((rs) => rs.map((r) => (r.key === key ? { ...r, [f]: v } : r)));

  return (
    <div className="calc">
      <div className="calc-inputs">
        <section className="card" aria-label="Battery">
          <h2 className="card-title">Your power station or battery</h2>
          {VERIFIED_STATIONS.length > 0 && (
            <SelectField label="Pick a model (fills in the specs)" value="" onChange={(id) => {
              const s = VERIFIED_STATIONS.find((x) => x.id === id);
              if (s) { setUnit("wh"); setWh(String(s.wh)); setOutputW(String(s.outputW)); }
            }} options={[{ value: "", label: "Choose a model" }, ...VERIFIED_STATIONS.map((s) => ({ value: s.id, label: `${s.name} (${s.wh} Wh)` }))]} />
          )}
          <Segmented label="Capacity is listed in" value={unit} onChange={setUnit} options={[{ value: "wh", label: "Wh" }, { value: "mah", label: "mAh" }]} />
          {unit === "wh" ? (
            <NumberField label="Capacity" unit="Wh" value={wh} onChange={setWh} hint="Printed on the box or the back of the unit, e.g. 1,024 Wh." />
          ) : (
            <div className="grid-2">
              <NumberField label="Capacity" unit="mAh" value={mah} onChange={setMah} />
              <NumberField label="Battery voltage" unit="V" value={volts} onChange={setVolts} step={0.1} hint="Power banks: 3.6 or 3.7 V." />
            </div>
          )}
          <NumberField label="Rated output" unit="W" value={outputW} onChange={setOutputW} hint="The most it can supply at once. Use 0 if you don't know." />
          <Segmented label="Devices plug into" value={output} onChange={(v) => setOutput(v as "ac" | "dc")}
            options={[{ value: "ac", label: "AC sockets" }, { value: "dc", label: "USB / 12 V DC" }]}
            hint="AC loses more energy in conversion (85% vs 92% used here)." />
          <RangeField label="Keep in reserve" suffix="%" value={reserve} onChange={setReserve} min={0} max={50} step={5} hint="Most units shut off before 0%. 10% is a safe default." />
        </section>

        <section className="card" aria-label="Devices">
          <h2 className="card-title">What you'll plug in</h2>
          {rows.length === 0 ? <p className="hint">Add a device below to see the runtime.</p> : (
            <table className="rows">
              <thead><tr><th scope="col">Device</th><th scope="col">Watts</th><th scope="col">Qty</th><th><span className="sr-only">Remove</span></th></tr></thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.key}>
                    <td><input className="input" aria-label="Device name" value={r.name} onChange={(e) => update(r.key, "name", e.target.value)} /></td>
                    <td data-label="Watts"><input className="input num" type="number" min={0} inputMode="decimal" aria-label={`Watts for ${r.name}`} value={r.watts} onChange={(e) => update(r.key, "watts", e.target.value)} /></td>
                    <td data-label="Qty"><input className="input num" type="number" min={0} inputMode="numeric" aria-label={`Quantity of ${r.name}`} value={r.qty} onChange={(e) => update(r.key, "qty", e.target.value)} /></td>
                    <td><button type="button" className="icon-btn" aria-label={`Remove ${r.name}`} onClick={() => setRows((rs) => rs.filter((x) => x.key !== r.key))}>✕</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <div className="mt-3 flex gap-2">
            <label className="sr-only" htmlFor="pick">Device to add</label>
            <select id="pick" className="select" value={pick} onChange={(e) => setPick(e.target.value)}>
              {DEVICE_PRESETS.map((d) => <option key={d.id} value={d.id}>{d.name} (~{d.watts} W)</option>)}
            </select>
            <button type="button" className="btn btn-primary" onClick={() => { const p = DEVICE_PRESETS.find((d) => d.id === pick); if (p) setRows((rs) => [...rs, toRow(p)]); }}>Add</button>
          </div>
          <button type="button" className="btn btn-ghost btn-sm mt-2" onClick={() => setRows((rs) => [...rs, toRow({ id: "custom", name: "My device", watts: 20 })])}>Add your own device</button>
          <div className="total-line"><span>Total load</span><span>{fmt(load)} W</span></div>
          <p className="hint mt-1">Watts are typical averages. The label on your device, or a plug-in meter, is more accurate.</p>
        </section>
      </div>

      <ResultCard title="Estimated runtime" value={hours != null ? formatDuration(hours) : undefined}
        sub={hours != null ? untilText(now, hours) : undefined}
        empty={hours == null ? "Enter a capacity and at least one device." : undefined}
        facts={[{ label: "Usable energy", value: `${fmt(usable)} Wh` }, { label: "Total load", value: `${fmt(load)} W` }]}
        notes={notes}>
        {hours != null ? <Gauge hours={hours} /> : null}
      </ResultCard>
    </div>
  );
}
