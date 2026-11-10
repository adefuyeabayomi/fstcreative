"use client";

import React from "react";
import { cn } from "@/lib/cn";

type Tone = "error" | "info" | "success";

const tones: Record<Tone, string> = {
  error: "border-red-200 bg-red-50 text-red-600",
  info: "border-brand/20 bg-brand-50 text-brand-600",
  success: "border-brand/20 bg-brand-50 text-brand-700",
};

export function AuthNotice({
  tone = "info",
  children,
  className,
}: {
  tone?: Tone;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      role="alert"
      className={cn("mb-5 rounded-xl border px-4 py-3 text-sm", tones[tone], className)}
    >
      {children}
    </div>
  );
}
