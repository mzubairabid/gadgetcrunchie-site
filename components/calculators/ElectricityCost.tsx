"use client";
import { useState } from "react";
import { fmt, num } from "@/lib/format";
import { NumberField, SelectField } from "@/components/ui/Fields";
import ResultCard from "@/components/tool/ResultCard";

const CUR: Record<string, { sym: string; unit: string }> = {
  USD: { sym: "$", unit: "per kWh" }, GBP: { sym: "£", unit: "per kWh" }, EUR: { sym: "€", unit: "per kWh" },
  PKR: { sym: "Rs ", unit: "per unit (kWh)" }, INR: { sym: "₹", unit: "per unit (kWh)" }, AUD: { sym: "A$", unit: "per kWh" }, CAD: { sym: "C$", unit: "per kWh" },
};

export default function ElectricityCost() {
  const [watts, setWatts] = useState("150");
  const [qty, setQty] = useState("1");
  const [hours, setHours] = useState("8");
  const [days, setDays] = useState("30");
  const [cur, setCur] = useState("USD");
  const [rate, setRate] = useState("0.20");

  const kwhDay = (num(watts) * num(qty) * num(hours)) / 1000;
  const r = num(rate);
  const c = CUR[cur];
  const money = (v: number) => `${c.sym}${v < 100 ? v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : fmt(v)}`;
  const ok = kwhDay > 0 && r > 0;

  return (
    <div className="calc">
      <div className="calc-inputs">
        <section className="card" aria-label="Device">
          <h2 className="card-title">The device</h2>
          <div className="grid-2">
            <NumberField label="Power" unit="W" value={watts} onChange={setWatts} hint="On the label or charger." />
            <NumberField label="How many" value={qty} onChange={setQty} step={1} />
          </div>
          <div className="grid-2">
            <NumberField label="Hours used per day" unit="h" value={hours} onChange={setHours} max={24} />
            <NumberField label="Days per month" value={days} onChange={setDays} max={31} step={1} />
          </div>
        </section>
        <section className="card" aria-label="Rate">
          <h2 className="card-title">Your electricity price</h2>
          <div className="grid-2">
            <SelectField label="Currency" value={cur} onChange={setCur} options={Object.keys(CUR).map((k) => ({ value: k, label: k }))} />
            <NumberField label={`Price ${c.unit}`} value={rate} onChange={setRate} step={0.01} />
          </div>
          <p className="hint">Use the price on your latest bill. {cur === "PKR" || cur === "INR" ? "Tariffs here are slab-based and add taxes and fixed charges, so use your effective rate: bill total ÷ units used." : "Include standing charges only if you want the full bill picture."}</p>
        </section>
      </div>
      <ResultCard title="Running cost" value={ok ? money(kwhDay * num(days) * r) : undefined} sub={ok ? "per month" : undefined}
        empty={ok ? undefined : "Enter watts, hours and your price per kWh."}
        facts={ok ? [{ label: "Per day", value: money(kwhDay * r) }, { label: "Per year", value: money(kwhDay * num(days) * 12 * r) },
          { label: "Energy per day", value: `${fmt(kwhDay, 2)} kWh` }, { label: "Energy per month", value: `${fmt(kwhDay * num(days), 1)} kWh` }] : []} />
    </div>
  );
}
