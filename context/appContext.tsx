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
  const [groupBySelected, setGroupBySelected] = useState("Scenario");
  const [CCGT, setCCGT] = useState(0);
  const [hydrogen, setHygrogen] = useState(0);
  const [Nuclear, setNuclear] = useState(0);
  const [Onshorewind, setOnshorewind] = useState(0);
  const [PVexisting, setPVexisting] = useState(0);
  const [Reservoir, setReservoir] = useState(0);
  const [Runofriver, setRunofriver] = useState(0);
  const [UtilityscalePV, setUtilityscalePV] = useState(0);
  const [Baseline, setBaseline] = useState(0);
  const [IntensiveElec, setIntensiveElec] = useState(0);
  const [LimitedElec, setLimitedElec] = useState(0);
  const [NetZero, setNetZero] = useState(0);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [selectedCheckboxesTechs, setSelectedCheckboxesTechs] = useState([]);
  const [selectedCheckboxesState, setSelectedCheckboxesState] = useState([]);

  return (
    <appContext.Provider
      value={{
        selectedCheckboxesState,
        setSelectedCheckboxesState,
        selectedCheckboxesTechs,
        setSelectedCheckboxesTechs,
        selectedCheckboxes,
        setSelectedCheckboxes,
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
        CCGT,
        setCCGT,
        hydrogen,
        setHygrogen,
        Nuclear,
        setNuclear,
        Onshorewind,
        setOnshorewind,
        PVexisting,
        setPVexisting,
        Reservoir,
        setReservoir,
        Runofriver,
        setRunofriver,
        UtilityscalePV,
        setUtilityscalePV,
        Baseline,
        setBaseline,
        IntensiveElec,
        setIntensiveElec,
        LimitedElec,
        setLimitedElec,
        NetZero,
        setNetZero,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
