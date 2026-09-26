// Portable power station specs for the preset menu.
// A model only appears on the site when verified: true.
// Check each value on the manufacturer's page, paste the URL in `source`, then set verified: true.
export type Station = { id: string; name: string; wh: number; outputW: number; source: string; verified: boolean };

export const STATIONS: Station[] = [
  { id: "ecoflow-river-2", name: "EcoFlow River 2", wh: 256, outputW: 300, source: "", verified: false },
  { id: "ecoflow-delta-2", name: "EcoFlow Delta 2", wh: 1024, outputW: 1800, source: "", verified: false },
  { id: "jackery-explorer-300", name: "Jackery Explorer 300", wh: 293, outputW: 300, source: "", verified: false },
  { id: "anker-solix-c1000", name: "Anker SOLIX C1000", wh: 1056, outputW: 1800, source: "", verified: false },
  { id: "bluetti-ac180", name: "Bluetti AC180", wh: 1152, outputW: 1800, source: "", verified: false },
];

export const VERIFIED_STATIONS = STATIONS.filter((s) => s.verified);
