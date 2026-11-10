"use client";

import React, { useId } from "react";
import { cn } from "@/lib/cn";

interface TextareaProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  error?: string;
  hint?: string;
  required?: boolean;
  id?: string;
}

export function Textarea({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
  error,
  hint,
  required,
  id,
}: TextareaProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;

  return (
    <div>
      {label && (
        <label
          htmlFor={fieldId}
          className="mb-1.5 block text-[13px] font-medium text-ink-muted"
        >
          {label}
          {required && <span className="ml-0.5 text-alert">*</span>}
        </label>
      )}
      <textarea
        id={fieldId}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={rows}
        required={required}
        aria-invalid={Boolean(error)}
        className={cn(
          "w-full resize-y rounded-control border bg-surface-primary px-3.5 py-3 text-[15px] leading-6 text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] outline-none transition-colors placeholder:text-ink-subdued focus:ring-2 focus:ring-brand/20",
          error
            ? "border-alert/60 focus:border-alert"
            : "border-black/[0.06] focus:border-brand",
        )}
      />
      {error ? (
        <p className="mt-1.5 text-[12px] font-medium text-alert">{error}</p>
      ) : hint ? (
        <p className="mt-1.5 text-[12px] text-ink-subdued">{hint}</p>
      ) : null}
    </div>
  );
}
