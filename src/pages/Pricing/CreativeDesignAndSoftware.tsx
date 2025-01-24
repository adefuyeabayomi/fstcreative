import React, { useState } from "react";
import "./style.css";
import { creativeDesignAndSoftwareDevelopment } from "./fstprices";
import { generateReadableName } from "../../utils/utilityFn";
import PricingCard, { PCardPropType } from "../../components/Cards/PricingCard";

const CreativeDesignAndSoftware = (): React.JSX.Element => {
  let cats = Object.keys(creativeDesignAndSoftwareDevelopment);
  let [activeCat, setActiveCat] = useState(cats[0] || undefined);

  return (
    <div>
      <div id="category-container" className="blog-category-container">
        <div className="cat-container-div">
          <ul className="blog-cat-list center text-center fade-border r-15 py-2 px-2">
            {cats.map((cat, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setActiveCat(cat)}
                  className={`${activeCat == cat ? "active" : ""} text-medium pointer`}
                >
                  {generateReadableName(cat)}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="py-3" />
      <div className="container-fluid no-space">
        {Object.entries(creativeDesignAndSoftwareDevelopment).map(
          (x, index) => {
            let [cat, details] = x;
            let bool = activeCat == cat;
            if (!bool) return "";
            let regular: PCardPropType = details.regular;
            let standard: PCardPropType = details.standard;
            let premium: PCardPropType = details.premium;
            let allArray = [regular, standard, premium];
            return (
              <div className="row no-space" key={index}>
                <div className="py-4">
                  <h4 className="text-semibold text-center royal-shade-5">
                    Pricing For{" "}
                    <span className="royal"> {generateReadableName(cat)}</span>
                  </h4>
                </div>
                {allArray.map((x) => {
                  return (
                    <div className="col-12 col-md-6 col-lg-4 no-space">
                      <PricingCard
                        serviceSubgroup={x.serviceSubgroup}
                        serviceGroup={x.serviceGroup}
                        priceNGN={x.priceNGN}
                        priceDollar={x.priceDollar}
                        label={x.label}
                        packageDeal={x.packageDeal}
                        packageType={x.packageType}
                      />
                    </div>
                  );
                })}
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};

export default CreativeDesignAndSoftware;
