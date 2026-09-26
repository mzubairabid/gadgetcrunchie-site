"use client";
import { useState } from "react";
import { fmt, num } from "@/lib/format";
import { NumberField, RangeField, Segmented, SelectField } from "@/components/ui/Fields";
import ResultCard from "@/components/tool/ResultCard";

export default function SolarSize() {
  const [mode, setMode] = useState("simple");
  const [loadW, setLoadW] = useState("500");
  const [hoursDay, setHoursDay] = useState("6");
  const [dailyWh, setDailyWh] = useState("3000");
  const [sun, setSun] = useState("5");
  const [losses, setLosses] = useState(25);
  const [panelW, setPanelW] = useState("550");
  const [days, setDays] = useState("1");
  const [dod, setDod] = useState("0.9");
  const [sysV, setSysV] = useState("24");

  const daily = mode === "simple" ? num(loadW) * num(hoursDay) : num(dailyWh);
  const arrayW = num(sun) > 0 ? daily / (num(sun) * (1 - losses / 100)) : 0;
  const panels = num(panelW) > 0 ? Math.ceil(arrayW / num(panelW)) : 0;
  const batteryWh = num(dod) > 0 ? (daily * num(days)) / num(dod) : 0;
  const batteryAh = num(sysV) > 0 ? batteryWh / num(sysV) : 0;
  const ok = daily > 0 && arrayW > 0;

  return (
    <div className="calc">
      <div className="calc-inputs">
        <section className="card" aria-label="Energy use">
          <h2 className="card-title">How much energy you use</h2>
          <Segmented label="I know" value={mode} onChange={setMode} options={[{ value: "simple", label: "Load and hours" }, { value: "daily", label: "Daily Wh / kWh" }]} />
          {mode === "simple" ? (
            <div className="grid-2">
              <NumberField label="Average load" unit="W" value={loadW} onChange={setLoadW} />
              <NumberField label="Hours per day" unit="h" value={hoursDay} onChange={setHoursDay} max={24} />
            </div>
          ) : (
            <NumberField label="Daily energy use" unit="Wh" value={dailyWh} onChange={setDailyWh} hint="From your bill: monthly kWh ÷ 30 × 1,000." />
          )}
        </section>
        <section className="card" aria-label="Solar">
          <h2 className="card-title">Sun and panels</h2>
          <NumberField label="Peak sun hours" unit="h" value={sun} onChange={setSun} step={0.1}
            hint="Hours of full-strength sun per day. Roughly 5 to 6 in much of Pakistan and the US South-West, 2.5 to 4 in the UK. Use your worst month if you need year-round power." />
          <RangeField label="System losses" suffix="%" value={losses} onChange={setLosses} min={10} max={40} hint="Heat, dust, wiring, charge controller and inverter. 20 to 30% is typical." />
          <NumberField label="Panel size" unit="W" value={panelW} onChange={setPanelW} hint="Common sizes: 400 to 580 W." />
        </section>
        <section className="card" aria-label="Battery">
          <h2 className="card-title">Battery storage</h2>
          <div className="grid-2">
            <NumberField label="Days of backup" value={days} onChange={setDays} step={0.5} hint="How long to run with no sun." />
            <SelectField label="System voltage" value={sysV} onChange={setSysV} options={[{ value: "12", label: "12 V" }, { value: "24", label: "24 V" }, { value: "48", label: "48 V" }]} />
          </div>
          <SelectField label="Battery type" value={dod} onChange={setDod} options={[{ value: "0.9", label: "Lithium / LiFePO4 (90% usable)" }, { value: "0.5", label: "Lead-acid / tubular (50% usable)" }]} />
        </section>
      </div>
      <ResultCard title="Recommended system" value={ok ? `${fmt(arrayW / 1000, 2)} kW` : undefined}
        sub={ok ? `of solar panels: about ${panels} × ${fmt(num(panelW))} W panels.` : undefined}
        empty={ok ? undefined : "Enter your energy use and peak sun hours."}
        facts={ok ? [{ label: "Daily energy", value: `${fmt(daily / 1000, 2)} kWh` }, { label: "Panel array", value: `${fmt(arrayW)} W` },
          { label: "Battery storage", value: `${fmt(batteryWh / 1000, 1)} kWh` }, { label: `Battery at ${sysV} V`, value: `${fmt(batteryAh)} Ah` }] : []}
        notes={ok ? [{ tone: "info", text: "Round up, not down. Add 10 to 20% if you expect to add appliances later. Inverter size depends on your peak load, not daily energy." }] : []} />
    </div>
  );
}
