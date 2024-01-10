"use client";
import { ReactNode, createContext, useState } from "react";

export const appContext = createContext({});

type IAppContextProvider = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: IAppContextProvider) => {
  const [scenarioSelected, setScenarioSelected] = useState("");
  const [policiesSelected, setPoliciesSelected] = useState("");
  const [stateSelectedToDoOption, setStateSelectedToDoOption] = useState("");
  const [stateSelectedToDoMap, setStateSelectedToDoMap] = useState("");
  const [technologySelected, setTechnologySelected] = useState("");
  const [yearSelected, setYearSelected] = useState("");
  const [groupBySelected, setGroupBySelected] = useState("Scenario");
  const [toolbarStateMap, setToolbarStateMap] = useState({
    show: false,
    x: 0,
    y: 0,
    text: "",
  });
  const [typeChart, setTypeChart] = useState("bar");

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [selectedCheckboxesTechs, setSelectedCheckboxesTechs] = useState([]);
  const [selectedCheckboxesState, setSelectedCheckboxesState] = useState([]);
  const [selectedCheckboxesCosts, setSelectedCheckboxesCosts] = useState([]);
  const [selectedCheckboxesYears, setSelectedCheckboxesYears] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const [dataDescription, setDataDescription] = useState([""]);
  const [dataNumbers, setDataNumbers] = useState([0]);

  return (
    <appContext.Provider
      value={{
        refresh,
        setRefresh,
        stateSelectedToDoMap,
        setStateSelectedToDoMap,
        toolbarStateMap,
        setToolbarStateMap,
        selectedCheckboxesYears,
        setSelectedCheckboxesYears,
        selectedCheckboxesCosts,
        setSelectedCheckboxesCosts,
        dataNumbers,
        setDataNumbers,
        dataDescription,
        setDataDescription,
        selectedCheckboxesState,
        setSelectedCheckboxesState,
        selectedCheckboxesTechs,
        setSelectedCheckboxesTechs,
        selectedCheckboxes,
        setSelectedCheckboxes,
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
