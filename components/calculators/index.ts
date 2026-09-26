import type { ComponentType } from "react";
import RuntimeCalculator from "./RuntimeCalculator";
import PowerBankAirline from "./PowerBankAirline";
import UpsBackup from "./UpsBackup";
import SolarSize from "./SolarSize";
import ElectricityCost from "./ElectricityCost";
import BatteryConverter from "./BatteryConverter";
import ChargingTime from "./ChargingTime";
import ChargerCheck from "./ChargerCheck";
import ScreenPpi from "./ScreenPpi";
import PowerBankCharges from "./PowerBankCharges";

export const CALCULATORS: Record<string, ComponentType> = {
  "power-station-runtime-calculator": RuntimeCalculator,
  "power-bank-airline-checker": PowerBankAirline,
  "ups-backup-time-calculator": UpsBackup,
  "solar-panel-size-calculator": SolarSize,
  "electricity-cost-calculator": ElectricityCost,
  "mah-to-wh-converter": BatteryConverter,
  "battery-charging-time-calculator": ChargingTime,
  "laptop-charger-wattage-checker": ChargerCheck,
  "screen-ppi-calculator": ScreenPpi,
  "power-bank-charges-calculator": PowerBankCharges,
};
