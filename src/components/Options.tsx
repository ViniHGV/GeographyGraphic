"use client";
import React, { useContext, useEffect } from "react";
import { ComboboxDemo } from "./Selectors";
import { Button } from "./ui/button";
import {
  DataBase,
  GroupByData,
  PolicyData,
  ScenariosData,
  StateData,
  TechsOptions,
  YearData,
} from "../../data/data";
import { MapBrasil } from "./MapBrasil/MapBrasil";
import { appContext } from "../../context/appContext";

export const Options = () => {
  const {
    stateSelectedToDoMap,
    scenarioSelected,
    setScenarioSelected,
    policiesSelected,
    setPoliciesSelected,
    groupBySelected,
    setGroupBySelected,
    stateSelectedToDoOption,
    setStateSelectedToDoOption,
    technologySelected,
    setTechnologySelected,
    yearSelected,
    setYearSelected,
    setStateSelectedToDoMap,
  }: string | any = useContext(appContext);

  const handleResultToDoButton = () => {
    setStateSelectedToDoMap(stateSelectedToDoOption);
  };

  return (
    <div className="pt-20 px-36 flex flex-col gap-8 min-[450px]">
      <div className=" flex flex-col gap-2">
        <h2 className="text-5xl font-bold">Selected your options!</h2>
        <p className="font-medium text-gray-500">
          Hand-picked themes that you can copy and paste into your apps.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-24">
        <div className="flex flex-col col-span-3 gap-2">
          <p className="font-medium">
            Selected Capacity (GW){" "}
            <span className="font-bold">
              {" "}
              {stateSelectedToDoMap?.toUpperCase()}
            </span>
          </p>

          <MapBrasil />
        </div>
        <div className="flex flex-col w-full col-span-2 justify-between items-end">
          <ComboboxDemo
            valueState={groupBySelected}
            setState={(ev) => setGroupBySelected(ev)}
            name="Selected Group By"
            data={GroupByData}
          />
          <ComboboxDemo
            valueState={scenarioSelected}
            setState={(ev) => {
              console.log(scenarioSelected);
              setScenarioSelected(ev);
            }}
            name="Selected Scenarios"
            data={ScenariosData}
          />
          <ComboboxDemo
            valueState={policiesSelected}
            setState={(ev) => setPoliciesSelected(ev)}
            name="Selected Policies"
            data={PolicyData}
          />
          <ComboboxDemo
            valueState={stateSelectedToDoOption}
            setState={(ev) => setStateSelectedToDoOption(ev)}
            name="Selected State"
            data={StateData}
          />
          <ComboboxDemo
            valueState={technologySelected}
            setState={(ev) => setTechnologySelected(ev)}
            name="Selected Tecnologies"
            data={TechsOptions}
          />
          <ComboboxDemo
            valueState={yearSelected}
            setState={(ev) => setYearSelected(ev)}
            name="Selected Year of Data"
            data={YearData}
          />
          <Button onClick={handleResultToDoButton} className="w-full py-6">
            Geerated Your Graphic
          </Button>
        </div>
      </div>
    </div>
  );
};
