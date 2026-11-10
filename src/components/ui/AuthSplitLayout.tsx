"use client";

import React, { useEffect, useState } from "react";

export const AUTH_BACKGROUND_IMAGE =
  "https://res.cloudinary.com/mixam/image/upload/v1794310451/ahhl7v80veyfzkghmu60.png";

const messages = [
  {
    title: "We build result-driven digital experiences.",
    description:
      "Websites, apps and brand systems designed to move your business forward.",
  },
  {
    title: "Design that earns attention.",
    description:
      "Strategic branding, graphics and UI/UX that make your business impossible to ignore.",
  },
  {
    title: "Learn the craft. Build the portfolio.",
    description:
      "Join our design and coding bootcamps and work on real projects with expert mentorship.",
  },
  {
    title: "Great ideas, engineered end to end.",
    description:
      "From discovery and design to development and launch, one team takes you all the way.",
  },
];

export function AuthSplitLayout({
  title,
  subtitle,
  eyebrow,
  children,
  footer,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      window.setTimeout(() => {
        setMessageIndex((current) => (current + 1) % messages.length);
        setIsVisible(true);
      }, 500);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const currentMessage = messages[messageIndex];

  return (
    <main className="min-h-[calc(100vh-68px)] bg-slate-50 lg:p-5">
      <div className="mx-auto flex w-full overflow-hidden bg-white lg:min-h-[calc(100vh-108px)] lg:max-w-[1500px] lg:rounded-[28px] lg:shadow-sm">
        <section className="flex w-full items-center justify-center px-6 py-10 sm:px-10 lg:w-1/2 lg:px-16 xl:px-24">
          <div className="w-full max-w-[440px]">
            {eyebrow && <div className="mb-5">{eyebrow}</div>}

            <div className="mb-8">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-2 text-sm leading-6 text-slate-500">{subtitle}</p>
              )}
            </div>

            {children}

            {footer && (
              <p className="mt-8 text-center text-sm text-slate-500">{footer}</p>
            )}
          </div>
        </section>

        <section className="relative hidden w-1/2 overflow-hidden lg:block">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${AUTH_BACKGROUND_IMAGE}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

          <div className="absolute left-10 top-10">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-brand-tertiary shadow-[0_0_12px_rgba(0,111,255,0.8)]" />
              <span className="text-xs font-medium uppercase tracking-wide text-brand drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                Art. Systems. Brilliance.
              </span>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 xl:p-12">
            <div
              className={`max-w-[560px] transition-all duration-500 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              }`}
            >
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-brand-tertiary">
                A better digital future starts here
              </p>
              <h2 className="max-w-[500px] text-4xl font-semibold leading-[1.05] tracking-tight text-white xl:text-5xl">
                {currentMessage.title}
              </h2>
              <p className="mt-5 max-w-[500px] text-sm leading-6 text-white/65 sm:text-base">
                {currentMessage.description}
              </p>
            </div>

            <div className="mt-8 flex gap-1.5">
              {messages.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === messageIndex
                      ? "w-8 bg-brand-tertiary"
                      : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
