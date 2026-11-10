import React from "react";
import { cn } from "@/lib/cn";

export function DashboardPage({
  title,
  description,
  actions,
  children,
}: {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-4 py-8 font-sans text-ink sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-[30px]">
            {title}
          </h1>
          {description && (
            <p className="mt-1 max-w-2xl text-[15px] leading-6 text-ink-muted">
              {description}
            </p>
          )}
        </div>
        {actions}
      </div>
      {children}
    </div>
  );
}

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-card border border-white/60 bg-surface-primary p-6 shadow-card",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-subdued">
      {children}
    </h2>
  );
}

export function Badge({
  tone = "neutral",
  children,
}: {
  tone?: "neutral" | "brand" | "success" | "warning" | "danger";
  children: React.ReactNode;
}) {
  const tones = {
    neutral: "bg-surface-secondary text-ink-muted",
    brand: "bg-brand-50 text-brand",
    success: "bg-success/10 text-green-700",
    warning: "bg-warning/10 text-amber-700",
    danger: "bg-alert/10 text-alert",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-full px-2.5 text-[12px] font-medium",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}
