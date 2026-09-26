import type { ToolCategory, ToolContent } from "./types";
import runtime from "@/content/tools/power-station-runtime";
import airline from "@/content/tools/power-bank-airline";
import ups from "@/content/tools/ups-backup";
import solar from "@/content/tools/solar-size";
import cost from "@/content/tools/electricity-cost";
import converter from "@/content/tools/battery-converter";
import charging from "@/content/tools/charging-time";
import charger from "@/content/tools/charger-check";
import ppi from "@/content/tools/screen-ppi";
import charges from "@/content/tools/power-bank-charges";

/** Single source of truth. Add a new tool: create content/tools/x.ts, a calculator, and list it here + in calculators/index.ts. */
export const TOOLS: ToolContent[] = [runtime, ups, solar, cost, airline, charges, converter, charging, charger, ppi];

export const CATEGORIES: ToolCategory[] = ["Batteries & runtime", "Charging", "Home energy", "Screens"];

export const getTool = (slug: string) => TOOLS.find((t) => t.slug === slug);
export const toolsIn = (c: ToolCategory) => TOOLS.filter((t) => t.category === c);
