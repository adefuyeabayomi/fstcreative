"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBlog,
  faBoxes,
  faBullseye,
  faHome,
  faPhone,
  faTabletAlt,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/images/Logo Main.svg";
import hIconNotif from "../../assets/images/hIconNotification.svg";
import hIconUser from "../../assets/images/hIconUser.svg";

import iconHome from "../../assets/images/d-icon-home.svg";
import iconProjects from "../../assets/images/d-icon-projects.svg";
import iconDSchool from "../../assets/images/d-icon-design-school.png";
import iconNotification from "../../assets/images/d-icon-notification.svg";
import iconTransactions from "../../assets/images/d-icon-transactions.svg";
import iconSupport from "../../assets/images/d-icon-support.svg";
import iconAccountSettings from "../../assets/images/d-icon-account.svg";
import iconLogout from "../../assets/images/d-icon-logout.svg";

import { useAuth } from "../../contexts/AuthContext";
import { useDash } from "../../contexts/DashContext";
import { widthControlClass } from "../../styles/widthControl";

const desktopLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/pricing" },
 // { label: "Exhibits", href: "/exhibits" },
 // { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
 // { label: "Careers", href: "/careers" },
  { label: "Bootcamps", href: "/bootcamps" },
];

const dashboardLinks = [
  { label: "My Dashboard Overview", path: "/dashboard", match: "", icon: iconHome },
  {
    label: "Projects & Activities",
    path: "/dashboard/projects-and-activities",
    match: "/projects-and-activities",
    icon: iconProjects,
  },
  {
    label: "Design School",
    path: "/dashboard/design-school",
    match: "/design-school",
    icon: iconDSchool,
  },
  {
    label: "Notifications",
    path: "/dashboard/notifications",
    match: "/notifications",
    icon: iconNotification,
  },
  {
    label: "Transactions",
    path: "/dashboard/transactions",
    match: "/transactions",
    icon: iconTransactions,
  },
  {
    label: "Feedback & Complaints",
    path: "/dashboard/customer-support",
    match: "/customer-support",
    icon: iconSupport,
  },
  {
    label: "Account Settings",
    path: "/dashboard/account-settings",
    match: "/account-settings",
    icon: iconAccountSettings,
  },
];

const mobileLinks = [
  { label: "Home", href: "/", icon: faHome },
  { label: "Services", href: "/#services", icon: faBoxes },
  { label: "Exhibits", href: "/exhibits", icon: faBullseye },
  { label: "Products", href: "/products", icon: faTabletAlt },
  { label: "Contact", href: "/#contact", icon: faPhone },
  { label: "Blog", href: "/blog", icon: faBlog },
  { label: "Careers", href: "/careers", icon: faBlog },
  { label: "Design School", href: "/bootcamps", icon: faBlog },
];

const iconClass = "h-[18px] w-[18px] object-contain";

const navLinkClass =
  "rounded-md px-3 py-2 text-[15px] font-medium text-royal-ink no-underline transition-colors hover:bg-brand-tint/60 hover:text-royal";

export function Header(): React.JSX.Element {
  const router = useRouter();
  const pathname = usePathname();
  const auth = useAuth();
  const { isDash } = useDash();
  const [isOpen, setOpen] = useState(false);

  const close = () => setOpen(false);
  const go = (path: string) => {
    close();
    router.push(path);
  };

  const current = (pathname ?? "").replace("/dashboard", "");

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white [&_a]:no-underline [&_ul]:list-none">
      <div className={widthControlClass}>
        <div className="flex h-[68px] items-center gap-2">
          {/* Logo */}
          <Link
            href="/"
            onClick={close}
            aria-label="Five and Six Technologies — home"
            className="flex shrink-0 items-center"
          >
            <img
              src={logo.src}
              alt="Five and Six Technologies"
              className="h-[22px] w-auto"
            />
          </Link>

          <div className="flex-1" />

          {/* Desktop navigation */}
          <nav className="hidden lg:block" aria-label="Main navigation">
            <ul className="flex items-center gap-1">
              {desktopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={
                      isActive(link.href) && link.label !== "Services"
                        ? `${navLinkClass} bg-brand-tint/60 text-royal`
                        : navLinkClass
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden w-2 lg:block" />

          {/* Desktop auth actions */}
          <div className="hidden items-center gap-3 md:flex">
            {auth.isAuthenticated ? (
              <>
                <Link href="/dashboard" className={navLinkClass}>
                  My Dashboard
                </Link>
                <Link
                  href="/dashboard/notifications"
                  aria-label="Notifications"
                  className="rounded-md p-2 transition-colors hover:bg-brand-tint/60"
                >
                  <img src={hIconNotif.src} alt="" className={iconClass} />
                </Link>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[15px] font-medium text-royal-ink transition-colors hover:bg-brand-tint/60"
                >
                  <img src={hIconUser.src} alt="" className={iconClass} />
                  <span>{auth.user?.firstName || "Account"}</span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/#contact"
                  className="flex items-center gap-1.5 rounded-md px-3 py-2 text-[15px] font-medium text-royal-ink transition-colors hover:bg-brand-tint/60 hover:text-royal"
                >
                  <FontAwesomeIcon icon={faPhone} className="h-3.5 w-3.5" />
                  Contact
                </Link>
                <Link href="/login" className={navLinkClass}>
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 rounded-xl bg-royal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-royal-dark"
                >
                  Sign Up
                  <FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5" />
                </Link>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((open) => !open)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-md text-royal transition-colors hover:bg-brand-tint/60 lg:hidden"
          >
            {isOpen ? (
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-x-0 bottom-0 top-[68px] z-40 lg:hidden ${
          isOpen ? "" : "pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          onClick={close}
          className={`absolute inset-0 bg-slate-900/40 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          id="mobile-menu"
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
            <span className="font-quicksand text-lg font-semibold text-royal-ink">Menu</span>
            <button
              type="button"
              onClick={close}
              aria-label="Close menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-royal transition-colors hover:bg-brand-tint/60"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {auth.isAuthenticated && isDash && (
            <div className="px-5 pt-5">
              <h4 className="font-quicksand text-base font-semibold text-royal-ink">
                Dashboard Menu
              </h4>
              <ul className="mt-3 space-y-1 font-quicksand">
                {dashboardLinks.map((item) => {
                  const active = current === item.match;
                  return (
                    <li key={item.path}>
                      <button
                        type="button"
                        onClick={() => go(item.path)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                          active
                            ? "bg-brand-tint text-royal"
                            : "text-royal-ink hover:bg-brand-tint/60"
                        }`}
                      >
                        <img src={item.icon.src} alt="" className={iconClass} />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  );
                })}
                <li>
                  <button
                    type="button"
                    onClick={async () => {
                      close();
                      await auth.logout();
                      router.push("/login");
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-royal-ink transition-colors hover:bg-brand-tint/60"
                  >
                    <img src={iconLogout.src} alt="" className={iconClass} />
                    <span>Log out</span>
                  </button>
                </li>
              </ul>
            </div>
          )}

          <div className="px-5 pt-6">
            <h4 className="font-quicksand text-base font-semibold text-royal-ink">Main Menu</h4>
            <nav aria-label="Mobile navigation" className="mt-3">
              <ul className="font-quicksand text-[15px] font-medium">
                {mobileLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={close}
                      className="flex items-center gap-3 border-b border-neutral-200 py-3 text-royal-link transition-colors hover:text-royal"
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="h-4 w-4 text-royal-light"
                      />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {!auth.isAuthenticated && (
            <div className="mt-6 space-y-3 px-5 pb-8">
              <Link
                href="/login"
                onClick={close}
                className="flex w-full items-center justify-center rounded-full border-2 border-royal bg-white px-5 py-2.5 text-sm font-semibold text-royal transition-colors hover:bg-brand-tint/60"
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={close}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-royal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-royal-dark"
              >
                Sign Up
                <FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}

          <div className="h-6" />
        </aside>
      </div>
    </header>
  );
}
