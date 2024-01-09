"use client";
import React, { useContext, useEffect, useState } from "react";
import { SVGMap } from "react-svg-map";
import Brazil from "@svg-maps/Brazil";
import "./style.css";
import { DataBase } from "../../../data/data";
import { toast } from "react-toastify";
import { appContext } from "../../../context/appContext";
import { useApiContext } from "../../../context/apiContext";

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
    setSumDefaut,
    setSumLC,
    setStateSelectedToDoMap,
    setREPlusLC,
    setFullRE,
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

  const { setUrlFetchApiFilter, dataFilteredAPI } = useApiContext();

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

    setTooltipState({ show: false, x: 0, y: 0, text: "" });
    handleLocationMouseOver(ev);

    setStateSelectedToDoMap(state);
    setUrlFetchApiFilter((prev) => prev.concat(`&state=${state}`));
    setFullRE(dataFilteredAPI.totals?.policy["100% RE"]);
    setREPlusLC(dataFilteredAPI.totals?.policy["100% RE + LC"]);
    setSumLC(dataFilteredAPI.totals?.policy["+LC"]);
    setSumDefaut(dataFilteredAPI.totals?.policy["Default"]);

    setCCGT(dataFilteredAPI.totals?.techs["CCGT"]);
    setHygrogen(dataFilteredAPI.totals?.techs["Hydrogen"]);
    setNuclear(dataFilteredAPI.totals?.techs["Nuclear"]);
    setOnshorewind(dataFilteredAPI.totals?.techs["Onshore wind"]);
    setPVexisting(dataFilteredAPI.totals?.techs["PV-existing"]);
    setReservoir(dataFilteredAPI.totals?.techs["Reservoir"]);
    setRunofriver(dataFilteredAPI.totals?.techs["Run-of-river"]);
    setUtilityscalePV(dataFilteredAPI.totals?.techs["Utility-scale PV"]);

    setBaseline(dataFilteredAPI.totals?.scenario["Baseline"]);
    setIntensiveElec(dataFilteredAPI.totals?.scenario["Intensive elec"]);
    setLimitedElec(dataFilteredAPI.totals?.scenario["Limited elec"]);
    setNetZero(dataFilteredAPI.totals?.scenario["Net zero"]);
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
