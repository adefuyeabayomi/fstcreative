"use client";

import React, { createContext, useState, useContext, useCallback, useMemo } from "react";

interface DashContextType {
  isDash: boolean;
  updateDashStatus: (val: boolean) => void;
}

const defaultContextValue: DashContextType = {
  isDash: false,
  updateDashStatus: () => {},
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
  children: React.ReactNode;
}): React.JSX.Element {
  const [isDash, setIsDash] = useState(false);

  const updateDashStatus = useCallback((val: boolean) => {
    setIsDash(val);
  }, []);

  const value = useMemo(
    () => ({ isDash, updateDashStatus }),
    [isDash, updateDashStatus],
  );

  return <DashContext.Provider value={value}>{children}</DashContext.Provider>;
}
