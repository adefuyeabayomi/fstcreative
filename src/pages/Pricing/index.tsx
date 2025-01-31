import React, { useEffect, useState } from "react";
import "./style.css";
import { animateScroll as scroll } from "react-scroll";
import { useDash } from "../../contexts/DashContext";
import { useLocation } from "react-router-dom";
import {
  brandingAndIdentityDesign,
  creativeGraphicsDesign,
  uiUxDesign,
  webDevelopment,
} from "./fstprices";
import PricingCard from "../../components/Cards/PricingCard";
const Pricing = (): React.JSX.Element => {
  let cats = {
    branding: "Branding & Identity Design",
    creativeGraphicsDesign: "Creative Graphic Design",
    uiUxDesign: "UI/UX Design",
    webDevelopment: "Web Development",
  };
  type CatKeys = keyof typeof cats;
  let { updateDashStatus } = useDash();

  let location = useLocation();

  let page = location.hash.slice(1, location.hash.length);

  let [activeCatCode, setActiveCatCode] = useState<CatKeys>(page as CatKeys);

  let catObj = brandingAndIdentityDesign;

  switch (activeCatCode) {
    case "branding": {
      catObj = brandingAndIdentityDesign;
      break;
    }
    case "webDevelopment": {
      catObj = webDevelopment;
      break;
    }
    case "creativeGraphicsDesign": {
      catObj = creativeGraphicsDesign;
      break;
    }
    case "uiUxDesign": {
      catObj = uiUxDesign;
    }
  }

  useEffect(() => {
    updateDashStatus(false);
    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);

  return (
    <div className="main-spacing-x royal-shade-5">
      <div className="py-5" />
      <div>
        <h1 className="text-semibold font-family-quicksand text-center">
          Pricing Plans
        </h1>{" "}
        <div className="py-2" />
        <p className="text-center gray-6 text-medium col-12 col-md-9 col-lg-7 center">
          Explore our thoughtfully crafted packages designed to deliver
          exceptional value across our diverse service categories. Choose a plan
          that aligns perfectly with your needs and goals.
        </p>
      </div>

      <div className="py-3" />
      <div>
        <div id="category-container" className="blog-category-container">
          <div className="cat-container-div">
            <ul className="blog-cat-list center text-center fade-border r-15 py-2 px-2">
              {Object.keys(cats).map((code, index) => {
                const typedCode = code as keyof typeof cats;
                return (
                  <li
                    key={index}
                    onClick={() => setActiveCatCode(typedCode)}
                    className={`${activeCatCode == code ? "active" : ""} text-medium pointer`}
                  >
                    {cats[typedCode]}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="py-3" />
        <div className="container-fluid no-space">
          <div className="row no-space">
            <div className="py-4">
              <h4 className="text-semibold text-center royal-shade-5">
                Pricing For{" "}
                <span className="royal"> {cats[activeCatCode]}</span>
              </h4>
            </div>
            {[catObj.regular, catObj.standard, catObj.premium].map(
              (x, index) => {
                return (
                  <div
                    key={index}
                    className="col-12 col-md-6 col-lg-4 no-space"
                  >
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
              },
            )}
          </div>
        </div>
      </div>
      <div className="py-3" />
    </div>
  );
};

export default Pricing;
