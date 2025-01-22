import React, { createContext, useState, useContext } from "react";

interface DashContextType {
  isDash: boolean;
  updateDashStatus: (val: boolean) => void;
}

const dummyUpdate = (val: boolean): void => {};

const defaultContextValue: DashContextType = {
  isDash: false,
  updateDashStatus: dummyUpdate,
};

const DashContext = createContext<DashContextType>(defaultContextValue);

export const useDash = () => {
  const context = useContext(DashContext);
  if (!context) {
    throw new Error("useDash must be used within a DashProvider");
  }
  return context;
};

export function DashProvider({
  children,
}: {
  children: React.JSX.Element;
}): React.JSX.Element {
  let [isDash, setIsDash] = useState(false);
  function updateDashStatus(val: boolean) {
    setIsDash(val);
  }
  return (
    <DashContext.Provider value={{ isDash, updateDashStatus }}>
      {children}
    </DashContext.Provider>
  );
}
