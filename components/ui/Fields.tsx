"use client";
import { useId } from "react";

type NumberFieldProps = {
  label: string;
  value: number | string;
  onChange: (v: string) => void;
  unit?: string;
  hint?: string;
  min?: number;
  max?: number;
  step?: number | "any";
};

export function NumberField({ label, value, onChange, unit, hint, min = 0, max, step = "any" }: NumberFieldProps) {
  const id = useId();
  return (
    <div className="field">
      <label className="label" htmlFor={id}>{label}</label>
      <div className="input-wrap">
        <input
          id={id} className="input" type="number" inputMode="decimal"
          min={min} max={max} step={step} value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-describedby={hint ? `${id}-h` : undefined}
        />
        {unit ? <span className="input-unit">{unit}</span> : null}
      </div>
      {hint ? <span className="hint" id={`${id}-h`}>{hint}</span> : null}
    </div>
  );
}

type Option = { value: string; label: string };

export function SelectField({ label, value, onChange, options, hint }: {
  label: string; value: string; onChange: (v: string) => void; options: Option[]; hint?: string;
}) {
  const id = useId();
  return (
    <div className="field">
      <label className="label" htmlFor={id}>{label}</label>
      <select id={id} className="select" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      {hint ? <span className="hint">{hint}</span> : null}
    </div>
  );
}

export function Segmented({ label, value, onChange, options, hint }: {
  label: string; value: string; onChange: (v: string) => void; options: Option[]; hint?: string;
}) {
  const id = useId();
  return (
    <div className="field">
      <span className="label" id={id}>{label}</span>
      <div className="seg" role="group" aria-labelledby={id}>
        {options.map((o) => (
          <button key={o.value} type="button" aria-pressed={value === o.value} onClick={() => onChange(o.value)}>
            {o.label}
          </button>
        ))}
      </div>
      {hint ? <span className="hint">{hint}</span> : null}
    </div>
  );
}

export function RangeField({ label, value, onChange, min, max, step = 1, hint, suffix = "" }: {
  label: string; value: number; onChange: (v: number) => void; min: number; max: number; step?: number; hint?: string; suffix?: string;
}) {
  const id = useId();
  return (
    <div className="field">
      <label className="label" htmlFor={id}>{label}: {value}{suffix}</label>
      <input id={id} className="range" type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))} />
      {hint ? <span className="hint">{hint}</span> : null}
    </div>
  );
}
