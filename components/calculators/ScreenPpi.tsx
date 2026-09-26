"use client";
import { useState } from "react";
import { fmt, num } from "@/lib/format";
import { NumberField, Segmented, SelectField } from "@/components/ui/Fields";
import ResultCard from "@/components/tool/ResultCard";

const PRESETS: Record<string, [number, number]> = {
  "": [0, 0], "1920x1080": [1920, 1080], "2560x1440": [2560, 1440], "3840x2160": [3840, 2160], "2560x1600": [2560, 1600], "3440x1440": [3440, 1440], "1170x2532": [1170, 2532],
};
const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);

export default function ScreenPpi() {
  const [w, setW] = useState("2560");
  const [h, setH] = useState("1440");
  const [diag, setDiag] = useState("27");
  const [u, setU] = useState("in");

  const W = num(w), H = num(h);
  const dIn = u === "in" ? num(diag) : num(diag) / 2.54;
  const px = Math.hypot(W, H);
  const ppi = dIn > 0 ? px / dIn : 0;
  const ok = W > 0 && H > 0 && dIn > 0;
  const widthIn = ok ? (dIn * W) / px : 0, heightIn = ok ? (dIn * H) / px : 0;
  const retinaIn = ppi > 0 ? 1 / (ppi * Math.tan(Math.PI / 10800)) : 0; // 1 arcminute
  const g = gcd(Math.round(W), Math.round(H)) || 1;
  const len = (inch: number) => (u === "in" ? `${fmt(inch, 1)} in` : `${fmt(inch * 2.54, 1)} cm`);

  return (
    <div className="calc">
      <div className="calc-inputs">
        <section className="card" aria-label="Screen">
          <h2 className="card-title">The screen</h2>
          <SelectField label="Common resolutions" value="" onChange={(k) => { const p = PRESETS[k]; if (p && p[0]) { setW(String(p[0])); setH(String(p[1])); } }}
            options={[{ value: "", label: "Choose one or type below" }, ...Object.keys(PRESETS).filter(Boolean).map((k) => ({ value: k, label: k.replace("x", " × ") }))]} />
          <div className="grid-2">
            <NumberField label="Width" unit="px" value={w} onChange={setW} step={1} />
            <NumberField label="Height" unit="px" value={h} onChange={setH} step={1} />
          </div>
          <Segmented label="Size unit" value={u} onChange={setU} options={[{ value: "in", label: "Inches" }, { value: "cm", label: "Centimetres" }]} />
          <NumberField label="Diagonal size" unit={u} value={diag} onChange={setDiag} step={0.1} />
        </section>
      </div>
      <ResultCard title="Pixel density" value={ok ? `${fmt(ppi)} PPI` : undefined}
        sub={ok ? `Pixels stop being visible from about ${len(retinaIn)} away (20/20 vision).` : undefined}
        empty={ok ? undefined : "Enter resolution and diagonal size."}
        facts={ok ? [{ label: "Screen width", value: len(widthIn) }, { label: "Screen height", value: len(heightIn) },
          { label: "Dot pitch", value: `${fmt(25.4 / ppi, 3)} mm` }, { label: "Aspect ratio", value: `${W / g}:${H / g}` }] : []} />
    </div>
  );
}
