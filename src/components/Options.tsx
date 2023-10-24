"use client";
import React, { useState } from "react";
import Map from "../../public/Map.png";
import Image from "next/image";
import { ComboboxDemo } from "./Selectors";
import { Button } from "./ui/button";
import {
  PolicyData,
  ScenariosData,
  StateData,
  TechsOptions,
  YearData,
} from "../../data/data";
import { MapBrasil } from "./MapBrasil/MapBrasil";

export const Options = () => {
  const [StateSelected, setStateSelected] = useState("");
  const [sumTotalCapacityState, setSumTotalCapacityState] = useState(0);
  const [sumDefaut, setSumDefaut] = useState(0);

  return (
    <div className="pt-20 px-36 flex flex-col gap-8">
      <div className=" flex flex-col gap-2">
        <h2 className="text-5xl font-bold">Selected your options!</h2>
        <p className="font-medium text-gray-500">
          Hand-picked themes that you can copy and paste into your apps.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-52">
        <div className="flex flex-col gap-2">
          <p className="font-medium">
            Selected Capacity (GW){" "}
            <span className="font-bold"> {StateSelected.toUpperCase()}</span>
          </p>
          {/* <Image alt="" src={Map}></Image> */}

          <MapBrasil
            sumTotalCapacityState={sumTotalCapacityState}
            setSumTotalCapacityState={(ev) => setSumTotalCapacityState(ev)}
            sumDefaut={sumDefaut}
            setSumDefaut={(ev) => setSumDefaut(ev)}
            State={StateSelected}
            HandleStateProp={(ev: any) => setStateSelected(ev)}
          />
        </div>
        <div className="flex flex-col justify-between items-end">
          <ComboboxDemo name="Selected Scenarios" data={ScenariosData} />
          <ComboboxDemo name="Selected Policies" data={PolicyData} />
          <ComboboxDemo name="Selected State" data={StateData} />
          <ComboboxDemo name="Selected Tecnologies" data={TechsOptions} />
          <ComboboxDemo name="Selected Year of Data" data={YearData} />
          <Button className="w-full py-6 max-w-[455px]">
            Geerated Your Graphic
          </Button>
        </div>
      </div>
    </div>
  );
};
