"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDash } from "../../contexts/DashContext";
import { Button } from "@/components/ui/Button";
import { LockIcon } from "@/components/ui/icons";

export default function AuthGuard(): React.JSX.Element {
  const router = useRouter();
  const { updateDashStatus } = useDash();

  useEffect(() => {
    updateDashStatus(false);
    window.scrollTo(0, 0);
  }, [updateDashStatus]);

  return (
    <main className="flex min-h-[calc(100vh-68px)] items-center justify-center bg-surface-canvas px-4">
      <div className="w-full max-w-md rounded-container border border-white/70 bg-white/90 p-8 text-center shadow-card backdrop-blur">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand">
          <LockIcon className="h-6 w-6" />
        </span>
        <h1 className="mt-5 text-2xl font-semibold tracking-tight text-ink">
          You are not logged in
        </h1>
        <p className="mt-2 text-sm leading-6 text-ink-muted">
          Please sign in to access your dashboard and account information.
        </p>
        <Button
          type="button"
          variant="primary"
          size="lg"
          fullWidth
          className="mt-6"
          onClick={() => router.push("/login")}
        >
          Login
        </Button>
      </div>
    </main>
  );
}
