import { Battery, Laptop, Monitor, Plane, PlugZap, Receipt, Repeat, Smartphone, Sun, Zap } from "lucide-react";
import type { IconName } from "@/lib/types";

const MAP = {
  battery: Battery, plane: Plane, plug: PlugZap, sun: Sun, receipt: Receipt,
  repeat: Repeat, zap: Zap, laptop: Laptop, monitor: Monitor, smartphone: Smartphone,
} as const;

export default function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const C = MAP[name];
  return <C size={size} strokeWidth={2} aria-hidden="true" />;
}
