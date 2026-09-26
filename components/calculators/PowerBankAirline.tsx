"use client";
import { useState } from "react";
import { fmt, num } from "@/lib/format";
import { NumberField, Segmented } from "@/components/ui/Fields";
import ResultCard, { type Note } from "@/components/tool/ResultCard";
import Gauge from "@/components/tool/Gauge";

export default function PowerBankAirline() {
  const [unit, setUnit] = useState("mah");
  const [mah, setMah] = useState("20000");
  const [volts, setVolts] = useState("3.7");
  const [whIn, setWhIn] = useState("74");
  const [count, setCount] = useState("1");

  const wh = unit === "mah" ? (num(mah) * num(volts)) / 1000 : num(whIn);
  const n = Math.max(1, Math.round(num(count)));
  const has = wh > 0;

  let verdict = { cls: "verdict-ok", text: "Allowed in carry-on" };
  const notes: Note[] = [];
  if (wh > 160) {
    verdict = { cls: "verdict-warn", text: "Not allowed on passenger flights" };
    notes.push({ tone: "warn", text: "Over 160 Wh is forbidden in both cabin and checked bags. Ship it by ground or leave it at home." });
  } else if (wh > 100) {
    verdict = { cls: "verdict-mid", text: "Needs airline approval" };
    notes.push({ tone: "info", text: "101 to 160 Wh: ask the airline before you fly. US rules allow up to two such spare batteries per person." });
    if (n > 2) notes.push({ tone: "warn", text: `You entered ${n} batteries in this range. The usual limit is two.` });
    notes.push({ tone: "warn", text: "Some airlines now cap power banks at 100 Wh, following IATA's 2026 guidance. Check your airline." });
  }
  notes.push({ tone: "info", text: "Power banks and spare batteries go in carry-on only, never in checked luggage." });

  return (
    <div className="calc">
      <div className="calc-inputs">
        <section className="card" aria-label="Power bank">
          <h2 className="card-title">Your power bank or spare battery</h2>
          <Segmented label="The label shows" value={unit} onChange={setUnit} options={[{ value: "mah", label: "mAh" }, { value: "wh", label: "Wh" }]} />
          {unit === "mah" ? (
            <div className="grid-2">
              <NumberField label="Capacity" unit="mAh" value={mah} onChange={setMah} />
              <NumberField label="Voltage" unit="V" value={volts} onChange={setVolts} step={0.1} hint="Use the cell voltage, usually 3.6 or 3.7 V, not the 5 V USB output." />
            </div>
          ) : (
            <NumberField label="Capacity" unit="Wh" value={whIn} onChange={setWhIn} hint="If the Wh is printed on the case, use that number." />
          )}
          <NumberField label="How many of this size are you carrying?" value={count} onChange={setCount} step={1} min={1} />
        </section>
      </div>
      <ResultCard title="Airline check" value={has ? `${fmt(wh, 1)} Wh` : undefined}
        empty={has ? undefined : "Enter the capacity from the label."}
        notes={has ? notes : []}
        facts={has ? [{ label: "Limit without approval", value: "100 Wh" }, { label: "Absolute limit", value: "160 Wh" }] : []}>
        {has ? (
          <>
            <p className={`verdict ${verdict.cls} mb-4`}>{verdict.text}</p>
            <Gauge percent={(wh / 160) * 100} label={`${fmt(wh, 1)} Wh out of the 160 Wh limit`} />
            <p className="hint mt-2">Bar shows capacity against the 160 Wh maximum.</p>
          </>
        ) : null}
      </ResultCard>
    </div>
  );
}
