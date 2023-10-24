"use client";
import { ReactNode, createContext, useState } from "react";

export const appContext = createContext({});

type IAppContextProvider = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: IAppContextProvider) => {
  const [sumLC, setSumLC] = useState(20);

  return (
    <appContext.Provider value={{ sumLC, setSumLC }}>
      {children}
    </appContext.Provider>
  );
};
