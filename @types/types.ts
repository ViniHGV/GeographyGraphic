import { ReactNode } from "react";

export type IDataNav = {
  name: string;
  url: string;
};

export type IComboboxDemo = {
  name: string;
  data: IOptionsData[] | IYearData[];
  valueState: string | number | any;
  setState: (ev: string) => void;
};

export type IOptionsData = {
  value: string;
};

export type IYearData = {
  value: number;
};

export type IGraphics = {
  dataNumbers: number[];
  dataDescriptions: string[];
  typeChart: string | any;
  plotOptions?:
    | {
        bar: {
          borderRadius: number;
          horizontal: boolean;
        };
      }
    | any;
};

export type IDataBaseV2 = {
  data: DataFilterApi[];
  totals: TotalsFilterApi;
};

type TotalsFilterApi = {
  techs: { [key: string]: number };
  policy: { [key: string]: number };
  scenario: { [key: string]: number };
  year: { [key: string]: number };
  costs: { [key: string]: number };
  state: { [key: string]: number };
};

type DataFilterApi = {
  techs: string;
  scenario: string;
  state: string;
  policy: string;
  year: number;
  capacity: number;
  costs: string;
};

export type IContainerOptions = {
  title: string;
  children: ReactNode;
  isCheckbox: boolean;
};

export type TestType =
  | {
      options?: {
        chart: {
          id: string;
        };
        colors: string[];
        xaxis: {
          categories: string[];
        };
      };
      series: {
        name: string;
        data: number[];
      }[];
    }
  | {
      options?: ApexCharts.ApexOptions;
      series: number[];
      labels: string[];
    };

export type ICheckboxDemo = {
  checkboxSelected: string[];
  type: string;
  setState: (prev: any) => void;
};
