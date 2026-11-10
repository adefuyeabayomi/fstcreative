"use client";

import React from "react";
import logo from "@/assets/images/Logo Main.svg";

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <main className="relative flex min-h-[calc(100vh-68px)] items-center justify-center overflow-hidden bg-surface-canvas px-4 py-10 font-sans text-ink sm:px-6">
      {/* Aurora accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-brand/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-brand-secondary/15 blur-3xl"
      />

      <div className="relative w-full max-w-[420px]">
        <div className="rounded-container border border-white/70 bg-white/90 p-6 shadow-card backdrop-blur-xl sm:p-8">
          <div className="mb-7 text-center">
            <img
              src={logo.src}
              alt="Five and Six Technologies"
              className="mx-auto mb-5 h-7 w-auto"
            />
            <h1 className="text-[26px] font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-[28px]">
              {title}
            </h1>
            {subtitle && (
              <p className="mx-auto mt-2 max-w-sm text-[15px] leading-6 text-ink-muted">
                {subtitle}
              </p>
            )}
          </div>

          {children}
        </div>

        {footer && (
          <div className="mt-6 text-center text-[13px] leading-5 text-ink-muted">
            {footer}
          </div>
        )}
      </div>
    </main>
  );
}
