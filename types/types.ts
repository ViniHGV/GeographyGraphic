export type IDataNav = {
  name: string;
  url: string;
};

export type IComboboxDemo = {
  name: string;
  data: IOptionsData[];
  valueState: string;
  setState: (ev: string) => void;
};

export type IOptionsData = {
  value: string;
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
