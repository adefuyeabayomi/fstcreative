"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

import iconHome from "@/assets/images/d-icon-home.svg";
import iconProjects from "@/assets/images/d-icon-projects.svg";
import iconDSchool from "@/assets/images/d-icon-design-school.png";
import iconNotification from "@/assets/images/d-icon-notification.svg";
import iconTransactions from "@/assets/images/d-icon-transactions.svg";
import iconSupport from "@/assets/images/d-icon-support.svg";
import iconAccountSettings from "@/assets/images/d-icon-account.svg";
import iconLogout from "@/assets/images/d-icon-logout.svg";

const links = [
  { label: "Overview", href: "/dashboard", icon: iconHome, exact: true },
  {
    label: "Projects & Activities",
    href: "/dashboard/projects-and-activities",
    icon: iconProjects,
  },
  { label: "Design School", href: "/dashboard/design-school", icon: iconDSchool },
  { label: "Notifications", href: "/dashboard/notifications", icon: iconNotification },
  { label: "Transactions", href: "/dashboard/transactions", icon: iconTransactions },
  {
    label: "Feedback & Complaints",
    href: "/dashboard/customer-support",
    icon: iconSupport,
  },
  {
    label: "Account Settings",
    href: "/dashboard/account-settings",
    icon: iconAccountSettings,
  },
];

export function SideBar() {
  const pathname = usePathname() ?? "";
  const router = useRouter();
  const { user, logout } = useAuth();
  const [confirming, setConfirming] = useState(false);

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  const displayName =
    `${user?.firstName ?? ""} ${user?.lastName ?? ""}`.trim() || "Account";

  return (
    <>
      <aside className="sticky top-[68px] hidden h-[calc(100vh-68px)] w-[264px] shrink-0 overflow-y-auto border-r border-white/60 bg-white/80 backdrop-blur-xl [&_a]:no-underline [&_ul]:list-none md:block">
        <div className="flex h-full flex-col p-4">
          <div className="mb-3 rounded-card border border-white/60 bg-surface-primary px-3.5 py-3 shadow-card">
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-ink-subdued">
              Signed in as
            </p>
            <p className="mt-1 truncate text-sm font-semibold text-ink">
              {displayName}
            </p>
            <p className="truncate text-[12px] text-ink-subdued">{user?.email}</p>
          </div>

          <p className="px-3 pb-2 pt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-ink-subdued">
            Dashboard
          </p>

          <nav aria-label="Dashboard navigation">
            <ul className="list-none space-y-3">
              {links.map((item) => {
                const active = isActive(item.href, item.exact);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "no-underline group flex items-center gap-3 rounded-control px-3 py-2.5 text-[14px] font-medium transition-colors",
                        active
                          ? "bg-brand-50 text-brand shadow-card"
                          : "text-ink-muted hover:bg-surface-secondary hover:text-ink",
                      )}
                    >
                      <img
                        src={item.icon.src}
                        alt=""
                        className={cn(
                          "h-5 w-5 object-contain transition-opacity",
                          active ? "opacity-100" : "opacity-70 group-hover:opacity-100",
                        )}
                      />
                      <span className="truncate">{item.label}</span>
                      {active && (
                        <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-auto pt-6">
            <Button
              type="button"
              variant="nav"
              fullWidth
              onClick={() => setConfirming(true)}
              className="hover:bg-alert/[0.06] hover:text-alert"
            >
              <img src={iconLogout.src} alt="" className="h-5 w-5 object-contain opacity-70" />
              Log out
            </Button>
          </div>
        </div>
      </aside>

      {confirming && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="logout-title"
        >
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setConfirming(false)}
          />
          <div className="relative w-full max-w-sm rounded-container border border-white/60 bg-surface-primary p-6 shadow-modal">
            <h2
              id="logout-title"
              className="text-[20px] font-semibold tracking-[-0.01em] text-ink"
            >
              Log out?
            </h2>
            <p className="mt-1.5 text-[14px] leading-6 text-ink-muted">
              You will need to verify your email again to sign back in.
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setConfirming(false)}>
                Cancel
              </Button>
              <Button
                variant="danger"
                onClick={async () => {
                  await logout();
                  router.push("/login");
                }}
              >
                Log out
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
