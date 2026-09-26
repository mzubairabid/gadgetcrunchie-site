"use client";
import { useState } from "react";
import { fmt, num } from "@/lib/format";
import { NumberField, RangeField } from "@/components/ui/Fields";
import ResultCard from "@/components/tool/ResultCard";

export default function PowerBankCharges() {
  const [bank, setBank] = useState("20000");
  const [bankV, setBankV] = useState("3.7");
  const [phone, setPhone] = useState("5000");
  const [phoneV, setPhoneV] = useState("3.85");
  const [eff, setEff] = useState(65);

  const bankWh = (num(bank) * num(bankV)) / 1000;
  const phoneWh = (num(phone) * num(phoneV)) / 1000;
  const deliver = bankWh * (eff / 100);
  const charges = phoneWh > 0 ? deliver / phoneWh : 0;
  const ok = bankWh > 0 && phoneWh > 0;

  return (
    <div className="calc">
      <div className="calc-inputs">
        <section className="card" aria-label="Power bank">
          <h2 className="card-title">Power bank</h2>
          <div className="grid-2">
            <NumberField label="Capacity" unit="mAh" value={bank} onChange={setBank} />
            <NumberField label="Cell voltage" unit="V" value={bankV} onChange={setBankV} step={0.01} hint="Almost always 3.6 or 3.7 V." />
          </div>
        </section>
        <section className="card" aria-label="Phone">
          <h2 className="card-title">Phone, earbuds or tablet</h2>
          <div className="grid-2">
            <NumberField label="Battery capacity" unit="mAh" value={phone} onChange={setPhone} hint="In the spec sheet; e.g. 3,500 to 5,500 mAh for phones." />
            <NumberField label="Battery voltage" unit="V" value={phoneV} onChange={setPhoneV} step={0.01} hint="Modern phones: about 3.85 V." />
          </div>
          <RangeField label="Real-world efficiency" suffix="%" value={eff} onChange={setEff} min={50} max={85} hint="Voltage conversion, cable and heat losses. 60 to 70% is realistic." />
        </section>
      </div>
      <ResultCard title="Full charges" value={ok ? `${fmt(charges, 1)}×` : undefined}
        sub={ok ? `A ${fmt(num(bank))} mAh power bank fully charges this device about ${fmt(charges, 1)} times.` : undefined}
        empty={ok ? undefined : "Enter both battery sizes."}
        facts={ok ? [{ label: "Power bank energy", value: `${fmt(bankWh, 1)} Wh` }, { label: "Actually delivered", value: `${fmt(deliver, 1)} Wh` },
          { label: "Device battery", value: `${fmt(phoneWh, 1)} Wh` }, { label: "Usable mAh (at 3.85 V)", value: `${fmt((deliver * 1000) / 3.85)} mAh` }] : []} />
    </div>
  );
}
