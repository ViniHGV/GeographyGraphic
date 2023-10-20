import { IDataNav, IOptionsData } from "../types/types";

export const dataNav: IDataNav[] = [
  { name: "Publication", url: "" },
  { name: "Citation", url: "" },
  { name: "Download Data", url: "" },
];

export const ScenariosData: IOptionsData[] = [
  { value: "Baseline" },
  { value: "Intensive elec." },
  { value: "Limited elec." },
  { value: "Net zero" },
];

export const PolicyData: IOptionsData[] = [
  { value: "Default" },
  { value: "+LC" },
  { value: "100% RE+LC" },
  { value: "100% RE" },
];

export const StateData: IOptionsData[] = [
  { value: "AC" },
  { value: "AM" },
  { value: "AP" },
  { value: "BA" },
  { value: "MG" },
  { value: "MT" },
  { value: "PA" },
  { value: "RJ" },
  { value: "RO" },
  { value: "RR" },
  { value: "SP" },
  { value: "ES" },
  { value: "GO" },
  { value: "SC" },
  { value: "CE" },
  { value: "MA" },
  { value: "PR" },
  { value: "RS" },
  { value: "PB" },
  { value: "PE" },
  { value: "PI" },
  { value: "RN" },
  { value: "TO" },
  { value: "AL" },
  { value: "MS" },
  { value: "SE" },
];

export const TechsOptions: IOptionsData[] = [
  { value: "CCGT" },
  { value: "Hydrogen" },
  { value: "Nuclear" },
  { value: "Onshore wind" },
  { value: "PV-existing" },
  { value: "Reservoir" },
  { value: "Run-of-river" },
  { value: "Utility-scale PV" },
];

export const YearData: IOptionsData[] = [{ value: "2019" }];
