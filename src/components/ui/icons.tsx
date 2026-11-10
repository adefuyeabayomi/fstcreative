import React from "react";

interface IconProps {
  className?: string;
}

const base = "h-[18px] w-[18px]";
const props = (className?: string) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  className: className ?? base,
  "aria-hidden": true as const,
});

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.75" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LockIcon({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <rect x="4" y="10" width="16" height="10" rx="3" stroke="currentColor" strokeWidth="1.75" />
      <path d="M8 10V8a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <path d="M12 3 5 6v5c0 4.4 2.9 8.2 7 10 4.1-1.8 7-5.6 7-10V6l-7-3z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M5 20c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <path d="m5 12 4.5 4.5L19 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
