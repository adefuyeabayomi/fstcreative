"use client";

import React from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  loading?: boolean;
  fullWidth?: boolean;
}

const base =
  "inline-flex h-11 items-center justify-center gap-2 rounded-control px-[18px] text-sm font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white shadow-card hover:bg-brand-600",
  secondary: "bg-brand-50 text-brand hover:bg-brand/15",
  outline:
    "border border-black/[0.06] bg-surface-primary text-ink shadow-card hover:border-brand/40 hover:shadow-floating",
  ghost: "text-ink-muted hover:bg-surface-secondary hover:text-ink",
  danger: "bg-alert text-white shadow-card hover:bg-red-600",
};

export function Button({
  variant = "primary",
  loading = false,
  fullWidth = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={cn(base, variants[variant], fullWidth && "w-full", className)}
    >
      {loading && (
        <svg
          className="h-4 w-4 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
          <path
            d="M22 12a10 10 0 0 1-10 10"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
