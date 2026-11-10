"use client";

import React from "react";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { SideBar } from "@/components/sidebar";
import { useDash } from "@/contexts/DashContext";

/**
 * Shared page chrome that used to live in the React Router `Navigation`
 * component. The App Router keeps this in the root layout so it persists
 * between navigations.
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  const { isDash } = useDash();

  return (
    <>
      <Header />
      <div className="py-4" />
      <div className={isDash ? "layout" : "layout-one"}>
        {isDash ? (
          <div className="sidebar-main">
            <SideBar />
          </div>
        ) : null}

        <div className="main-content">
          <section className="layout-container">{children}</section>
        </div>
      </div>
      <div className="py-4" />
      <Footer />
    </>
  );
}
