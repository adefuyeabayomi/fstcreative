"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/Button";
import { capitalizeString } from "../../utils/utilityFn";
import { cn } from "@/lib/cn";

export interface PCardPropType {
  serviceSubgroup: string;
  serviceGroup?: string;
  priceNGN?: number;
  priceDollar?: number;
  label: string;
  packageDeal: string[];
  packageType: "regular" | "standard" | "premium";
}

const accents: Record<PCardPropType["packageType"], string> = {
  regular: "bg-sky-50 text-sky-600",
  standard: "bg-emerald-50 text-emerald-600",
  premium: "bg-amber-50 text-amber-600",
};

const PricingCard: React.FC<PCardPropType & { actionFn: () => void }> = ({
  serviceSubgroup,
  serviceGroup,
  priceNGN,
  priceDollar,
  label,
  packageDeal,
  packageType,
  actionFn,
}): React.JSX.Element => {
  return (
    <article className="flex h-full flex-col rounded-container border border-white/70 bg-white p-6 shadow-card transition-shadow hover:shadow-floating">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-quicksand text-[17px] font-semibold text-royal-ink">
            {serviceSubgroup}
          </h3>
          {serviceGroup && (
            <p className="mt-0.5 text-[13px] text-ink-subdued">{serviceGroup}</p>
          )}
        </div>
        <span
          className={cn(
            "inline-flex h-6 shrink-0 items-center gap-1.5 rounded-full px-2.5 text-[12px] font-medium",
            accents[packageType],
          )}
        >
          <FontAwesomeIcon icon={faStar} className="h-2.5 w-2.5" />
          {capitalizeString(packageType)}
        </span>
      </div>

      <div className="mt-5">
        <p className="text-[26px] font-semibold leading-none tracking-[-0.02em] text-royal-ink">
          ₦{priceNGN?.toLocaleString()}
          <span className="ml-1 text-[13px] font-medium text-ink-subdued">
            / one time
          </span>
        </p>
        {priceDollar ? (
          <p className="mt-1 text-[12px] text-ink-subdued">≈ ${priceDollar}</p>
        ) : null}
        <p className="mt-2 text-[13px] text-ink-muted">{label}</p>
      </div>

      <ul className="mt-5 list-none space-y-2.5 border-t border-black/[0.06] pt-5">
        {packageDeal.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-2.5 text-[13px] leading-5 text-ink-muted"
          >
            <FontAwesomeIcon
              icon={faCheck}
              className="mt-1 h-3 w-3 shrink-0 text-brand"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <Button variant="royal" fullWidth onClick={actionFn}>
          Choose this plan
        </Button>
      </div>
    </article>
  );
};

export default PricingCard;
