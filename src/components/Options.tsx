"use client";
import React, { useContext, useEffect, useState } from "react";
import { ComboboxDemo } from "./Selectors";
import { Button } from "./ui/button";
import {
  GroupByData,
  PolicyData,
  ScenariosData,
  StateData,
  // StateData,
  TechsOptions,
  YearData,
} from "../../data/data";
import { MapBrasil } from "./MapBrasil/MapBrasil";
import { appContext } from "../../context/appContext";
import { type } from "os";
import { CheckboxDemo } from "./CheckboxDemo";
import { ContainerOptions } from "./ContainerOptions";

export const Options = () => {
  const {
    selectedCheckboxesState,
    setSelectedCheckboxesState,
    selectedCheckboxesTechs,
    setSelectedCheckboxesTechs,
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
    refresh,
    setRefresh,
  }: string | any = useContext(appContext);

  const resetFilters = () => {
    setRefresh(true);
    setGroupBySelected("Scenario");
    setScenarioSelected("");
    setPoliciesSelected("");
    setTechnologySelected("");
    setStateSelectedToDoMap("");
    setYearSelected("");
    setSelectedCheckboxesTechs([]);
    setSelectedCheckboxesState([]);
  };

  useEffect(() => {
    if (refresh) {
      setRefresh(false);
    }
  }, [refresh]);

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
    <div className="pt-40 px-5 lg:px-36 flex flex-col gap-8 min-[450px]">
      <div className="flex flex-col gap-2">
        <h2 className="text-5xl font-bold">Create your dashboard</h2>
        <p className="font-medium text-gray-500">
          Know more about our potencials technologies and how we’re working with
          them in Brazil
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-5 gap-24">
        <div className="flex flex-col lg:col-span-3 justify-center gap-2">
          {/* <p className="font-medium">
            Selected Capacity (GW){" "}
            <span className="font-bold">
              {" "}
              {stateSelectedToDoMap?.toUpperCase()}
            </span>
          </p> */}

          <MapBrasil />
        </div>
        <div className="flex flex-col w-full lg:col-span-2 gap-4 justify-between items-end">
          {!refresh && (
            <>
              <ContainerOptions title="Group By" isCheckbox={false}>
                <p className="w-full font-semibold text-sm pl-4">Group By</p>
                <ComboboxDemo
                  valueState={groupBySelected}
                  setState={(ev) => setGroupBySelected(ev)}
                  name="Selected Group By"
                  data={GroupByData}
                />
              </ContainerOptions>

              <ContainerOptions title="Filter by Scenaries" isCheckbox={false}>
                <ComboboxDemo
                  valueState={scenarioSelected}
                  setState={(ev) => setScenarioSelected(ev)}
                  name="Filter by Scenaries"
                  data={ScenariosData}
                />
                {/* {ScenariosData.map((item, index) => (
              <CheckboxDemo
                key={index}
                type={item.value}
                setState={(ev: string[]) => setSelectedCheckboxes(ev)}
              />
            ))} */}
              </ContainerOptions>

              <ContainerOptions title="Policies" isCheckbox={false}>
                <ComboboxDemo
                  valueState={policiesSelected}
                  setState={(ev) => setPoliciesSelected(ev)}
                  name="Filter by Policies"
                  data={PolicyData}
                />
              </ContainerOptions>

              <ContainerOptions title="Filter by States" isCheckbox={true}>
                {StateData.map((item, index) => (
                  <CheckboxDemo
                    // state={selectedCheckboxes}
                    key={index}
                    type={item.value}
                    setState={(ev: string[]) => setSelectedCheckboxesState(ev)}
                  />
                ))}
                {/* <ComboboxDemo
              valueState={stateSelectedToDoMap}
              setState={(ev) => {
                // setStateSelectedToDoOption(ev);
                setStateSelectedToDoMap(ev);
              }}
              name="Filter by State"
              data={StateData}
            /> */}
              </ContainerOptions>

              <ContainerOptions title="Filter by Tecnologies" isCheckbox={true}>
                {TechsOptions.map((item, index) => (
                  <CheckboxDemo
                    key={index}
                    type={item.value}
                    setState={(ev: string[]) => setSelectedCheckboxesTechs(ev)}
                  />
                ))}
                {/* <ComboboxDemo
              valueState={technologySelected}
              setState={(ev) => setTechnologySelected(ev)}
              name="Filter by Tecnologies"
              data={TechsOptions}
            /> */}
              </ContainerOptions>
              <ContainerOptions title="Year of Data" isCheckbox={false}>
                <ComboboxDemo
                  valueState={yearSelected}
                  setState={(ev) => setYearSelected(ev)}
                  name="Filter by Year of Data"
                  data={YearData}
                />
              </ContainerOptions>
              <div className="w-full flex  gap-2">
                {/* <Button onClick={handleResultToDoButton} className="w-full py-6">
              Geerated Your Graphic
            </Button> */}
                <Button
                  onClick={resetFilters}
                  className="w-full py-6 bg-black hover:bg-opacity-70"
                >
                  Reset Filters
                </Button>
              </div>
            </>
          )}
          {refresh && (
            <>
              <ContainerOptions title="Group By" isCheckbox={false}>
                <ComboboxDemo
                  valueState={groupBySelected}
                  setState={(ev) => setGroupBySelected(ev)}
                  name="Selected Group By"
                  data={GroupByData}
                />
              </ContainerOptions>

              <ContainerOptions title="Filter by Scenaries" isCheckbox={false}>
                <ComboboxDemo
                  valueState={scenarioSelected}
                  setState={(ev) => setScenarioSelected(ev)}
                  name="Filter by Scenaries"
                  data={ScenariosData}
                />
                {/* {ScenariosData.map((item, index) => (
          <CheckboxDemo
            key={index}
            type={item.value}
            setState={(ev: string[]) => setSelectedCheckboxes(ev)}
          />
        ))} */}
              </ContainerOptions>

              <ContainerOptions title="Policies" isCheckbox={false}>
                <ComboboxDemo
                  valueState={policiesSelected}
                  setState={(ev) => setPoliciesSelected(ev)}
                  name="Filter by Policies"
                  data={PolicyData}
                />
              </ContainerOptions>

              <ContainerOptions title="Filter by States" isCheckbox={true}>
                {StateData.map((item, index) => (
                  <CheckboxDemo
                    key={index}
                    type={item.value}
                    setState={(ev: string[]) => setSelectedCheckboxesState(ev)}
                  />
                ))}
                {/* <ComboboxDemo
          valueState={stateSelectedToDoMap}
          setState={(ev) => {
            // setStateSelectedToDoOption(ev);
            setStateSelectedToDoMap(ev);
          }}
          name="Filter by State"
          data={StateData}
        /> */}
              </ContainerOptions>

              <ContainerOptions title="Filter by Tecnologies" isCheckbox={true}>
                {TechsOptions.map((item, index) => (
                  <CheckboxDemo
                    key={index}
                    type={item.value}
                    setState={(ev: string[]) => setSelectedCheckboxesTechs(ev)}
                  />
                ))}
                {/* <ComboboxDemo
          valueState={technologySelected}
          setState={(ev) => setTechnologySelected(ev)}
          name="Filter by Tecnologies"
          data={TechsOptions}
        /> */}
              </ContainerOptions>
              <ContainerOptions title="Year of Data" isCheckbox={false}>
                <ComboboxDemo
                  valueState={yearSelected}
                  setState={(ev) => setYearSelected(ev)}
                  name="Filter by Year of Data"
                  data={YearData}
                />
              </ContainerOptions>
              <div className="w-full flex  gap-2">
                {/* <Button onClick={handleResultToDoButton} className="w-full py-6">
          Geerated Your Graphic
        </Button> */}
                <Button
                  onClick={resetFilters}
                  className="w-full py-6 bg-black hover:bg-opacity-70"
                >
                  Reset Filters
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
