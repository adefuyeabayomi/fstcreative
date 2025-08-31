import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import FButtonMain from "../Button/Main";
import { capitalizeString } from "../../utils/utilityFn";

export interface PCardPropType {
  serviceSubgroup: string;
  serviceGroup?: string;
  priceNGN?: number;
  priceDollar?: number;
  label: string;
  packageDeal: string[];
  packageType: "regular" | "standard" | "premium";
}

const PricingCard: React.FC<PCardPropType & { actionFn: () => void }> = ({
  serviceSubgroup,
  serviceGroup,
  priceNGN,
  label,
  packageDeal,
  packageType,
  actionFn,
}): React.JSX.Element => {
  let packageStyle = "";
  if (packageType == "regular") {
    packageStyle = "package-regular";
  }
  if (packageType == "standard") {
    packageStyle = "package-standard";
  }
  if (packageType == "premium") {
    packageStyle = "package-premium";
  }

  return (
    <div className="p-2">
      <div className="plan-container r-25 px-4 py-5">
        <div>
          <p className="text-bold">{serviceSubgroup}</p>
          <p className="text-semibold gray-6 text-small">{serviceGroup}</p>
        </div>
        <div className="py-2" />
        <div>
          <h4 className="font-family-quicksand text-bold">
            NGN {priceNGN}
            <span className="text-p text-medium gray-6">/ One Time </span>
          </h4>
        </div>
        <div className="py-2" />
        <div>
          <p className={`text-bold ${packageStyle}`}>
            {" "}
            <FontAwesomeIcon icon={faStarHalfStroke} />{" "}
            {capitalizeString(packageType)} Package{" "}
            <FontAwesomeIcon icon={faStarHalfStroke} />
          </p>
        </div>
        <div>
          <p className="text-semibold gray-6 text-small">{label}</p>
        </div>
        <div className="py-2" />
        <div>
          <ul className="plan-list">
            {packageDeal.map((x, index) => {
              return (
                <li key={index} className="text-semibold royal-shade-5">
                  <FontAwesomeIcon color="#181a1f" icon={faCheckSquare} /> {x}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="py-3" />
        <div className="">
          <FButtonMain
            style={{
              background: "white",
              width: "100%",
              border: "1.8px solid",
              borderRadius: "30px",
              color: "#8f9298",
            }}
            actionFn={actionFn}
          >
            <span className="gray-2 text-semibold"> Choose This Plan </span>
          </FButtonMain>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
