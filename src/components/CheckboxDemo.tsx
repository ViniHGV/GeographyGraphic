"use client";
import { useContext, useEffect, useState } from "react";
// import { useContext, useEffect, useState } from "react";
// import { appContext } from "../../context/appContext";
import { ICheckboxDemo } from "../../types/types";
import { appContext } from "../../context/appContext";

export function CheckboxDemo({ type, setState }: ICheckboxDemo) {
  const { selectedCheckboxesState }: string | any = useContext(appContext);

  // const handleChange = (event?: any) => {
  //   if (event) {
  //     if (event.target.checked) {
  //       setState((prev: any) => [...prev, type]);
  //     } else {
  //       setState((prev: any) => [...prev]);
  //     }

  //     // setSelectedCheckboxes((prev: any) => [...prev, type]);
  //   } else {
  //     setState((prev: any) =>
  //       prev.filter((checkbox: any) => checkbox !== type)
  //     );
  //     // setSelectedCheckboxes((prev: any) =>
  //     // prev.filter((checkbox: any) => checkbox !== type)
  //     // );
  //   }
  // };
  const isChecked = selectedCheckboxesState.includes(type);

  const handleChange = (
    event?: React.ChangeEvent<HTMLInputElement>,
    type?: string
  ) => {
    if (event?.target.checked) {
      // Se o checkbox está marcado, adiciona ao estado
      setState((prev: any) => [...prev, type]);
    } else {
      // Se o checkbox está desmarcado, remove do estado
      setState((prev: any) =>
        prev.filter((checkbox: any) => checkbox !== type)
      );
    }
    console.log(event);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={type}
        value={type}
        onChange={(ev) => handleChange(ev, type)}
        className="w-4 h-4 accent-black"
        checked={isChecked}
      />
      {/* <Checkbox id={type} value={type} onChange={handleChange} /> */}

      <label
        htmlFor={type}
        className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {type}
      </label>
    </div>
  );
}
