"use client";
import { ReactNode, createContext, useState } from "react";

export const appContext = createContext({});

type IAppContextProvider = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: IAppContextProvider) => {
  const [stateSelectedToDoMap, setStateSelectedToDoMap] = useState("");
  const [sumLC, setSumLC] = useState(0);
  const [sumTotalCapacityState, setSumTotalCapacityState] = useState(0);
  const [sumDefaut, setSumDefaut] = useState(0);
  const [REPlusLC, setREPlusLC] = useState(0);
  const [fullRE, setFullRE] = useState(0);
  const [scenarioSelected, setScenarioSelected] = useState("");
  const [policiesSelected, setPoliciesSelected] = useState("");
  const [stateSelectedToDoOption, setStateSelectedToDoOption] = useState("");
  const [technologySelected, setTechnologySelected] = useState("");
  const [yearSelected, setYearSelected] = useState("");
  const [typeChart, setTypeChart] = useState("bar");
  const [groupBySelected, setGroupBySelected] = useState("");

  return (
    <appContext.Provider
      value={{
        fullRE,
        setFullRE,
        stateSelectedToDoMap,
        setStateSelectedToDoMap,
        sumLC,
        setSumLC,
        sumTotalCapacityState,
        setSumTotalCapacityState,
        sumDefaut,
        setSumDefaut,
        REPlusLC,
        setREPlusLC,
        scenarioSelected,
        setScenarioSelected,
        policiesSelected,
        setPoliciesSelected,
        typeChart,
        setTypeChart,
        groupBySelected,
        setGroupBySelected,
        stateSelectedToDoOption,
        setStateSelectedToDoOption,
        technologySelected,
        setTechnologySelected,
        yearSelected,
        setYearSelected,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
