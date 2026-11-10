"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useDash } from "@/contexts/DashContext";

/**
 * Shared bootstrapping for signed-in dashboard screens: redirects guests,
 * flags the layout into dashboard mode and resets scroll on mount.
 */
export function useDashboardPage() {
  const { isReady, isAuthenticated } = useAuth();
  const { updateDashStatus } = useDash();
  const router = useRouter();

  useEffect(() => {
    if (isReady && !isAuthenticated) {
      router.push("/auth-guard");
    }
    updateDashStatus(true);
    window.scrollTo(0, 0);
  }, [isReady, isAuthenticated, router, updateDashStatus]);
}
