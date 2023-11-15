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
      className={`flex flex-col gap-2 w-full ${
        isCheckbox && "px-4 border-b border-gray-300 pb-3"
      }`}
    >
      <p className={`w-full font-semibold text-sm ${!isCheckbox && "pl-4"}`}>
        {title}
      </p>
      <div
        className={`flex gap-2 w-full items-center ${
          isCheckbox && " justify-between"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
