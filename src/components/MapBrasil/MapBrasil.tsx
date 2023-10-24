"use client";
import React, { useContext, useState } from "react";
import { SVGMap } from "react-svg-map";
import Brazil from "@svg-maps/Brazil";
import "./style.css";
import { DataBase } from "../../../data/data";
import { appContext } from "../../../context/appContext";

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
    StateSelected,
    setStateSelected,
  }: any = useContext(appContext);

  console.log(sumLC);

  const dataFilteredCapacityTotal = DataBase.filter(
    (item) => item.state === tooltipState.text
  ).map((item) => item.capacity);

  const dataFilteredCapacityDefaut = DataBase.filter(
    (item) => item.state === tooltipState.text
  )
    .filter((item) => item.policy === "Default")
    .map((item) => item.capacity);

  function SumArray(dataFiltered: number[]) {
    let sum = 0;
    for (let i = 0; i < dataFiltered.length; i++) {
      sum += dataFiltered[i];
    }
    return sum;
  }

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
          setTooltipState({ show: false, x: 0, y: 0, text: "" });
          handleLocationMouseOver(ev);
          setStateSelected(ev.target.id);
          setSumTotalCapacityState(SumArray(dataFilteredCapacityTotal));
          setSumDefaut(SumArray(dataFilteredCapacityDefaut));
        }}
        // onLocationMouseOver={handleLocationMouseOver}
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
          State: {StateSelected} Capacity: {sumTotalCapacityState} Default:{" "}
          {sumDefaut}
        </div>
      )}
    </div>
  );
};
