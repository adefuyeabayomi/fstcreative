"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useHash } from "@/hooks/useHash";
import { widthControlClass } from "@/styles/widthControl";
import { cn } from "@/lib/cn";
import { useDash } from "../../contexts/DashContext";
import {
  brandingAndIdentityDesign,
  creativeGraphicsDesign,
  uiUxDesign,
  webDevelopment,
} from "./fstprices";
import PricingCard from "../../components/Cards/PricingCard";
import { useAuth } from "../../contexts/AuthContext";
import { useLoading } from "../../contexts/LoadingContext";

const categories = {
  branding: "Branding & Identity Design",
  creativeGraphicsDesign: "Creative Graphic Design",
  uiUxDesign: "UI/UX Design",
  webDevelopment: "Web Development",
} as const;

type CatKeys = keyof typeof categories;

const Pricing = (): React.JSX.Element => {
  const auth = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams() ?? new URLSearchParams();
  const { updateDashStatus } = useDash();
  const { setLoading, setLoadingText } = useLoading();
  const hash = useHash();

  const next = searchParams.get("next");
  const serviceGroup = searchParams.get("serviceGroup") || "";
  const packageType = searchParams.get("packageType") || "";
  const page = hash.slice(1);

  const [activeCatCode, setActiveCatCode] = useState<CatKeys>(
    (page as CatKeys) || "branding",
  );

  // Keep the selected category in sync with the URL hash, e.g.
  // /pricing#webDevelopment.
  useEffect(() => {
    if (page && page in categories) {
      setActiveCatCode(page as CatKeys);
    }
  }, [page]);

  useEffect(() => {
    updateDashStatus(false);
    window.scrollTo(0, 0);
  }, [updateDashStatus]);

  function handleChoosePlan(group: string, type: string) {
    if (!auth.isAuthenticated) {
      setLoading(true);
      setLoadingText(
        "You need to log in to choose a service plan. Redirecting to the login page.",
      );
      setTimeout(() => {
        setLoading(false);
        setLoadingText("");
        router.push(`/login?next=pricing&serviceGroup=${group}&packageType=${type}`);
      }, 5000);
      return;
    }
    // Authenticated checkout is handled by the dashboard project flow.
  }

  useEffect(() => {
    if (next === "pricing") {
      handleChoosePlan(serviceGroup, packageType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let catObj = brandingAndIdentityDesign;
  switch (activeCatCode) {
    case "webDevelopment":
      catObj = webDevelopment;
      break;
    case "creativeGraphicsDesign":
      catObj = creativeGraphicsDesign;
      break;
    case "uiUxDesign":
      catObj = uiUxDesign;
      break;
    default:
      catObj = brandingAndIdentityDesign;
  }

  return (
    <main className="relative overflow-hidden bg-white pb-20 font-sans text-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-royal/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 h-72 w-72 rounded-full bg-brand/5 blur-3xl"
      />

      <div className={cn(widthControlClass, "relative")}>
        <div className="pt-14 text-center">
          <span className="inline-flex h-7 items-center rounded-full bg-royal/5 px-3 text-[12px] font-medium text-royal">
            Pricing
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl font-quicksand text-[32px] font-semibold leading-tight tracking-[-0.02em] text-royal-ink sm:text-[42px]">
            Plans that scale with your business
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-7 text-ink-muted">
            Explore thoughtfully crafted packages across our service categories.
            Choose a plan that fits your goals, or request a tailored quote for
            something custom.
          </p>
        </div>

        {/* Category selector */}
        <div className="mt-8 flex justify-center">
          <div
            role="tablist"
            aria-label="Service categories"
            className="flex w-full max-w-3xl gap-1 overflow-x-auto rounded-full border border-black/[0.06] bg-white p-1.5 shadow-card [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {(Object.entries(categories) as Array<[CatKeys, string]>).map(
              ([code, label]) => {
                const active = activeCatCode === code;
                return (
                  <button
                    key={code}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveCatCode(code)}
                    className={cn(
                      "flex-1 whitespace-nowrap rounded-full px-4 py-2.5 text-[13px] font-medium transition-colors sm:text-sm",
                      active
                        ? "bg-royal text-white shadow-card"
                        : "text-ink-muted hover:bg-surface-secondary hover:text-royal-ink",
                    )}
                  >
                    {label}
                  </button>
                );
              },
            )}
          </div>
        </div>

        <div className="mt-10 text-center">
          <h2 className="font-quicksand text-[20px] font-semibold tracking-[-0.01em] text-royal-ink">
            Pricing for{" "}
            <span className="text-royal">{categories[activeCatCode]}</span>
          </h2>
          <p className="mt-1 text-[13px] text-ink-subdued">
            One-time project pricing. Every plan includes a discovery session.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {[catObj.regular, catObj.standard, catObj.premium].map((plan) => (
            <PricingCard
              key={plan.packageType}
              serviceSubgroup={plan.serviceSubgroup}
              serviceGroup={plan.serviceGroup}
              priceNGN={plan.priceNGN}
              priceDollar={plan.priceDollar}
              label={plan.label}
              packageDeal={plan.packageDeal}
              packageType={plan.packageType}
              actionFn={() => handleChoosePlan(activeCatCode, plan.packageType)}
            />
          ))}
        </div>

        <div className="mt-10 rounded-container border border-white/70 bg-surface-canvas p-6 text-center shadow-card">
          <p className="text-[14px] leading-6 text-ink-muted">
            Need something outside these packages?{" "}
            <Link
              href="/quotation-request"
              className="font-semibold text-royal no-underline transition-colors hover:text-royal-dark"
            >
              Request a tailored quote
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
};

export default Pricing;
