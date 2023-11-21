import { ReactNode } from "react";

export type IDataNav = {
  name: string;
  url: string;
};

export type IComboboxDemo = {
  name: string;
  data: IOptionsData[] | IYearData[];
  valueState: string | number;
  setState: (ev: string | number) => void;
};

export type IOptionsData = {
  value: string;
};

export type IYearData = {
  value: number;
};

export type IGraphics = {
  // data: IDataBase[];
  dataNumbers: number[];
  dataDescriptions: string[];
  typeChart: string | any;
};

export type IDataBase = {
  techs: string;
  scenario: string;
  state: string;
  policy: string;
  year: number;
  capacity: number;
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
