"use client";

import React, { useId, useState } from "react";
import { cn } from "@/lib/cn";

interface FieldProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  maxLength?: number;
  error?: string;
  hint?: string;
  icon?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
  onEnter?: () => void;
}

export function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
  inputMode,
  maxLength,
  error,
  hint,
  icon,
  required,
  disabled,
  id,
  name,
  onEnter,
}: FieldProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const [reveal, setReveal] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && reveal ? "text" : type;

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

      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-subdued">
            {icon}
          </span>
        )}

        <input
          id={fieldId}
          name={name}
          type={inputType}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && onEnter) {
              event.preventDefault();
              onEnter();
            }
          }}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          maxLength={maxLength}
          required={required}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          className={cn(
            "h-11 w-full rounded-control border bg-surface-primary px-3.5 text-[15px] text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] outline-none transition-colors placeholder:text-ink-subdued focus:ring-2 focus:ring-brand/20 disabled:opacity-50",
            Boolean(icon) && "pl-10",
            isPassword && "pr-11",
            error
              ? "border-alert/60 focus:border-alert"
              : "border-black/[0.06] focus:border-brand",
          )}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setReveal((v) => !v)}
            aria-label={reveal ? "Hide password" : "Show password"}
            className="absolute right-2.5 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-ink-subdued transition-colors hover:bg-surface-secondary hover:text-ink-muted"
          >
            {reveal ? (
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M3 3l18 18M10.6 10.6a2 2 0 002.8 2.8M9.9 5.2A9.7 9.7 0 0112 5c5 0 8.5 4.4 9.5 6.1a1.8 1.8 0 010 1.8c-.4.7-1.3 1.9-2.6 3M6.3 6.3C4.5 7.6 3.2 9.3 2.5 10.9a1.8 1.8 0 000 1.8C3.6 14.6 7 19 12 19c1.3 0 2.5-.3 3.6-.8"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M2.5 10.9a1.8 1.8 0 000 1.8C3.6 14.6 7 19 12 19s8.4-4.4 9.5-6.1a1.8 1.8 0 000-1.8C20.4 9.4 17 5 12 5S3.6 9.4 2.5 10.9z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
              </svg>
            )}
          </button>
        )}
      </div>

      {error ? (
        <p className="mt-1.5 text-[12px] font-medium text-alert">{error}</p>
      ) : hint ? (
        <p className="mt-1.5 text-[12px] text-ink-subdued">{hint}</p>
      ) : null}
    </div>
  );
}
