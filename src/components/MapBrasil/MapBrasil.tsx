"use client";
import React, { useContext, useEffect, useState } from "react";
import { SVGMap } from "react-svg-map";
import Brazil from "@svg-maps/Brazil";
import "./style.css";
import { DataBase } from "../../../data/data";
import { appContext } from "../../../context/appContext";
import { toast } from "react-toastify";
import { type } from "os";

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

  const handleStatesMap = (ev: Event | any) => {
    if (groupBySelected) {
      setTooltipState({ show: false, x: 0, y: 0, text: "" });
      handleLocationMouseOver(ev);
      // setSelectedCheckboxesState(ev.target.id.toUpperCase());
      setSelectedCheckboxesState((prev: any) => [
        ...prev,
        ev.target.id.toUpperCase(),
      ]);
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
            State: {stateSelectedToDoMap.toUpperCase()}
          </p>
          {/* <p className="text-sm py-1">Capacity: {sumTotalCapacityState}</p> */}
          <p className="text-sm py-1">Default: {sumDefaut} </p>
          <p className="text-sm py-1">+LC: {sumLC}</p>
          <p className="text-sm py-1">100% RE+LC: {REPlusLC}</p>
          <p className="text-sm py-1">100%RE: {fullRE}</p>
        </div>
      )}
    </div>
  );
};
