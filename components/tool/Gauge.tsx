import { formatDuration } from "@/lib/format";

/** Battery-shaped bar. hours on a 24 / 48 / 72 h scale, or a plain 0-100% fill. */
export default function Gauge({ hours, percent, label }: { hours?: number | null; percent?: number; label?: string }) {
  if (percent != null) {
    const p = Math.max(0, Math.min(100, percent));
    return (
      <div className="gauge" role="img" aria-label={label ?? `${Math.round(p)}%`}>
        <div className="gauge-fill" style={{ width: `${p}%` }} />
      </div>
    );
  }
  const h = hours ?? 0;
  const scale = h <= 24 ? 24 : h <= 48 ? 48 : 72;
  const every = scale === 24 ? 6 : 12;
  const ticks = Array.from({ length: scale / every - 1 }, (_, i) => (i + 1) * every);
  const fill = Math.min(100, (h / scale) * 100);
  return (
    <div>
      <div className="gauge" role="img" aria-label={`${formatDuration(h)} on a ${scale}-hour scale`}>
        <div className="gauge-fill" style={{ width: `${fill}%` }} />
        <div className="gauge-ticks">{ticks.map((t) => <span key={t} style={{ left: `${(t / scale) * 100}%` }} />)}</div>
      </div>
      <div className="gauge-scale" aria-hidden="true">
        <span style={{ left: 0 }}>0 h</span>
        {ticks.map((t) => <span key={t} style={{ left: `${(t / scale) * 100}%` }}>{t} h</span>)}
        <span style={{ left: "100%" }}>{scale} h{h > 72 ? "+" : ""}</span>
      </div>
    </div>
  );
}
