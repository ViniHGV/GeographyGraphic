export type IDataNav = {
  name: string;
  url: string;
};

export type IComboboxDemo = {
  name: string;
  data: IOptionsData[];
};

export type IOptionsData = {
  value: string;
};

export type IGraphics = {
  typeChart: string | any;
  // values: IOptionsData[];
  // categories: IOptionsData[];
};
