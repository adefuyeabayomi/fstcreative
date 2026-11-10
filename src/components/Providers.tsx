"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import { AuthProvider } from "@/contexts/AuthContext";
import { SocketProvider } from "@/contexts/SocketContext";
import { LoadingContextProvider } from "@/contexts/LoadingContext";
import { DashProvider } from "@/contexts/DashContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <SocketProvider>
          <LoadingContextProvider>
            <DashProvider>{children}</DashProvider>
          </LoadingContextProvider>
        </SocketProvider>
      </AuthProvider>
    </Provider>
  );
}
