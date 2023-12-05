"use client";
import React, { useContext, useEffect, useState } from "react";
import { SVGMap } from "react-svg-map";
import Brazil from "@svg-maps/Brazil";
import "./style.css";
import { DataBase } from "../../../data/data";
import { appContext } from "../../../context/appContext";
import { toast } from "react-toastify";

type IMapBrasil = {
  HandleStateProp: (ev: any) => void;
  sumTotalCapacityState: number;
  setSumTotalCapacityState: React.Dispatch<React.SetStateAction<number>>;
  sumDefaut: number;
  setSumDefaut: React.Dispatch<React.SetStateAction<number>>;
};

export const MapBrasil = () => {
  const [tooltipState, setTooltipState] = useState({
    show: false,
    x: 0,
    y: 0,
    text: "",
  });
  const {
    sumLC,
    sumTotalCapacityState,
    sumDefaut,
    setSumTotalCapacityState,
    setSumDefaut,
    setSumLC,
    stateSelectedToDoMap,
    setStateSelectedToDoMap,
    REPlusLC,
    setREPlusLC,
    fullRE,
    setFullRE,
    scenarioSelected,
    policiesSelected,
    groupBySelected,
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
    selectedCheckboxesState,
    setSelectedCheckboxesState,
    dataNumbers,
    dataDescription,
  }: any = useContext(appContext);

  const dataFilteredCapacityTotal = DataBase.filter(
    (item) => item.state === stateSelectedToDoMap
  ).map((item) => item.capacity);

  const dataFilteredToDoPolicies = (condition: string): number[] => {
    const dataFiltered = DataBase.filter(
      (item) => item.state === stateSelectedToDoMap
    )
      .filter((item) => item.policy === condition)
      .map((item) => item.capacity);
    return dataFiltered;
  };

  const dataFilteredToDoTechnologies = (condition: string): number[] => {
    const dataFiltered = DataBase.filter(
      (item) => item.state === stateSelectedToDoMap
    )
      .filter((item) => item.techs === condition)
      .map((item) => item.capacity);
    return dataFiltered;
  };

  const dataFilteredToDoScenarios = (condition: string): number[] => {
    const dataFiltered = DataBase.filter(
      (item) => item.state === stateSelectedToDoMap
    )
      .filter((item) => item.scenario === condition)
      .map((item) => item.capacity);
    return dataFiltered;
  };

  function SumArray(dataFiltered: number[]) {
    let sum = 0;
    for (let i = 0; i < dataFiltered.length; i++) {
      sum += dataFiltered[i];
    }
    return sum;
  }

  const handleChange = (
    event?: React.ChangeEvent<HTMLInputElement>,
    type?: string
  ) => {
    setSelectedCheckboxesState((prev: string[]) => {
      if (event?.target.id) {
        // Se o checkbox está marcado e o tipo não está presente no estado, adiciona ao estado
        if (!prev.includes(type)) {
          return [...prev, type];
        }
      } else {
        // Se o checkbox está desmarcado, remove o tipo do estado
        return prev.filter((checkbox) => checkbox !== type);
      }

      return prev; // Retorna o estado inalterado se nenhuma alteração for feita
    });
  };

  const handleStatesMap = (ev: Event | any) => {
    if (groupBySelected) {
      setTooltipState({ show: false, x: 0, y: 0, text: "" });
      handleLocationMouseOver(ev);
      // setSelectedCheckboxesState(ev.target.id.toUpperCase());
      // setSelectedCheckboxesState((prev: any) => [
      //   ...prev,
      //   ev.target.id.toUpperCase(),
      // ]);
      setStateSelectedToDoMap(ev.target.id.toUpperCase());
      setFullRE(SumArray(dataFilteredToDoPolicies("100% RE")));
      setREPlusLC(SumArray(dataFilteredToDoPolicies("100% RE+LC")));
      setSumLC(SumArray(dataFilteredToDoPolicies("+LC")));
      setSumDefaut(SumArray(dataFilteredToDoPolicies("Default")));
      setSumTotalCapacityState(SumArray(dataFilteredCapacityTotal));
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
      setBaseline(SumArray(dataFilteredToDoScenarios("Baseline")));
      setIntensiveElec(SumArray(dataFilteredToDoScenarios("Intensive elec.")));
      setLimitedElec(SumArray(dataFilteredToDoScenarios("Limited elec.")));
      setNetZero(SumArray(dataFilteredToDoScenarios("Net zero")));
    } else
      toast.error("Selecione o Group By para Prosseguir!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  };

  console.log(selectedCheckboxesState);

  const handleLocationMouseOver = (e: any) => {
    const stateName = e.target.id;

    if (stateName) {
      setTooltipState({
        show: true,
        x: e.pageX,
        y: e.pageY,
        text: stateName.toUpperCase(),
      });
    }
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SVGMap
        map={Brazil}
        onLocationClick={(ev) => {
          handleStatesMap(ev);
          handleChange(ev, ev.target.id.toUpperCase());
        }}
      />
      {tooltipState.show && (
        <div
          className="absolute bg-black text-white p-2 rounded-lg shadow-lg"
          style={{
            left: tooltipState.x - 100,
            top: tooltipState.y - 325,
            transform: "translate(-50%, -100%)",
          }}
        >
          <p className="text-sm py-1">
            {" "}
            States selected: {selectedCheckboxesState.join(", ")}
          </p>
          {/* <p className="text-sm py-1">Capacity: {sumTotalCapacityState}</p> */}

          {dataDescription.map((item, index) => (
            <p key={index}>
              <span>{item}: </span>
              {dataNumbers[index] && <span>{dataNumbers[index]}</span>}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
