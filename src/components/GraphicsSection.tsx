"use client";
import { useContext, useEffect, useState } from "react";
import { Graphics } from "./Graphics";
import { appContext } from "../../context/appContext";
import { BarChartBig, LineChart, AreaChart } from "lucide-react";
import { Button } from "./ui/button";
import {
  PolicyData,
  ScenariosData,
  StateData,
  TechsOptions,
  YearData,
} from "../../data/data";
import { type } from "os";

export const GraphicsSection = () => {
  const {
    sumLC,
    StateSelected,
    sumTotalCapacityState,
    sumDefaut,
    REPlusLC,
    fullRE,
    typeChart,
    setTypeChart,
    groupBySelected,
    setGroupBySelected,
  }: any = useContext(appContext);

  const [visible, setVisible] = useState(false);
  const [dataDescription, setDataDescription] = useState([""]);
  const [dataNumbers, setDataNumbers] = useState([0]);
  const StyleChartNotSelected = "bg-zinc-200 text-black hover:text-white";

  useEffect(() => {
    if (groupBySelected === "Scenario")
      setDataDescription(ScenariosData.map((item) => item.value));
    if (groupBySelected === "Policy")
      setDataDescription(PolicyData.map((item) => item.value));
    if (groupBySelected === "State")
      setDataDescription(StateData.map((item) => item.value));
    if (groupBySelected === "Tecnologies")
      setDataDescription(TechsOptions.map((item) => item.value));
    if (groupBySelected === "Year of Data")
      setDataDescription(YearData.map((item) => item.value.toString()));
  }, [groupBySelected]);

  const handleTypeChart = (value: string) => {
    typeChart === value ? null : setTypeChart(value);
    setVisible(false);
  };

  useEffect(() => {
    setVisible(true);
  }, [visible, typeChart]);

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
              dataNumbers={[
                fullRE,
                REPlusLC,
                sumLC,
                sumDefaut,
                // sumTotalCapacityState,
              ]}
              typeChart={typeChart}
            />
          )}
        </div>
      </div>
    </div>
  );
};
