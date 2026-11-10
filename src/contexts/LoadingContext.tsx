"use client";

import React, { createContext, useState, useContext } from "react";

interface LoadingContextType {
  setLoading: (bool: boolean) => void;
  setLoadingText: (text: string) => void;
}

const defaultLoadingContext: LoadingContextType = {
  setLoading: () => {},
  setLoadingText: () => {},
};

const LoadingContext = createContext<LoadingContextType>(defaultLoadingContext);

export const useLoading = () => useContext(LoadingContext);

export const LoadingContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [loading, setLoadingState] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading...");

  const setLoading = (bool: boolean) => {
    setLoadingState(bool);
    if (bool) {
      setTimeout(() => {
        setLoadingState(false);
        setLoadingText("");
      }, 20000);
    }
  };

  return (
    <LoadingContext.Provider value={{ setLoading, setLoadingText }}>
      {loading && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/30 backdrop-blur-sm"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center gap-3 rounded-container border border-white/70 bg-surface-primary px-5 py-4 shadow-modal">
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-brand/25 border-t-brand" />
            <p className="text-[14px] font-medium text-ink">
              {loadingText || "Loading..."}
            </p>
          </div>
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
};
