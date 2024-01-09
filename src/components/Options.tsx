"use client";
import React, { useContext, useEffect } from "react";
import { ComboboxDemo } from "./Selectors";
import { Button } from "./ui/button";
import { GroupByData } from "../../data/data";
import { MapBrasil } from "./MapBrasil/MapBrasil";
import { appContext } from "../../context/appContext";
import { CheckboxDemo } from "./CheckboxDemo";
import { ContainerOptions } from "./ContainerOptions";
import { IDataBaseV2, IOptionsData } from "../../@types/types";
import { fetchPoliciesData } from "@/services/policy";
import { fetchScenariosData } from "@/services/scenario";
import { fetchStatesData } from "@/services/state";
import { fetchTechsData } from "@/services/techs";
import { fetchYearsData } from "@/services/years";
import { useApiContext } from "../../context/apiContext";
import { fetchCostsData } from "@/services/costs";
import { fetchDataFilterApi } from "@/services/dataFilterApi";

export const Options = () => {
  const {
    selectedCheckboxesCosts,
    setSelectedCheckboxesCosts,
    selectedCheckboxesState,
    setSelectedCheckboxesState,
    selectedCheckboxesTechs,
    setSelectedCheckboxesTechs,
    scenarioSelected,
    setScenarioSelected,
    policiesSelected,
    setPoliciesSelected,
    groupBySelected,
    setGroupBySelected,
    setTechnologySelected,
    setYearSelected,
    setStateSelectedToDoMap,
    refresh,
    setRefresh,
    selectedCheckboxesYears,
    setSelectedCheckboxesYears,
  }: string | any = useContext(appContext);

  const {
    scenariosDataAPI,
    setScenariosDataAPI,
    policyDataAPI,
    setPolicyDataAPI,
    stateDataAPI,
    setStateDataAPI,
    techsDataAPI,
    setTechsDataAPI,
    yearsDataAPI,
    setYearsDataAPI,
    costsDataAPI,
    setCostsDatadAPI,
    urlFetchApiFilter,
    setUrlFetchApiFilter,
    setDataFilteredAPI,
  } = useApiContext();

  const fetchDataState = async (
    stateProp: React.Dispatch<React.SetStateAction<IOptionsData[]>>,
    fetchAPI: () => Promise<IOptionsData[]>
  ) => {
    try {
      const data: any = await fetchAPI();
      stateProp(data);
    } catch (error) {
      throw error;
    }
  };

  const fetchDataFilterAPi = async (
    stateProp: React.Dispatch<React.SetStateAction<IDataBaseV2>>,
    fetchAPI: (filters: any) => Promise<IDataBaseV2>,
    filters: any
  ) => {
    try {
      const data: any = await fetchAPI(filters);
      stateProp(data);
    } catch (error) {
      throw error;
    }
  };

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
    setSelectedCheckboxesCosts([]);
    setSelectedCheckboxesYears([]);
    setUrlFetchApiFilter("");
  };

  useEffect(() => {
    const filterParams = [
      policiesSelected && `policy=${policiesSelected}`,
      scenarioSelected && `scenario=${scenarioSelected}`,
      selectedCheckboxesState.length > 0 &&
        `state=${selectedCheckboxesState.join("&state=")}`,
      selectedCheckboxesTechs.length > 0 &&
        `techs=${selectedCheckboxesTechs.join("&techs=")}`,
      selectedCheckboxesCosts.length > 0 &&
        `costs=${selectedCheckboxesCosts.join("&costs=")}`,
      selectedCheckboxesYears.length > 0 &&
        `year=${selectedCheckboxesYears.join("&year=")}`,
    ];

    fetchDataState(setStateDataAPI, fetchStatesData);
    fetchDataState(setPolicyDataAPI, fetchPoliciesData);
    fetchDataState(setTechsDataAPI, fetchTechsData);
    fetchDataState(setScenariosDataAPI, fetchScenariosData);
    fetchDataState(setYearsDataAPI, fetchYearsData);
    fetchDataState(setYearsDataAPI, fetchYearsData);
    fetchDataState(setCostsDatadAPI, fetchCostsData);
    fetchDataFilterAPi(
      setDataFilteredAPI,
      fetchDataFilterApi,
      `${filterParams.filter(Boolean).join("&")}`
    );

    if (refresh) {
      setRefresh(false);
    }
  }, [refresh, urlFetchApiFilter]);

  return (
    <div className="pt-40 px-5 lg:px-36 flex flex-col gap-8 min-[450px]">
      <div className="flex flex-col gap-2">
        <h2 className="text-5xl font-bold">Create your dashboard</h2>
        <p className="font-medium text-gray-500">
          Know more about our potencials technologies and how we're working with
          them in Brazil
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-5 gap-24">
        <div className="flex flex-col lg:col-span-3 justify-center gap-2">
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
                  setState={(ev: string) => {
                    setScenarioSelected(ev);
                  }}
                  name="Filter by Scenaries"
                  data={scenariosDataAPI}
                />
              </ContainerOptions>

              <ContainerOptions title="Policies" isCheckbox={false}>
                <ComboboxDemo
                  valueState={policiesSelected}
                  setState={(ev) => {
                    setPoliciesSelected(ev);
                  }}
                  name="Filter by Policies"
                  data={policyDataAPI}
                />
              </ContainerOptions>

              <ContainerOptions title="Filter by States" isCheckbox={true}>
                {stateDataAPI.map((item, index) => (
                  <CheckboxDemo
                    key={index}
                    type={item.value}
                    setState={(ev: string[]) => {
                      setSelectedCheckboxesState(ev);
                      setUrlFetchApiFilter(
                        // (prev) => prev + `&state=${item.value}`
                        (prev) => prev.concat(`&state=${item.value}`)
                      );
                    }}
                    checkboxSelected={selectedCheckboxesState}
                  />
                ))}
              </ContainerOptions>
              <ContainerOptions title="Filter by Tecnologies" isCheckbox={true}>
                {techsDataAPI.map((item, index) => (
                  <CheckboxDemo
                    key={index}
                    type={item.value}
                    setState={(ev: string[]) => {
                      setSelectedCheckboxesTechs(ev);
                      setUrlFetchApiFilter((prev) =>
                        prev.concat(`&techs=${item.value}`)
                      );
                    }}
                    checkboxSelected={selectedCheckboxesTechs}
                  />
                ))}
              </ContainerOptions>
              <ContainerOptions title="Filter by Costs" isCheckbox={true}>
                {costsDataAPI.map((item, index) => (
                  <CheckboxDemo
                    key={index}
                    type={item.value}
                    setState={(ev: string[]) => {
                      setSelectedCheckboxesCosts(ev);
                      setUrlFetchApiFilter((prev) =>
                        prev.concat(`&costs=${item.value}`)
                      );
                    }}
                    checkboxSelected={selectedCheckboxesCosts}
                  />
                ))}
              </ContainerOptions>
              <ContainerOptions title="Filter by Years" isCheckbox={true}>
                {yearsDataAPI.map((item, index) => (
                  <CheckboxDemo
                    key={index}
                    type={item.value}
                    setState={(ev: string[]) => {
                      setSelectedCheckboxesYears(ev);
                      setUrlFetchApiFilter((prev) =>
                        prev.concat(`&year=${item.value}`)
                      );
                    }}
                    checkboxSelected={selectedCheckboxesYears}
                  />
                ))}
              </ContainerOptions>
              <div className="w-full flex  gap-2">
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
                  setState={(ev) => {
                    setScenarioSelected(ev);
                    setUrlFetchApiFilter((prev) =>
                      prev.concat(`&scenario=${ev}`)
                    );
                  }}
                  name="Filter by Scenaries"
                  data={scenariosDataAPI}
                />
              </ContainerOptions>

              <ContainerOptions title="Policies" isCheckbox={false}>
                <ComboboxDemo
                  valueState={policiesSelected}
                  setState={(ev) => {
                    setPoliciesSelected(ev);
                    setUrlFetchApiFilter((prev) =>
                      prev.concat(`&policy=${ev}`)
                    );
                  }}
                  name="Filter by Policies"
                  data={policyDataAPI}
                />
              </ContainerOptions>

              <ContainerOptions title="Filter by States" isCheckbox={true}>
                {stateDataAPI.map((item, index) => (
                  <CheckboxDemo
                    key={index}
                    type={item.value}
                    setState={(ev: string[]) => {
                      setSelectedCheckboxesState(ev);
                      setUrlFetchApiFilter((prev) =>
                        prev.concat(`&state=${item.value}`)
                      );
                    }}
                    checkboxSelected={selectedCheckboxesState}
                  />
                ))}
              </ContainerOptions>
              <ContainerOptions title="Filter by Tecnologies" isCheckbox={true}>
                {techsDataAPI.map((item, index) => (
                  <CheckboxDemo
                    key={index}
                    type={item.value}
                    setState={(ev: string[]) => {
                      setSelectedCheckboxesTechs(ev);
                      setUrlFetchApiFilter((prev) =>
                        prev.concat(`&techs=${item.value}`)
                      );
                    }}
                    checkboxSelected={selectedCheckboxesTechs}
                  />
                ))}
              </ContainerOptions>
              <ContainerOptions title="Filter by Costs" isCheckbox={true}>
                {costsDataAPI.map((item, index) => (
                  <CheckboxDemo
                    key={index}
                    type={item.value}
                    setState={(ev: string[]) => {
                      setSelectedCheckboxesCosts(ev);
                      setUrlFetchApiFilter((prev) =>
                        prev.concat(`&costs=${item.value}`)
                      );
                    }}
                    checkboxSelected={selectedCheckboxesCosts}
                  />
                ))}
              </ContainerOptions>
              <ContainerOptions title="Filter by Years" isCheckbox={true}>
                {yearsDataAPI.map((item, index) => (
                  <CheckboxDemo
                    key={index}
                    type={item.value}
                    setState={(ev: string[]) => {
                      setSelectedCheckboxesYears(ev);
                      setUrlFetchApiFilter((prev) =>
                        prev.concat(`&year=${item.value}`)
                      );
                    }}
                    checkboxSelected={selectedCheckboxesYears}
                  />
                ))}
              </ContainerOptions>
              <div className="w-full flex  gap-2">
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
