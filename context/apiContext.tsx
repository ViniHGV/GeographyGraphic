"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import { IDataBaseV2, IOptionsData } from "../@types/types";

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
  costsDataAPI: IOptionsData[];
  setCostsDatadAPI: React.Dispatch<React.SetStateAction<IOptionsData[]>>;
  dataFilteredAPI: IDataBaseV2;
  setDataFilteredAPI: React.Dispatch<React.SetStateAction<IDataBaseV2>>;
  urlFetchApiFilter: string;
  setUrlFetchApiFilter: React.Dispatch<React.SetStateAction<string>>;
  urlScenarioApiFilter: string;
  setUrlScenarioApiFilter: React.Dispatch<React.SetStateAction<string>>;
  urlPolicyApiFilter: string;
  setUrlPolicyApiFilter: React.Dispatch<React.SetStateAction<string>>;
  filterParams: never[];
  setFilterParams: React.Dispatch<React.SetStateAction<never[]>>;
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

  const [costsDataAPI, setCostsDatadAPI] = useState<IOptionsData[]>([]);

  const [dataFilteredAPI, setDataFilteredAPI] = useState<IDataBaseV2>(
    {} as IDataBaseV2
  );

  const [urlFetchApiFilter, setUrlFetchApiFilter] = useState<string>("");

  const [urlScenarioApiFilter, setUrlScenarioApiFilter] = useState<string>("");

  const [urlPolicyApiFilter, setUrlPolicyApiFilter] = useState<string>("");
  const [filterParams, setFilterParams] = useState([]);

  return (
    <ApiContext.Provider
      value={{
        filterParams,
        setFilterParams,
        urlScenarioApiFilter,
        setUrlScenarioApiFilter,
        urlPolicyApiFilter,
        setUrlPolicyApiFilter,
        costsDataAPI,
        setCostsDatadAPI,
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
        urlFetchApiFilter,
        setUrlFetchApiFilter,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

const useApiContext = () => {
  const context = useContext(ApiContext);

  if (!context) {
    throw new Error(
      "useAppContext deve ser usado dentro de um AppContextProvider"
    );
  }

  return context;
};

export { APIContextProvider, useApiContext };
