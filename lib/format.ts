export const num = (v: unknown) => {
  const n = typeof v === "number" ? v : parseFloat(String(v));
  return Number.isFinite(n) ? n : 0;
};

export const fmt = (n: number, digits = 0) =>
  Number.isFinite(n) ? n.toLocaleString("en-US", { maximumFractionDigits: digits, minimumFractionDigits: 0 }) : "–";

export function formatDuration(h: number | null) {
  if (h == null || !Number.isFinite(h) || h < 0) return "–";
  const totalMin = Math.round(h * 60);
  const d = Math.floor(totalMin / 1440);
  const hr = Math.floor((totalMin % 1440) / 60);
  const min = totalMin % 60;
  if (d > 0) return `${d} d ${hr} h`;
  if (hr === 0) return `${min} min`;
  return min ? `${hr} h ${min} min` : `${hr} h`;
}

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
