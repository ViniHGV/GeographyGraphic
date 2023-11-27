"use client";
import { useContext, useEffect, useState } from "react";
import { Graphics } from "./Graphics";
import { appContext } from "../../context/appContext";
import { BarChartBig, LineChart, AreaChart, PieChart } from "lucide-react";
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
    selectedCheckboxesState,
    selectedCheckboxesTechs,
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
    yearSelected,
    selectedCheckboxes,
    setSelectedCheckboxes,
    filterYear2019,
    setFilterYear2019,
    filterYear2020,
    setFilterYear2020,
  }: any = useContext(appContext);

  const [visible, setVisible] = useState(false);
  const [dataDescription, setDataDescription] = useState([""]);
  const [dataNumbers, setDataNumbers] = useState([0]);
  const StyleChartNotSelected = "bg-zinc-200 text-black hover:text-white";

  const dataFilteredToDoScenarios = (condition: string): number[] | any => {
    let filteredData = DataBase;

    if (selectedCheckboxesState.length > 0) {
      // console.log(selectedCheckboxes);
      filteredData = filteredData.filter((item) => {
        // console.log(item.scenario);
        return selectedCheckboxesState.includes(item.state);
      });
      // console.log(filteredData);
    } else {
      filteredData = filteredData.filter((item) => item.scenario === condition);
    }
    if (condition) {
      filteredData = filteredData.filter((item) => item.scenario === condition);
    }

    if (policiesSelected) {
      filteredData = filteredData.filter(
        (item) => item.policy === policiesSelected
      );
    }
    if (selectedCheckboxesTechs.length > 0) {
      // console.log(selectedCheckboxes);
      filteredData = filteredData.filter((item) => {
        // console.log(item.scenario);
        return selectedCheckboxesTechs.includes(item.techs);
      });
    }

    if (yearSelected) {
      filteredData = filteredData.filter((item) => item.year === yearSelected);
    }
    // console.log(filteredData);

    return filteredData.map((item) => {
      let capacityRemoveCaracter: string = item.capacity
        .toString()
        .replace(".", "");
      let capacityInt: number = parseInt(capacityRemoveCaracter);
      return capacityInt;
    });
  };

  const dataFilteredToDoPolicies = (condition: string): number[] | any => {
    let filteredData = DataBase;

    if (selectedCheckboxesState.length > 0) {
      // console.log(selectedCheckboxes);
      filteredData = filteredData.filter((item) => {
        // console.log(item.scenario);
        return selectedCheckboxesState.includes(item.state);
      });
      // console.log(filteredData);
    } else {
      filteredData = filteredData.filter((item) => item.policy === condition);
    }

    if (condition) {
      filteredData = filteredData.filter((item) => item.policy === condition);
    }

    // if (selectedCheckboxes.length > 0) {
    //   // console.log(selectedCheckboxes);
    //   filteredData = filteredData.filter((item) => {
    //     // console.log(item.scenario);
    //     return selectedCheckboxes.includes(item.scenario);
    //   });
    //   // console.log(filteredData);
    // }

    if (scenarioSelected) {
      filteredData = filteredData.filter(
        (item) => item.scenario === scenarioSelected
      );
    }

    if (selectedCheckboxesTechs.length > 0) {
      // console.log(selectedCheckboxes);
      filteredData = filteredData.filter((item) => {
        // console.log(item.scenario);
        return selectedCheckboxesTechs.includes(item.techs);
      });
      // console.log(filteredData);
    }

    if (yearSelected) {
      filteredData = filteredData.filter((item) => item.year === yearSelected);
    }

    return filteredData.map((item) => {
      let capacityRemoveCaracter: string = item.capacity
        .toString()
        .replace(".", "");
      let capacityInt: number = parseInt(capacityRemoveCaracter);
      return capacityInt;
    });
  };

  const dataFilteredToDoTechnologies = (condition: string): number[] | any => {
    let filteredData = DataBase;

    if (selectedCheckboxesState.length > 0) {
      // console.log(selectedCheckboxes);
      filteredData = filteredData.filter((item) => {
        // console.log(item.scenario);
        return selectedCheckboxesState.includes(item.state);
      });
      // console.log(filteredData);
    } else {
      filteredData = filteredData.filter((item) => item.techs === condition);
    }

    if (condition) {
      filteredData = filteredData.filter((item) => item.techs === condition);
    }

    // if (selectedCheckboxes.length > 0) {
    //   // console.log(selectedCheckboxes);
    //   filteredData = filteredData.filter((item) => {
    //     // console.log(item.scenario);
    //     return selectedCheckboxes.includes(item.scenario);
    //   });
    //   // console.log(filteredData);
    // }
    // else {
    //   // Se scenarioSelected não está definido, filtramos pelos cenários "scenariobrasil" e "scenarioEUA"
    //   filteredData = filteredData.filter((item) => item.scenario === "scenariobrasil" || item.scenario === "scenarioEUA");
    // }
    if (scenarioSelected) {
      filteredData = filteredData.filter(
        (item) => item.scenario === scenarioSelected
      );
    }

    if (policiesSelected) {
      filteredData = filteredData.filter(
        (item) => item.policy === policiesSelected
      );
    }

    if (yearSelected) {
      filteredData = filteredData.filter((item) => item.year === yearSelected);
    }

    return filteredData.map((item) => {
      let capacityRemoveCaracter: string = item.capacity
        .toString()
        .replace(".", "");
      let capacityInt: number = parseInt(capacityRemoveCaracter);
      return capacityInt;
    });
  };

  const dataFilteredToDoYearData = (condition: number): number[] | any => {
    let filteredData = DataBase;

    if (selectedCheckboxesState.length > 0) {
      // console.log(selectedCheckboxes);
      filteredData = filteredData.filter((item) => {
        // console.log(item.scenario);
        return selectedCheckboxesState.includes(item.state);
      });
      // console.log(filteredData);
    } else {
      filteredData = filteredData.filter((item) => item.year === condition);
    }

    if (condition) {
      filteredData = filteredData.filter((item) => item.year === condition);
    }

    // if (selectedCheckboxes.length > 0) {
    //   // console.log(selectedCheckboxes);
    //   filteredData = filteredData.filter((item) => {
    //     // console.log(item.scenario);
    //     return selectedCheckboxes.includes(item.scenario);
    //   });
    //   // console.log(filteredData);
    // }
    // else {
    //   // Se scenarioSelected não está definido, filtramos pelos cenários "scenariobrasil" e "scenarioEUA"
    //   filteredData = filteredData.filter((item) => item.scenario === "scenariobrasil" || item.scenario === "scenarioEUA");
    // }
    if (scenarioSelected) {
      filteredData = filteredData.filter(
        (item) => item.scenario === scenarioSelected
      );
    }

    if (policiesSelected) {
      filteredData = filteredData.filter(
        (item) => item.policy === policiesSelected
      );
    }

    return filteredData.map((item) => {
      let capacityRemoveCaracter: string = item.capacity
        .toString()
        .replace(".", "");
      let capacityInt: number = parseInt(capacityRemoveCaracter);
      return capacityInt;
    });
  };

  function SumArray(dataFiltered: number[]) {
    let sum = 0;
    for (let i = 0; i < dataFiltered.length; i++) {
      sum += dataFiltered[i];
    }
    return sum;
  }

  useEffect(() => {
    // let TotalPolicies = 0;
    // let TotalScenarios = 0;
    // let TotalTechs = 0;
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
    setFilterYear2019(SumArray(dataFilteredToDoYearData(2019)));
    setFilterYear2020(SumArray(dataFilteredToDoYearData(2020)));

    if (groupBySelected === "Scenario") {
      // Baseline != 0
      //   ? (TotalScenarios = Baseline + IntensiveElec + LimitedElec + NetZero)
      //   : null;
      setDataDescription(ScenariosData.map((item) => item.value));
      if (scenarioSelected === "Baseline") {
        setDataNumbers([Baseline, 0, 0, 0]);
      } else if (scenarioSelected === "Intensive elec.") {
        setDataNumbers([0, IntensiveElec, 0, 0]);
      } else if (scenarioSelected === "Limited elec.") {
        setDataNumbers([0, 0, LimitedElec, 0]);
      } else if (scenarioSelected === "Net zero") {
        setDataNumbers([0, 0, 0, NetZero]);
      }
      // else if (scenarioSelected === "All Scenarios") {
      //   setDataNumbers([
      //     TotalScenarios,
      //     Baseline,
      //     IntensiveElec,
      //     LimitedElec,
      //     NetZero,
      //   ]);
      // }
      else {
        setDataNumbers([
          // TotalScenarios,
          Baseline,
          IntensiveElec,
          LimitedElec,
          NetZero,
        ]);
      }
    } else if (groupBySelected === "Policy") {
      // sumDefaut != 0
      //   ? (TotalPolicies = sumDefaut + sumLC + REPlusLC + fullRE)
      //   : null;
      setDataNumbers([
        // TotalPolicies,
        sumDefaut,
        sumLC,
        REPlusLC,
        fullRE,
      ]);
      setDataDescription(PolicyData.map((item) => item.value));
      if (policiesSelected === "Default") {
        setDataNumbers([sumDefaut, 0, 0, 0]);
      } else if (policiesSelected === "+LC") {
        setDataNumbers([0, sumLC, 0, 0]);
      } else if (policiesSelected === "100% RE+LC") {
        setDataNumbers([0, 0, REPlusLC, 0]);
      } else if (policiesSelected === "100% RE") {
        setDataNumbers([0, 0, 0, fullRE]);
      }
      // else if (policiesSelected === "All Policies") {
      //   setDataNumbers([TotalPolicies, sumDefaut, sumLC, REPlusLC, fullRE]);
      // }
      else {
        setDataNumbers([
          // TotalPolicies,
          sumDefaut,
          sumLC,
          REPlusLC,
          fullRE,
        ]);
      }
    } else if (groupBySelected === "State") {
      setDataDescription(StateData.map((item) => item.value));
    } else if (groupBySelected === "Tecnologies") {
      // CCGT != 0 || CCGT == 0
      //   ? (TotalTechs =
      //       CCGT +
      //       hydrogen +
      //       Nuclear +
      //       Onshorewind +
      //       PVexisting +
      //       Reservoir +
      //       Runofriver +
      //       UtilityscalePV)
      //   : null;
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
      }
      // else if (technologySelected === "All Techs") {
      //   setDataNumbers([
      //     TotalTechs,
      //     CCGT,
      //     hydrogen,
      //     Nuclear,
      //     Onshorewind,
      //     PVexisting,
      //     Reservoir,
      //     Runofriver,
      //     UtilityscalePV,
      //   ]);
      // }
      else {
        setDataNumbers([
          // TotalTechs,
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
      setDataNumbers([filterYear2019, filterYear2020]);
    }
  }, [
    // dataNumbers,
    groupBySelected,
    stateSelectedToDoMap,
    fullRE,
    scenarioSelected,
    policiesSelected,
    technologySelected,
    sumLC,
    sumDefaut,
    REPlusLC,
    fullRE,
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
    yearSelected,
    selectedCheckboxes,
    selectedCheckboxesTechs,
    selectedCheckboxesState,
    filterYear2019,
    filterYear2020,
    yearSelected,
  ]);

  const handleTypeChart = (value: string) => {
    typeChart === value ? null : setTypeChart(value);
    setVisible(false);
  };

  useEffect(() => {
    if (!visible) {
      setVisible(true);
    }
  }, [
    dataNumbers,
    visible,
    stateSelectedToDoMap,
    groupBySelected,
    policiesSelected,
    technologySelected,
    scenarioSelected,
  ]);

  return (
    <div className="pt-40 px-5 lg:px-36">
      <div className="flex items-center flex-col lg:flex-row justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-5xl font-bold">Your final dashboard</h2>
          <p className="font-medium text-[#7F7F7F] ">
            Choose the best way to see the information, change the visibility
            models, export for your own use and create as you can!
          </p>
        </div>
        <div className="flex gap-2 py-5">
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
          <Button
            className={`${typeChart === "pie" ? "" : StyleChartNotSelected}`}
            onClick={() => handleTypeChart("pie")}
          >
            <PieChart />
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
