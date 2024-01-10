"use client";
import React, { useContext, useEffect, useState } from "react";
import { SVGMap } from "react-svg-map";
import Brazil from "@svg-maps/Brazil";
import "./style.css";
import { appContext } from "../../../context/appContext";

export const MapBrasil = () => {
  const {
    setStateSelectedToDoMap,
    selectedCheckboxesState,
    setSelectedCheckboxesState,
    dataNumbers,
    dataDescription,
    toolbarStateMap,
    setToolbarStateMap,
  }: any = useContext(appContext);

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
    let state = ev.target.id.toUpperCase();

    setToolbarStateMap({ show: false, x: 0, y: 0, text: "" });
    handleLocationMouseOver(ev);

    setStateSelectedToDoMap(state);
  };

  const handleLocationMouseOver = (e: any) => {
    const stateName = e.target.id;

    if (stateName) {
      setToolbarStateMap({
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
      {toolbarStateMap.show && (
        <div
          className="absolute bg-black text-white p-2 rounded-lg shadow-lg"
          style={{
            left: toolbarStateMap.x - 100,
            top: toolbarStateMap.y - 325,
            transform: "translate(-50%, -100%)",
          }}
        >
          <p className="text-sm py-1">
            {" "}
            States selected: {selectedCheckboxesState.join(", ")}
          </p>
          {dataDescription.map((item: any, index: number) => (
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
