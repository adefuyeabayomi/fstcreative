"use client";

import React from "react";
import { cn } from "@/lib/cn";

type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "nav"
  | "royal"
  | "royalOutline"
;

type Size = "sm" | "md" | "lg";
type Shape = "default" | "pill" | "xl";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  shape?: Shape;
  loading?: boolean;
  fullWidth?: boolean;
}

const base =
  "inline-flex items-center font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-[18px] text-sm",
  lg: "h-12 px-9 text-sm",
};

const shapes: Record<Shape, string> = {
  default: "rounded-control",
  pill: "rounded-full",
  xl: "rounded-xl",
};

const variants: Record<Variant, string> = {
  primary:
    "justify-center gap-2 bg-brand text-white shadow-card hover:bg-brand-600",
  secondary: "justify-center gap-2 bg-brand-50 text-brand hover:bg-brand/15",
  outline:
    "justify-center gap-2 border border-black/[0.06] bg-surface-primary text-ink shadow-card hover:border-brand/40 hover:shadow-floating",
  ghost:
    "justify-center gap-2 text-ink-muted hover:bg-surface-secondary hover:text-ink",
  danger:
    "justify-center gap-2 bg-alert text-white shadow-card hover:bg-red-600",
  /** Left-aligned row button, e.g. sidebar actions. */
  nav: "h-11 justify-start gap-3 px-3 text-sm text-ink-muted hover:bg-surface-secondary hover:text-ink",
  /** Marketing brand (matches the site header). */
  royal:
    "justify-center gap-2 bg-royal text-white shadow-card hover:bg-royal-dark",
  royalOutline:
    "justify-center gap-2 border border-royal/20 bg-white text-royal shadow-card hover:border-royal/40 hover:shadow-floating",
};

export function Button({
  variant = "primary",
  size = "md",
  shape = "default",
  loading = false,
  fullWidth = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const sizeClass = variant === "nav" ? "" : sizes[size];

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={cn(
        base,
        sizeClass,
        shapes[shape],
        variants[variant],
        fullWidth && "w-full",
        className,
      )}
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
