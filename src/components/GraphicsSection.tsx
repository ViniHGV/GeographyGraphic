"use client";
import { useContext, useEffect, useState } from "react";
import { Graphics } from "./Graphics";
import { appContext } from "../../context/appContext";
import {
  BarChartBig,
  LineChart,
  AreaChart,
  PieChart,
  Table,
} from "lucide-react";
import { Button } from "./ui/button";
import { TableDemo } from "./Table";
import { useApiContext } from "../../context/apiContext";

export const GraphicsSection = () => {
  const {
    selectedCheckboxesCosts,
    selectedCheckboxesYears,
    selectedCheckboxesState,
    selectedCheckboxesTechs,
    sumTotalCapacityState,
    typeChart,
    setTypeChart,
    groupBySelected,
    stateSelectedToDoMap,
    scenarioSelected,
    policiesSelected,
    technologySelected,
    yearSelected,
    dataDescription,
    setDataDescription,
    dataNumbers,
    setDataNumbers,
  }: any = useContext(appContext);

  const {
    dataFilteredAPI,
    costsDataAPI,
    yearsDataAPI,
    stateDataAPI,
    scenariosDataAPI,
    policyDataAPI,
    techsDataAPI,
  } = useApiContext();

  const [visible, setVisible] = useState(false);
  const [exibitionTable, setExibitionTable] = useState(false);
  const [loadingDates, setLoadingDates] = useState(true);
  const StyleChartNotSelected = "bg-zinc-200 text-black hover:text-white";

  function SumArray(dataFiltered: number[]) {
    let sum = 0;
    for (let i = 0; i < dataFiltered.length; i++) {
      sum += dataFiltered[i];
    }
    return sum;
  }

  useEffect(() => {
    let dataNumbersGroupBy = [];
    let dataDescriptionGroupBy = [];
    if (groupBySelected === "Scenario") {
      for (const key of scenariosDataAPI.map((item) => item.value)) {
        let numberScenarie = dataFilteredAPI.totals?.scenario[key];

        if (numberScenarie != null || numberScenarie != undefined) {
          dataDescriptionGroupBy.push(key);
          dataNumbersGroupBy.push(numberScenarie);
        }
      }
      setDataDescription(dataDescriptionGroupBy.map((item) => item));
      setDataNumbers(dataNumbersGroupBy.map((item) => item));
    } else if (groupBySelected === "Policy") {
      for (const key of policyDataAPI.map((item) => item.value)) {
        let numberPolicy = dataFilteredAPI.totals?.policy[key];

        if (numberPolicy != null || numberPolicy != undefined) {
          dataDescriptionGroupBy.push(key);
          dataNumbersGroupBy.push(numberPolicy);
        }
      }
      setDataDescription(dataDescriptionGroupBy.map((item) => item));
      setDataNumbers(dataNumbersGroupBy.map((item) => item));
    } else if (groupBySelected === "State") {
      for (const key of stateDataAPI.map((item) => item.value)) {
        let numberState = dataFilteredAPI.totals?.state[key];

        if (numberState != null || numberState != undefined) {
          dataNumbersGroupBy.push(numberState);
          dataDescriptionGroupBy.push(key);
        }
      }
      setDataDescription(dataDescriptionGroupBy.map((item) => item));
      setDataNumbers(dataNumbersGroupBy.map((item) => item));
    } else if (groupBySelected === "Tecnologies") {
      for (const key of techsDataAPI.map((item) => item.value)) {
        let numberTech = dataFilteredAPI.totals?.techs[key];

        if (numberTech != null || numberTech != undefined) {
          dataNumbersGroupBy.push(numberTech);
          dataDescriptionGroupBy.push(key);
        }
      }
      setDataDescription(dataDescriptionGroupBy.map((item) => item));
      setDataNumbers(dataNumbersGroupBy.map((item) => item));
    } else if (groupBySelected === "Costs") {
      for (const key of costsDataAPI.map((item) => item.value)) {
        let total = dataFilteredAPI.totals?.costs[key];

        if (total != undefined || total != null) {
          dataDescriptionGroupBy.push(key);
          dataNumbersGroupBy.push(total);
        }
      }
      setDataDescription(dataDescriptionGroupBy.map((item) => item));
      setDataNumbers(dataNumbersGroupBy.map((item) => item));
    } else if (groupBySelected === "Year of Data") {
      for (const key of yearsDataAPI.map((item) => item.value)) {
        let numberYears = dataFilteredAPI.totals?.year[key];

        if (numberYears != null || numberYears != undefined) {
          dataDescriptionGroupBy.push(key);
          dataNumbersGroupBy.push(numberYears);
        }
      }
      setDataDescription(dataDescriptionGroupBy.map((item) => item));
      setDataNumbers(dataNumbersGroupBy.map((item) => item));
    }
  }, [
    dataFilteredAPI,
    groupBySelected,
    scenarioSelected,
    policiesSelected,
    technologySelected,
    yearSelected,
    selectedCheckboxesTechs,
    selectedCheckboxesState,
    selectedCheckboxesCosts,
    selectedCheckboxesYears,
  ]);

  const handleTypeChart = (value: string) => {
    typeChart === value ? null : setTypeChart(value);
    setVisible(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoadingDates(false);
    }, 4500);
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

  const validationSelectedPolicyAndScenary =
    !policiesSelected || !scenarioSelected;

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
            className={`${
              typeChart === "bar" && !exibitionTable
                ? ""
                : StyleChartNotSelected
            }`}
            onClick={() => {
              handleTypeChart("bar");
              setExibitionTable(false);
            }}
          >
            <BarChartBig />
          </Button>
          <Button
            className={`${
              typeChart === "line" && !exibitionTable
                ? ""
                : StyleChartNotSelected
            }`}
            onClick={() => {
              handleTypeChart("line");
              setExibitionTable(false);
            }}
          >
            <LineChart />
          </Button>
          <Button
            className={`${
              typeChart === "area" && !exibitionTable
                ? ""
                : StyleChartNotSelected
            }`}
            onClick={() => {
              handleTypeChart("area");
              setExibitionTable(false);
            }}
          >
            <AreaChart />
          </Button>
          <Button
            className={`${
              typeChart === "pie" && !exibitionTable
                ? ""
                : StyleChartNotSelected
            }`}
            onClick={() => {
              handleTypeChart("pie");
              setExibitionTable(false);
            }}
          >
            <PieChart />
          </Button>
          <Button
            className={`${exibitionTable ? "" : StyleChartNotSelected}`}
            onClick={() => setExibitionTable(true)}
          >
            <Table />
          </Button>
        </div>
      </div>
      <div className="grid gap-6 mt-10">
        <div className="w-full">
          {visible &&
            !exibitionTable &&
            dataDescription.length > 0 &&
            policiesSelected &&
            scenarioSelected && (
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
          {visible && !exibitionTable && validationSelectedPolicyAndScenary && (
            <h1 className="text-2xl font-semibold">
              Select policy and scenary to continue!
            </h1>
          )}
          {visible && !loadingDates && dataDescription.length == 0 && (
            <h1 className="text-2xl font-semibold">
              There is no result for the filter combination performed!
            </h1>
          )}
          {visible && loadingDates && dataDescription.length == 0 && (
            <h1 className="text-2xl font-semibold">
              Loading data into the chart view!
            </h1>
          )}
          {visible && exibitionTable && (
            <TableDemo
              DataRow={dataDescription}
              DataNumbers={dataNumbers}
              totalCapacity={
                (SumArray(dataNumbers) / sumTotalCapacityState) * 100
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};
