"use client";
import React, { useContext, useState } from "react";
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
  }: any = useContext(appContext);

  const dataFilteredCapacityTotal = DataBase.filter(
    (item) => item.state === tooltipState.text
  ).map((item) => item.capacity);

  const dataFilteredCapacityDefaut = DataBase.filter(
    (item) => item.state === tooltipState.text
  )
    .filter((item) => item.policy === "Default")
    .map((item) => item.capacity);

  const dataFilteredLC = DataBase.filter(
    (item) => item.state === tooltipState.text
  )
    .filter((item) => item.policy === "+LC")
    .map((item) => item.capacity);

  const dataFilteredRELC = DataBase.filter(
    (item) => item.state === tooltipState.text
  )
    .filter((item) => item.policy === "100% RE+LC")
    .map((item) => item.capacity);

  const dataFilteredFullRE = DataBase.filter(
    (item) => item.state === tooltipState.text
  )
    .filter((item) => item.policy === "100% RE")
    .map((item) => item.capacity);

  function SumArray(dataFiltered: number[]) {
    let sum = 0;
    for (let i = 0; i < dataFiltered.length; i++) {
      sum += dataFiltered[i];
    }
    return sum;
  }

  const handleStatesMap = (ev: Event | any) => {
    if (scenarioSelected && policiesSelected && groupBySelected) {
      setTooltipState({ show: false, x: 0, y: 0, text: "" });
      handleLocationMouseOver(ev);
      setStateSelectedToDoMap(ev.target.id);
      setFullRE(SumArray(dataFilteredFullRE));
      setREPlusLC(SumArray(dataFilteredRELC));
      setSumLC(SumArray(dataFilteredLC));
      setSumTotalCapacityState(SumArray(dataFilteredCapacityTotal));
      setSumDefaut(SumArray(dataFilteredCapacityDefaut));
    } else
      toast.error(
        "Selecione Group By, Scenario e uma Policie para Prosseguir!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
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
          <p className="text-sm py-1">Capacity: {sumTotalCapacityState}</p>
          <p className="text-sm py-1">Default: {sumDefaut} </p>
          <p className="text-sm py-1">+LC: {sumLC}</p>
          <p className="text-sm py-1">100% RE+LC: {REPlusLC}</p>
          <p className="text-sm py-1">100%RE: {fullRE}</p>
        </div>
      )}
    </div>
  );
};
