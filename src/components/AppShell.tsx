"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { SideBar } from "@/components/sidebar";
import { useDash } from "@/contexts/DashContext";
import { useAuth } from "@/contexts/AuthContext";

const AUTH_ROUTES = [
  "/login",
  "/signup",
  "/forgot-password",
  "/reset-password",
  "/auth-guard",
];

/**
 * Shared page chrome. Auth screens are full-bleed on the canvas, dashboard
 * screens get the sidebar shell, and marketing pages keep the existing
 * Bootstrap/App.css layout until they are migrated.
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  const { isDash, updateDashStatus } = useDash();
  const { isReady, isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname() ?? "";

  const isAuthRoute = AUTH_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
  const isDashboard = isDash || pathname.startsWith("/dashboard");
  const isProtectedRoute = pathname.startsWith("/dashboard") || pathname.startsWith("/chat");

  // Signing out from a dashboard lands on /login; make sure the header stops
  // showing the dashboard menu there.
  useEffect(() => {
    if (isAuthRoute) updateDashStatus(false);
  }, [isAuthRoute, updateDashStatus]);

  useEffect(() => {
    if (isProtectedRoute && isReady && !isAuthenticated) {
      const callback = encodeURIComponent(pathname || "/dashboard");
      router.replace(`/login?callbackUrl=${callback}`);
    }
  }, [isAuthenticated, isProtectedRoute, isReady, pathname, router]);

  if (isProtectedRoute && (!isReady || !isAuthenticated)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface-canvas">
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-royal/20 border-t-royal" />
      </div>
    );
  }

  if (isDashboard) {
    return (
      <>
        <Header />
        <div className="flex min-h-screen bg-surface-canvas pt-[68px] font-sans text-ink">
          <SideBar />
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </>
    );
  }

  if (isAuthRoute) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-slate-50 pt-[68px] font-sans text-ink">
          {children}
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="h-6" />
      <main>{children}</main>
      <Footer />
    </>
  );
}
