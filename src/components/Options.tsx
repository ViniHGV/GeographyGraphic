"use client";
import React, { useContext, useEffect } from "react";
import { ComboboxDemo } from "./Selectors";
import { Button } from "./ui/button";
import {
  GroupByData,
  PolicyData,
  ScenariosData,
  StateData,
  TechsOptions,
  YearData,
} from "../../data/data";
import { MapBrasil } from "./MapBrasil/MapBrasil";
import { appContext } from "../../context/appContext";
import { type } from "os";
import { CheckboxDemo } from "./CheckboxDemo";

export const Options = () => {
  const {
    selectedCheckboxes,
    setSelectedCheckboxes,
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

  const resetFilters = () => {
    setGroupBySelected("Scenario");
    setScenarioSelected("");
    setPoliciesSelected("");
    setTechnologySelected("");
    setStateSelectedToDoMap("");
    setYearSelected("");
  };

  // const handleChange = (event: any) => {
  //   if (event.target.checked) {
  //     setSelectedCheckboxes((prev: any) => [...prev, type]);
  //   } else {
  //     setSelectedCheckboxes((prev: object[]) =>
  //       prev.filter((checkbox) => checkbox !== type)
  //     );
  //   }
  // };

  // useEffect(() => {
  //   console.log(selectedCheckboxes);
  // }, [selectedCheckboxes]);

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
          <div className="flex flex-col gap-3 w-full">
            <p className="w-full font-medium">GroupBy</p>
            <div className="flex gap-2 w-full items-center">
              <ComboboxDemo
                valueState={groupBySelected}
                setState={(ev) => setGroupBySelected(ev)}
                name="Selected Group By"
                data={GroupByData}
              />
            </div>
          </div>
          {/* <ComboboxDemo
            valueState={scenarioSelected}
            setState={(ev) => setScenarioSelected(ev)}
            name="Selected Scenarios"
            data={ScenariosData}
          /> */}
          <div className="flex flex-col gap-3 w-full border-b border-gray-300 pb-3">
            <p className="w-full font-medium">Scenaries</p>
            <div className="flex gap-2 w-full items-center px-4 justify-between">
              {ScenariosData.map((item, index) => (
                <CheckboxDemo key={index} type={item.value} />
              ))}
            </div>
          </div>

          <ComboboxDemo
            valueState={policiesSelected}
            setState={(ev) => setPoliciesSelected(ev)}
            name="Selected Policies"
            data={PolicyData}
          />
          <ComboboxDemo
            valueState={stateSelectedToDoMap}
            setState={(ev) => {
              // setStateSelectedToDoOption(ev);
              setStateSelectedToDoMap(ev);
            }}
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
          <div className="w-full flex  gap-2">
            <Button onClick={handleResultToDoButton} className="w-full py-6">
              Geerated Your Graphic
            </Button>
            <Button
              onClick={resetFilters}
              className="w-full py-6 bg-red-600 hover:bg-red-700"
            >
              Reset Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
