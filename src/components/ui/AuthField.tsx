"use client";

import React, { useId, useState } from "react";
import { cn } from "@/lib/cn";
import { EyeIcon, EyeOffIcon } from "./icons";

interface AuthFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  maxLength?: number;
  icon?: React.ReactNode;
  error?: string;
  hint?: string;
  required?: boolean;
  id?: string;
  name?: string;
}

export function AuthField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
  inputMode,
  maxLength,
  icon,
  error,
  hint,
  required,
  id,
  name,
}: AuthFieldProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const [reveal, setReveal] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && reveal ? "text" : type;

  return (
    <div>
      <label
        htmlFor={fieldId}
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>

      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </span>
        )}

        <input
          id={fieldId}
          name={name}
          type={inputType}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          maxLength={maxLength}
          required={required}
          aria-invalid={Boolean(error)}
          className={cn(
            "h-12 w-full rounded-xl border bg-white pl-11 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:ring-4",
            isPassword ? "pr-12" : "pr-4",
            error
              ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
              : "border-slate-200 focus:border-brand focus:ring-brand/10",
          )}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setReveal((current) => !current)}
            aria-label={reveal ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            {reveal ? (
              <EyeOffIcon className="h-[18px] w-[18px]" />
            ) : (
              <EyeIcon className="h-[18px] w-[18px]" />
            )}
          </button>
        )}
      </div>

      {error ? (
        <p className="mt-1.5 text-xs font-medium text-red-500">{error}</p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-slate-400">{hint}</p>
      ) : null}
    </div>
  );
}
