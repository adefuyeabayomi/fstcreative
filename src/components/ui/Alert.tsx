import React from "react";
import { cn } from "@/lib/cn";

type Tone = "error" | "success" | "info";

const tones: Record<Tone, string> = {
  error: "border-alert/20 bg-alert/[0.08] text-alert",
  success: "border-success/20 bg-success/[0.08] text-green-700",
  info: "border-info/20 bg-info/[0.08] text-info",
};

export function Alert({
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
      className={cn(
        "flex items-start gap-2.5 rounded-control border px-3.5 py-3 text-[13px] leading-5",
        tones[tone],
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
          tone === "error" && "bg-alert",
          tone === "success" && "bg-success",
          tone === "info" && "bg-info",
        )}
      />
      <span>{children}</span>
    </div>
  );
}
