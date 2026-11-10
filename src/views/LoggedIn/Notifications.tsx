"use client";

import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCalendarCheck,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import { useDashboardPage } from "@/hooks/useDashboardPage";
import { Button } from "@/components/ui/Button";
import { Card, DashboardPage } from "@/components/ui/DashboardPage";
import { cn } from "@/lib/cn";

interface Notification {
  id: string;
  title: string;
  body: string;
  time: string;
  icon: typeof faBell;
  unread: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: "n1",
    title: "Invoice INV-2041 is ready",
    body: "Your branding identity plan invoice has been generated. Pay before 30 Nov to keep the project on schedule.",
    time: "2 hours ago",
    icon: faReceipt,
    unread: true,
  },
  {
    id: "n2",
    title: "Class reminder: Figma Essentials",
    body: "Your next live session starts tomorrow at 6:00 PM WAT. Materials are available in the Design School.",
    time: "Yesterday",
    icon: faCalendarCheck,
    unread: true,
  },
  {
    id: "n3",
    title: "Project milestone approved",
    body: "The homepage wireframe milestone for the Creative Graphics project was approved by the team.",
    time: "3 days ago",
    icon: faBell,
    unread: true,
  },
  {
    id: "n4",
    title: "Welcome to Five & Six",
    body: "Your account is active. Explore your dashboard to track projects and classes.",
    time: "Last week",
    icon: faBell,
    unread: false,
  },
];

export default function Notifications(): React.JSX.Element {
  useDashboardPage();
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState<"all" | "unread">("all");

  const unreadCount = useMemo(
    () => notifications.filter((notification) => notification.unread).length,
    [notifications],
  );

  const visible = useMemo(
    () =>
      filter === "unread"
        ? notifications.filter((notification) => notification.unread)
        : notifications,
    [filter, notifications],
  );

  function markAllRead() {
    setNotifications((current) =>
      current.map((notification) => ({ ...notification, unread: false })),
    );
  }

  function toggleRead(id: string) {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, unread: !notification.unread }
          : notification,
      ),
    );
  }

  return (
    <DashboardPage
      title="Notifications"
      description="Updates about your projects, invoices and design school."
      actions={
        <Button variant="outline" onClick={markAllRead} disabled={unreadCount === 0}>
          Mark all as read
        </Button>
      }
    >
      <div className="mb-4 flex items-center gap-2">
        {(["all", "unread"] as const).map((value) => (
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
            {value === "all" ? "All" : `Unread${unreadCount ? ` (${unreadCount})` : ""}`}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <Card className="py-14 text-center">
          <p className="text-[15px] font-medium text-ink">You're all caught up</p>
          <p className="mt-1 text-[13px] text-ink-muted">
            New project and class updates will appear here.
          </p>
        </Card>
      ) : (
        <div className="space-y-3">
          {visible.map((notification) => (
            <Card
              key={notification.id}
              className={cn(
                "flex items-start gap-4 transition-colors",
                notification.unread && "border-brand/20 bg-brand-50/40",
              )}
            >
              <span
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-control",
                  notification.unread
                    ? "bg-brand text-white"
                    : "bg-surface-secondary text-ink-muted",
                )}
              >
                <FontAwesomeIcon icon={notification.icon} className="h-4 w-4" />
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-[15px] font-semibold text-ink">
                    {notification.title}
                  </h3>
                  {notification.unread && (
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  )}
                </div>
                <p className="mt-1 text-[13px] leading-5 text-ink-muted">
                  {notification.body}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-ink-subdued">
                    {notification.time}
                  </span>
                  <button
                    type="button"
                    onClick={() => toggleRead(notification.id)}
                    className="text-[12px] font-medium text-brand transition-colors hover:text-brand-600"
                  >
                    {notification.unread ? "Mark as read" : "Mark as unread"}
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </DashboardPage>
  );
}
