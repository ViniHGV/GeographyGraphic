"use client";
import { useContext, useEffect, useState } from "react";
import { Graphics } from "./Graphics";
import { appContext } from "../../context/appContext";
import { BarChartBig, LineChart, AreaChart, Baseline } from "lucide-react";
import { Button } from "./ui/button";
import {
  DataBase,
  PolicyData,
  ScenariosData,
  StateData,
  TechsOptions,
  YearData,
} from "../../data/data";

export const GraphicsSection = () => {
  const {
    sumTotalCapacityState,
    sumLC,
    sumDefaut,
    REPlusLC,
    fullRE,
    typeChart,
    setTypeChart,
    groupBySelected,
    stateSelectedToDoMap,
    CCGT,
    hydrogen,
    Nuclear,
    Onshorewind,
    PVexisting,
    Reservoir,
    Runofriver,
    UtilityscalePV,
    Baseline,
    IntensiveElec,
    LimitedElec,
    NetZero,
    scenarioSelected,
    policiesSelected,
    technologySelected,
    setFullRE,
    setREPlusLC,
    setSumLC,
    setSumDefaut,
    setSumTotalCapacityState,
    setCCGT,
    setHygrogen,
    setNuclear,
    setOnshorewind,
    setPVexisting,
    setReservoir,
    setRunofriver,
    setUtilityscalePV,
    setBaseline,
    setIntensiveElec,
    setLimitedElec,
    setNetZero,
  }: any = useContext(appContext);

  const [visible, setVisible] = useState(false);
  const [dataDescription, setDataDescription] = useState([""]);
  const [dataNumbers, setDataNumbers] = useState([0]);
  const StyleChartNotSelected = "bg-zinc-200 text-black hover:text-white";

  const dataFilteredToDoFiltereds = (
    primarycondition: string,
    secondaryOption?: string,
    terceryOption?: string
  ): number[] => {
    if (primarycondition && secondaryOption && terceryOption) {
      const dataFiltered = DataBase.filter(
        (item) => item.state === stateSelectedToDoMap
      )
        .filter((item) => item.policy === primarycondition)
        .filter((item) => item.scenario === secondaryOption)
        .filter((item) => item.techs === terceryOption)
        .map((item) => item.capacity);
      return dataFiltered;
    } else if (primarycondition && secondaryOption) {
      const dataFiltered = DataBase.filter(
        (item) => item.state === stateSelectedToDoMap
      )
        .filter((item) => item.policy === primarycondition)
        .filter((item) => item.techs === secondaryOption)
        .map((item) => item.capacity);
      return dataFiltered;
    } else {
      const dataFiltered = DataBase.filter(
        (item) => item.state === stateSelectedToDoMap
      )
        .filter((item) => item.policy === primarycondition)
        .map((item) => item.capacity);
      return dataFiltered;
    }
  };

  const dataFilteredToDoPolicies = (condition: string): number[] | any => {
    if (!scenarioSelected && !technologySelected) {
      const dataFiltered = DataBase.filter(
        (item) => item.state === stateSelectedToDoMap
      )
        .filter((item) => item.policy === condition)
        .map((item) => item.capacity);
      return dataFiltered;
    } else if (scenarioSelected) {
      const dataFiltered = DataBase.filter(
        (item) => item.state === stateSelectedToDoMap
      )
        .filter((item) => item.policy === condition)
        .filter((item) => item.scenario === scenarioSelected)
        .map((item) => item.capacity);
      return dataFiltered;
    } else if (technologySelected) {
      const dataFiltered = DataBase.filter(
        (item) => item.state === stateSelectedToDoMap
      )
        .filter((item) => item.policy === condition)
        .filter((item) => item.techs === technologySelected)
        .map((item) => item.capacity);
      return dataFiltered;
    } else if (technologySelected && scenarioSelected) {
      const dataFiltered = DataBase.filter(
        (item) => item.state === stateSelectedToDoMap
      )
        .filter((item) => item.policy === condition)
        .filter((item) => item.techs === technologySelected)
        .filter((item) => item.scenario === scenarioSelected)
        .map((item) => item.capacity);
      return dataFiltered;
    }
  };
  const dataFilteredToDoTechnologies = (condition: string): number[] | any => {
    if (!policiesSelected && !scenarioSelected) {
      const dataFiltered = DataBase.filter(
        (item) => item.state === stateSelectedToDoMap
      )
        .filter((item) => item.techs === condition)
        .map((item) => item.capacity);
      return dataFiltered;
    } else if (scenarioSelected) {
      const dataFiltered = DataBase.filter(
        (item) => item.state === stateSelectedToDoMap
      )
        .filter((item) => item.techs === condition)
        .filter((item) => item.scenario === scenarioSelected)
        .map((item) => item.capacity);
      return dataFiltered;
    } else if (policiesSelected) {
      const dataFiltered = DataBase.filter(
        (item) => item.state === stateSelectedToDoMap
      )
        .filter((item) => item.techs === condition)
        .filter((item) => item.policy === policiesSelected)
        .map((item) => item.capacity);
      return dataFiltered;
    } else if (policiesSelected && scenarioSelected) {
      const dataFiltered = DataBase.filter(
        (item) => item.state === stateSelectedToDoMap
      )
        .filter((item) => item.techs === condition)
        .filter((item) => item.policy === policiesSelected)
        .filter((item) => item.scenario === scenarioSelected)
        .map((item) => item.capacity);
      return dataFiltered;
    }
  };
  const dataFilteredToDoScenarios = (condition: string): number[] | any => {
    if (!policiesSelected && !technologySelected) {
      const dataFiltered = DataBase.filter(
        (item) => item.state === stateSelectedToDoMap
      )
        .filter((item) => item.scenario === condition)
        .map((item) => item.capacity);
      return dataFiltered;
    } else if (policiesSelected) {
      const dataFiltered = DataBase.filter(
        (item) => item.state === stateSelectedToDoMap
      )
        .filter((item) => item.scenario === condition)
        .filter((item) => item.policy === policiesSelected)
        .map((item) => item.capacity);
      return dataFiltered;
    } else if (technologySelected) {
      const dataFiltered = DataBase.filter(
        (item) => item.state === stateSelectedToDoMap
      )
        .filter((item) => item.scenario === condition)
        .filter((item) => item.techs === technologySelected)
        .map((item) => item.capacity);
      return dataFiltered;
    } else if (technologySelected && policiesSelected) {
      const dataFiltered = DataBase.filter(
        (item) => item.state === stateSelectedToDoMap
      )
        .filter((item) => item.scenario === condition)
        .filter((item) => item.techs === technologySelected)
        .filter((item) => item.policy === policiesSelected)
        .map((item) => item.capacity);
      return dataFiltered;
    }
  };

  // console.log(dataFilteredToDoFiltereds("Default", "Baseline", "CCGT"));

  function SumArray(dataFiltered: number[]) {
    let sum = 0;
    for (let i = 0; i < dataFiltered.length; i++) {
      sum += dataFiltered[i];
    }
    return sum;
  }

  useEffect(() => {
    let TotalPolicies = 0;
    let TotalScenarios = 0;
    let TotalTechs = 0;

    if (
      policiesSelected ||
      technologySelected ||
      scenarioSelected ||
      (policiesSelected && technologySelected && scenarioSelected)
    ) {
      setCCGT(SumArray(dataFilteredToDoTechnologies("CCGT")));
      setHygrogen(SumArray(dataFilteredToDoTechnologies("Hydrogen")));
      setNuclear(SumArray(dataFilteredToDoTechnologies("Nuclear")));
      setOnshorewind(SumArray(dataFilteredToDoTechnologies("Onshore wind")));
      setPVexisting(SumArray(dataFilteredToDoTechnologies("PV-existing")));
      setReservoir(SumArray(dataFilteredToDoTechnologies("Reservoir")));
      setRunofriver(SumArray(dataFilteredToDoTechnologies("Run-of-river")));
      setUtilityscalePV(
        SumArray(dataFilteredToDoTechnologies("Utility-scale PV"))
      );
      setFullRE(SumArray(dataFilteredToDoPolicies("100% RE")));
      setREPlusLC(SumArray(dataFilteredToDoPolicies("100% RE+LC")));
      setSumLC(SumArray(dataFilteredToDoPolicies("+LC")));
      setSumDefaut(SumArray(dataFilteredToDoPolicies("Default")));
      setBaseline(SumArray(dataFilteredToDoScenarios("Baseline")));
      setIntensiveElec(SumArray(dataFilteredToDoScenarios("Intensive elec.")));
      setLimitedElec(SumArray(dataFilteredToDoScenarios("Limited elec.")));
      setNetZero(SumArray(dataFilteredToDoScenarios("Net zero")));
    }

    if (groupBySelected === "Scenario") {
      Baseline != 0
        ? (TotalScenarios = Baseline + IntensiveElec + LimitedElec + NetZero)
        : null;
      setDataDescription(ScenariosData.map((item) => item.value));
      if (scenarioSelected === "Baseline") {
        setDataNumbers([0, Baseline, 0, 0, 0]);
      } else if (scenarioSelected === "Intensive elec.") {
        setDataNumbers([0, 0, IntensiveElec, 0, 0]);
      } else if (scenarioSelected === "Limited elec.") {
        setDataNumbers([0, 0, 0, LimitedElec, 0]);
      } else if (scenarioSelected === "Net zero") {
        setDataNumbers([0, 0, 0, 0, NetZero]);
      } else if (scenarioSelected === "All Scenarios") {
        setDataNumbers([
          TotalScenarios,
          Baseline,
          IntensiveElec,
          LimitedElec,
          NetZero,
        ]);
      } else {
        setDataNumbers([
          TotalScenarios,
          Baseline,
          IntensiveElec,
          LimitedElec,
          NetZero,
        ]);
      }
    } else if (groupBySelected === "Policy") {
      sumDefaut != 0
        ? (TotalPolicies = sumDefaut + sumLC + REPlusLC + fullRE)
        : null;
      setDataNumbers([TotalPolicies, sumLC, REPlusLC, fullRE]);
      setDataDescription(PolicyData.map((item) => item.value));
      if (policiesSelected === "Default") {
        setDataNumbers([sumDefaut, 0, 0, 0]);
      } else if (policiesSelected === "+LC") {
        setDataNumbers([0, sumLC, 0, 0]);
      } else if (policiesSelected === "100% RE+LC") {
        setDataNumbers([0, 0, REPlusLC, 0]);
      } else if (policiesSelected === "100% RE") {
        setDataNumbers([0, 0, 0, fullRE]);
      } else if (policiesSelected === "All Policies") {
        setDataNumbers([TotalPolicies, sumDefaut, sumLC, REPlusLC, fullRE]);
      } else {
        setDataNumbers([TotalPolicies, sumDefaut, sumLC, REPlusLC, fullRE]);
      }
    } else if (groupBySelected === "State") {
      setDataDescription(StateData.map((item) => item.value));
    } else if (groupBySelected === "Tecnologies") {
      CCGT != 0 || CCGT == 0
        ? (TotalTechs =
            CCGT +
            hydrogen +
            Nuclear +
            Onshorewind +
            PVexisting +
            Reservoir +
            Runofriver +
            UtilityscalePV)
        : null;
      setDataDescription(TechsOptions.map((item) => item.value));
      if (technologySelected === "CCGT") {
        setDataNumbers([CCGT, 0, 0, 0, 0, 0, 0, 0]);
      } else if (technologySelected === "Hydrogen") {
        setDataNumbers([0, hydrogen, 0, 0, 0, 0, 0, 0]);
      } else if (technologySelected === "Nuclear") {
        setDataNumbers([0, 0, Nuclear, 0, 0, 0, 0, 0]);
      } else if (technologySelected === "Onshore wind") {
        setDataNumbers([0, 0, 0, Onshorewind, 0, 0, 0, 0]);
      } else if (technologySelected === "PV-existing") {
        setDataNumbers([0, 0, 0, 0, PVexisting, 0, 0, 0]);
      } else if (technologySelected === "Reservoir") {
        setDataNumbers([0, 0, 0, 0, 0, Reservoir, 0, 0]);
      } else if (technologySelected === "Run-of-river") {
        setDataNumbers([0, 0, 0, 0, 0, 0, Runofriver, 0]);
      } else if (technologySelected === "Utility-scale PV") {
        setDataNumbers([0, 0, 0, 0, 0, 0, 0, UtilityscalePV]);
      } else if (technologySelected === "All Techs") {
        setDataNumbers([
          TotalTechs,
          CCGT,
          hydrogen,
          Nuclear,
          Onshorewind,
          PVexisting,
          Reservoir,
          Runofriver,
          UtilityscalePV,
        ]);
      } else {
        setDataNumbers([
          TotalTechs,
          CCGT,
          hydrogen,
          Nuclear,
          Onshorewind,
          PVexisting,
          Reservoir,
          Runofriver,
          UtilityscalePV,
          technologySelected,
          policiesSelected,
          scenarioSelected,
        ]);
      }
    } else if (groupBySelected === "Year of Data") {
      setDataDescription(YearData.map((item) => item.value.toString()));
    }
  }, [
    groupBySelected,
    stateSelectedToDoMap,
    fullRE,
    scenarioSelected,
    policiesSelected,
    technologySelected,
  ]);

  const handleTypeChart = (value: string) => {
    typeChart === value ? null : setTypeChart(value);
    setVisible(false);
  };

  useEffect(() => {
    setVisible(true);
  }, [
    visible,
    typeChart,
    stateSelectedToDoMap,
    groupBySelected,
    policiesSelected,
  ]);

  return (
    <div className="pt-12 mt-16 px-36">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-5xl font-bold">Graphics the your Selections!</h2>
          <p className="font-medium text-[#7F7F7F] ">
            Hand-picked themes that you can copy and paste into your apps.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            className={`${typeChart === "bar" ? "" : StyleChartNotSelected}`}
            onClick={() => handleTypeChart("bar")}
          >
            <BarChartBig />
          </Button>
          <Button
            className={`${typeChart === "line" ? "" : StyleChartNotSelected}`}
            onClick={() => handleTypeChart("line")}
          >
            <LineChart />
          </Button>
          <Button
            className={`${typeChart === "area" ? "" : StyleChartNotSelected}`}
            onClick={() => handleTypeChart("area")}
          >
            <AreaChart />
          </Button>
        </div>
      </div>
      <div className="grid gap-6 mt-10">
        <div className="w-full">
          {visible && (
            <Graphics
              dataDescriptions={dataDescription}
              dataNumbers={dataNumbers}
              typeChart={typeChart}
            />
          )}
          {!visible && (
            <Graphics
              dataDescriptions={dataDescription}
              dataNumbers={[0, 0, 0, 0]}
              typeChart={typeChart}
            />
          )}
        </div>
      </div>
    </div>
  );
};
