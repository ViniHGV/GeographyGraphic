"use client";
import { ReactNode, createContext, useState } from "react";

export const appContext = createContext({});

type IAppContextProvider = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: IAppContextProvider) => {
  const [StateSelected, setStateSelected] = useState("");
  const [sumLC, setSumLC] = useState(0);
  const [sumTotalCapacityState, setSumTotalCapacityState] = useState(0);
  const [sumDefaut, setSumDefaut] = useState(0);
  const [REPlusLC, setREPlusLC] = useState(0);

  return (
    <appContext.Provider
      value={{
        StateSelected,
        setStateSelected,
        sumLC,
        setSumLC,
        sumTotalCapacityState,
        setSumTotalCapacityState,
        sumDefaut,
        setSumDefaut,
        REPlusLC,
        setREPlusLC,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
