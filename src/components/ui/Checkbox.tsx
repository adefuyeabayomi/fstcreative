"use client";

import React from "react";
import { cn } from "@/lib/cn";

interface CheckboxProps {
  value?: string;
  checked?: boolean;
  onCheckedChange?: (value: string, checked: boolean) => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

/**
 * Tailwind checkbox used instead of antd's. The native input stays in the DOM
 * (screen-reader friendly) and is visually replaced by the styled box.
 */
export function Checkbox({
  value = "",
  checked,
  onCheckedChange,
  children,
  className,
  disabled,
}: CheckboxProps) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-start gap-2.5 text-[14px] leading-5 text-ink",
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
    >
      <input
        type="checkbox"
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={(event) => onCheckedChange?.(value, event.target.checked)}
        className="peer sr-only"
      />
      <span
        aria-hidden="true"
        className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] border border-black/15 bg-surface-primary text-transparent transition-colors peer-checked:border-brand peer-checked:bg-brand peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-brand/30 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-surface-primary"
      >
        <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden="true">
          <path
            d="m3.5 8.5 2.5 2.5 6.5-6.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>{children}</span>
    </label>
  );
}
