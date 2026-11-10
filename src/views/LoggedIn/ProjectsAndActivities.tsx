"use client";

import { useState } from "react";
import Link from "next/link";
import { useDashboardPage } from "@/hooks/useDashboardPage";
import { Badge, Card, DashboardPage } from "@/components/ui/DashboardPage";
import { cn } from "@/lib/cn";

type Status = "In progress" | "Completed" | "On hold";

interface Project {
  id: string;
  name: string;
  summary: string;
  status: Status;
  progress: number;
  nextMilestone: string;
  budget: string;
}

const projects: Project[] = [
  {
    id: "p1",
    name: "Brand identity refresh",
    summary:
      "Logo system, colour palette, typography and a reusable visual identity kit.",
    status: "In progress",
    progress: 65,
    nextMilestone: "Brand guidelines review · 18 Nov",
    budget: "₦480,000",
  },
  {
    id: "p2",
    name: "Corporate website",
    summary:
      "Marketing site with CMS-driven blog, careers and quotation request flows.",
    status: "In progress",
    progress: 35,
    nextMilestone: "Homepage design sign-off · 22 Nov",
    budget: "₦1,250,000",
  },
  {
    id: "p3",
    name: "Product design bootcamp",
    summary: "Live cohort covering UI/UX, visual design and portfolio building.",
    status: "Completed",
    progress: 100,
    nextMilestone: "Certificate issued · 02 Oct",
    budget: "₦150,000",
  },
];

const toneFor = (status: Status) =>
  status === "Completed" ? "success" : status === "On hold" ? "warning" : "brand";

export default function ProjectsAndActivities(): React.JSX.Element {
  useDashboardPage();
  const [filter, setFilter] = useState<"all" | Status>("all");

  const visible =
    filter === "all" ? projects : projects.filter((project) => project.status === filter);

  return (
    <DashboardPage
      title="Projects & activities"
      description="Track every engagement, milestone and payment in one place."
      actions={
        <Link
          href="/quotation-request"
          className="inline-flex h-11 items-center justify-center rounded-control bg-brand px-[18px] text-sm font-medium text-white no-underline shadow-card transition-colors hover:bg-brand-600"
        >
          Request a quote
        </Link>
      }
    >
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {(["all", "In progress", "Completed", "On hold"] as const).map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setFilter(value)}
            className={cn(
              "inline-flex h-9 items-center rounded-full px-4 text-[13px] font-medium transition-colors",
              filter === value
                ? "bg-brand text-white shadow-card"
                : "bg-surface-primary text-ink-muted shadow-card hover:text-ink",
            )}
          >
            {value === "all" ? "All projects" : value}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {visible.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-[17px] font-semibold text-ink">{project.name}</h3>
                <p className="mt-1 text-[13px] leading-5 text-ink-muted">
                  {project.summary}
                </p>
              </div>
              <Badge tone={toneFor(project.status) as "success" | "warning" | "brand"}>
                {project.status}
              </Badge>
            </div>

            <div className="mt-5">
              <div className="flex items-center justify-between text-[12px] text-ink-muted">
                <span>Progress</span>
                <span className="font-medium text-ink">{project.progress}%</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-secondary">
                <div
                  className={cn(
                    "h-full rounded-full transition-all",
                    project.status === "Completed" ? "bg-success" : "bg-brand",
                  )}
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-black/[0.06] pt-4">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-ink-subdued">
                  Next milestone
                </p>
                <p className="mt-0.5 text-[13px] font-medium text-ink">
                  {project.nextMilestone}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-ink-subdued">
                  Contract value
                </p>
                <p className="mt-0.5 text-[13px] font-semibold text-ink">
                  {project.budget}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </DashboardPage>
  );
}
