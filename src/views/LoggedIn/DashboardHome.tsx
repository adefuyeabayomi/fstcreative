"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBell,
  faFolderOpen,
  faGear,
  faGraduationCap,
  faHeadset,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import { useDashboardPage } from "@/hooks/useDashboardPage";
import { useAuth } from "@/contexts/AuthContext";
import { Card, DashboardPage } from "@/components/ui/DashboardPage";

const sections = [
  {
    title: "Projects & Activities",
    description:
      "Track ongoing work, milestones, payments and deliverables in one place.",
    href: "/dashboard/projects-and-activities",
    icon: faFolderOpen,
  },
  {
    title: "Design School",
    description: "Access class materials, schedules and your learning progress.",
    href: "/dashboard/design-school",
    icon: faGraduationCap,
  },
  {
    title: "Notifications",
    description: "Project updates, class reminders and account activity.",
    href: "/dashboard/notifications",
    icon: faBell,
  },
  {
    title: "Transactions",
    description: "Review invoices, payment history and outstanding balances.",
    href: "/dashboard/transactions",
    icon: faReceipt,
  },
  {
    title: "Feedback & Complaints",
    description: "Send feedback or raise a support request with our team.",
    href: "/dashboard/customer-support",
    icon: faHeadset,
  },
  {
    title: "Account Settings",
    description: "Manage your profile, email address and password.",
    href: "/dashboard/account-settings",
    icon: faGear,
  },
];

export default function DashboardHome(): React.JSX.Element {
  useDashboardPage();
  const { user } = useAuth();
  const firstName = user?.firstName || "there";

  return (
    <DashboardPage
      title={`Welcome back, ${firstName}`}
      description="Here is a quick overview of your projects, classes and account activity."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="border-transparent bg-gradient-to-br from-brand to-brand-secondary text-white shadow-floating sm:col-span-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/70">
                At a glance
              </p>
              <h2 className="mt-2 max-w-md text-[22px] font-semibold leading-snug tracking-[-0.01em] sm:text-[24px]">
                Your workspace is up to date.
              </h2>
            </div>
            <span className="inline-flex h-6 items-center rounded-full bg-white/15 px-2.5 text-[12px] font-medium text-white">
              Live
            </span>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-4">
            {[
              { value: "2", label: "Active projects" },
              { value: "3", label: "Unread updates" },
              { value: "4", label: "Enrolled modules" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-card bg-white/10 p-3.5 backdrop-blur">
                <p className="text-[24px] font-semibold leading-none">{stat.value}</p>
                <p className="mt-1.5 text-[12px] leading-4 text-white/75">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {sections.map((section) => (
          <Link key={section.href} href={section.href} className="no-underline">
            <Card className="group h-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-floating">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-control bg-brand-50 text-brand">
                  <FontAwesomeIcon icon={section.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[16px] font-semibold text-ink">
                    {section.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-5 text-ink-muted">
                    {section.description}
                  </p>
                </div>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="mt-1 h-4 w-4 shrink-0 text-ink-subdued transition-all group-hover:translate-x-0.5 group-hover:text-brand"
                />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </DashboardPage>
  );
}
