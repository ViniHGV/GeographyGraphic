"use client";
import { ReactNode, createContext, useState } from "react";
import { IDataBaseV2, IOptionsData } from "../types/types";

export interface IApiContext {
  scenariosDataAPI: IOptionsData[];
  setScenariosDataAPI: React.Dispatch<React.SetStateAction<IOptionsData[]>>;
  policyDataAPI: IOptionsData[];
  setPolicyDataAPI: React.Dispatch<React.SetStateAction<IOptionsData[]>>;
  stateDataAPI: IOptionsData[];
  setStateDataAPI: React.Dispatch<React.SetStateAction<IOptionsData[]>>;
  techsDataAPI: IOptionsData[];
  setTechsDataAPI: React.Dispatch<React.SetStateAction<IOptionsData[]>>;
  yearsDataAPI: IOptionsData[];
  setYearsDataAPI: React.Dispatch<React.SetStateAction<IOptionsData[]>>;
  dataFilteredAPI: IDataBaseV2[];
  setDataFilteredAPI: React.Dispatch<React.SetStateAction<IDataBaseV2[]>>;
}

export const ApiContext = createContext<IApiContext | undefined>(undefined);

type IAppContextProvider = {
  children: ReactNode;
};

export default function APIContextProvider({ children }: IAppContextProvider) {
  const [scenariosDataAPI, setScenariosDataAPI] = useState<IOptionsData[]>([]);

  const [policyDataAPI, setPolicyDataAPI] = useState<IOptionsData[]>([]);

  const [stateDataAPI, setStateDataAPI] = useState<IOptionsData[]>([]);

  const [techsDataAPI, setTechsDataAPI] = useState<IOptionsData[]>([]);

  const [yearsDataAPI, setYearsDataAPI] = useState<IOptionsData[]>([]);

  const [dataFilteredAPI, setDataFilteredAPI] = useState<IDataBaseV2[]>([]);

  return (
    <ApiContext.Provider
      value={{
        scenariosDataAPI,
        setScenariosDataAPI,
        policyDataAPI,
        setPolicyDataAPI,
        stateDataAPI,
        setStateDataAPI,
        techsDataAPI,
        setTechsDataAPI,
        yearsDataAPI,
        setYearsDataAPI,
        dataFilteredAPI,
        setDataFilteredAPI,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
