"use client";

import Link from "next/link";
import { useDashboardPage } from "@/hooks/useDashboardPage";
import { Badge, Card, DashboardPage } from "@/components/ui/DashboardPage";

const modules = [
  {
    title: "Design Foundations",
    meta: "Module 01 · 6 lessons",
    progress: 100,
    status: "Completed",
  },
  {
    title: "Colour & Typography",
    meta: "Module 02 · 5 lessons",
    progress: 100,
    status: "Completed",
  },
  {
    title: "Figma Essentials",
    meta: "Module 03 · 8 lessons",
    progress: 65,
    status: "In progress",
  },
  {
    title: "UI Systems & Components",
    meta: "Module 04 · 7 lessons",
    progress: 30,
    status: "In progress",
  },
  {
    title: "Prototyping & Motion",
    meta: "Module 05 · 6 lessons",
    progress: 0,
    status: "Not started",
  },
  {
    title: "Portfolio Studio",
    meta: "Module 06 · 4 lessons",
    progress: 0,
    status: "Not started",
  },
];

const toneFor = (status: string) =>
  status === "Completed" ? "success" : status === "In progress" ? "brand" : "neutral";

export default function DesignSchoolHome(): React.JSX.Element {
  useDashboardPage();

  return (
    <DashboardPage
      title="Design school"
      description="Your class schedule, learning materials and progress across the programme."
      actions={
        <Link
          href="/bootcamps"
          className="inline-flex h-11 items-center justify-center rounded-control bg-brand px-[18px] text-sm font-medium text-white no-underline shadow-card transition-colors hover:bg-brand-600"
        >
          Browse bootcamps
        </Link>
      }
    >
      <Card className="mb-4 border-transparent bg-gradient-to-br from-brand to-brand-secondary text-white shadow-floating">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/70">
              Current cohort
            </p>
            <h2 className="mt-1.5 text-[20px] font-semibold tracking-[-0.01em]">
              Product Design Bootcamp — Cohort 04
            </h2>
            <p className="mt-1 text-[13px] text-white/75">
              Live sessions every Tuesday &amp; Thursday · 6:00 PM WAT
            </p>
          </div>
          <span className="inline-flex h-7 items-center rounded-full bg-white/15 px-3 text-[12px] font-medium">
            Week 5 of 12
          </span>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <Card key={module.title} className="flex flex-col">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-[16px] font-semibold text-ink">{module.title}</h3>
                <p className="mt-1 text-[12px] text-ink-subdued">{module.meta}</p>
              </div>
              <Badge tone={toneFor(module.status) as "success" | "brand" | "neutral"}>
                {module.status}
              </Badge>
            </div>

            <div className="mt-5">
              <div className="flex items-center justify-between text-[12px] text-ink-muted">
                <span>Progress</span>
                <span className="font-medium text-ink">{module.progress}%</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-secondary">
                <div
                  className="h-full rounded-full bg-brand transition-all"
                  style={{ width: `${module.progress}%` }}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </DashboardPage>
  );
}
