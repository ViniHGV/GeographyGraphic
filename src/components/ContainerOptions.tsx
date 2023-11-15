import React from "react";
import { IContainerOptions } from "../../types/types";

export const ContainerOptions = ({
  title,
  children,
  isCheckbox,
}: IContainerOptions) => {
  return (
    <div className="flex flex-col gap-3 w-full border-b border-gray-300 pb-3">
      <p className="w-full font-medium">{title}</p>
      <div className="flex gap-2 w-full items-center px-4 justify-between">
        {children}
      </div>
    </div>
  );
};
