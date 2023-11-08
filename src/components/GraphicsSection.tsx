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
  }: any = useContext(appContext);

  const [visible, setVisible] = useState(false);
  const [dataDescription, setDataDescription] = useState([""]);
  const [dataNumbers, setDataNumbers] = useState([0]);
  const StyleChartNotSelected = "bg-zinc-200 text-black hover:text-white";

  // function SumArray(dataFiltered: number[][] | any) {
  //   let sum = 0;
  //   for (let i = 0; i < dataFiltered.length; i++) {
  //     for (let k = 0; k < dataFiltered[i].length; k++) {
  //     // console.log dataFiltered[i][k];
  //     sum += dataFiltered[i][k];
  //     }
  //   return sum;
  //   }
  // }

  const dataFilteredCapacityTotal = StateData.map((data) =>
    DataBase.filter((item) => item.state === data.value).map(
      (item) => item.capacity
    )
  );

  useEffect(() => {
    let TotalPolicies = 0;
    let TotalScenarios = 0;
    let TotalTechs = 0;

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
