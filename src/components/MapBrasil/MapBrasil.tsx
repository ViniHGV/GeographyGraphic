"use client";
import React, { useState } from "react";
import { SVGMap } from "react-svg-map";
import Brazil from "@svg-maps/Brazil";
import "./style.css";

type IMapBrasil = {
  HandleStateProp: (ev: any) => void;
};

export const MapBrasil = ({ HandleStateProp }: IMapBrasil) => {
  const [tooltipState, setTooltipState] = useState({
    show: false,
    x: 0,
    y: 0,
    text: "",
  });

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
          handleLocationMouseOver(ev);
          HandleStateProp(ev.target.id);
        }}
        onLocationMouseOver={handleLocationMouseOver}
      />
      {tooltipState.show && (
        <div
          className="absolute bg-black text-white p-2 rounded-lg shadow-lg"
          style={{
            left: tooltipState.x - 100,
            top: tooltipState.y - 300,
            transform: "translate(-50%, -100%)",
          }}
        >
          {tooltipState.text}
        </div>
      )}
    </div>
  );
};
