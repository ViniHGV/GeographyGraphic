"use client";
import React from "react";
import { IContainerOptions } from "../../types/types";

export const ContainerOptions = ({
  title,
  children,
  isCheckbox,
}: IContainerOptions) => {
  return (
    <div
      className={`flex flex-col gap-3 w-full
       ${isCheckbox && "px-4 pb-3"}`}
    >
      {isCheckbox && (
        <p className={`w-full font-semibold text-sm ${!isCheckbox && "pl-4"}`}>
          {title}
        </p>
      )}
      <div
        className={`flex flex-wrap gap-2 w-full ${
          isCheckbox && "grid grid-cols-4 align-items-center"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
