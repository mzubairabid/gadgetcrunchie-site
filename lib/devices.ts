// Typical AVERAGE draw in watts. Users can edit every value.
// motor: needs 2-3x power for a moment at start-up.
export type DevicePreset = { id: string; name: string; watts: number; motor?: boolean; medical?: boolean };

export const DEVICE_PRESETS: DevicePreset[] = [
  { id: "router", name: "Wi-Fi router", watts: 12 },
  { id: "phone", name: "Phone charging", watts: 15 },
  { id: "laptop", name: "Laptop", watts: 60 },
  { id: "led", name: "LED bulb", watts: 9 },
  { id: "tv", name: "TV (43-inch LED)", watts: 70 },
  { id: "monitor", name: "Computer monitor", watts: 30 },
  { id: "desktop", name: "Desktop PC (office use)", watts: 150 },
  { id: "cpap", name: "CPAP (no humidifier)", watts: 40, medical: true },
  { id: "minifridge", name: "Mini fridge (average)", watts: 50, motor: true },
  { id: "fridge", name: "Full-size fridge (average)", watts: 80, motor: true },
  { id: "fan", name: "Pedestal / table fan", watts: 50, motor: true },
  { id: "ceilingfan", name: "Ceiling fan", watts: 75, motor: true },
  { id: "cctv", name: "CCTV camera", watts: 6 },
  { id: "satdish", name: "Satellite internet dish", watts: 75 },
];
