"use client";
import { ReactNode, createContext, useState } from "react";

export const appContext = createContext({});

type IAppContextProvider = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: IAppContextProvider) => {
  const [sumLC, setSumLC] = useState(0);
  const [StateSelected, setStateSelected] = useState("");
  const [sumTotalCapacityState, setSumTotalCapacityState] = useState(0);
  const [sumDefaut, setSumDefaut] = useState(0);

  return (
    <appContext.Provider
      value={{
        sumLC,
        setSumLC,
        StateSelected,
        setStateSelected,
        sumTotalCapacityState,
        setSumTotalCapacityState,
        sumDefaut,
        setSumDefaut,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
