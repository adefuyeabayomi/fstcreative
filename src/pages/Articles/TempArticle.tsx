import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import "./style.css";
import { useDash } from "../../contexts/DashContext";

const TempArticle = (): React.JSX.Element => {
  let [category, duration] = ["TECH INNOVATION", "2mins"];
  let { updateDashStatus } = useDash();
  useEffect(() => {
    updateDashStatus(false);
    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);
  return (
    <section className="main-spacing-x">
      <div className="py-4" />
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="container-fluid no-space">
          <div className="row no-space">
            <div className="w-max-content no-space">
              <p className="royal text-semibold">{category}</p>
            </div>
            <div className="col"></div>
            <div className="w-max-content no-space">
              <p className="text-semibold royal-shade-5">{duration} Read</p>
            </div>
          </div>
        </div>
        <div className="py-2" />
        <h1 className="text-bold font-family-quicksand royal-shade-5">
          Introduction to Visual Design (I) - Design Elements
        </h1>
      </div>
      <div className="article-contents-main px-0 px-sm-2 px-md-4 px-lg-5">
        <div className="py-3" />
        <div>
          <h4 className="font-family-quicksand gray-2 text-semibold"></h4>
          <p className="py-2 text-medium gray-4"></p>
          <div className="container-fluid no-space">
            <div className="row no-space g-3 align-items-center">
              <div className="no-space col-12 col-md-6"></div>
              <div className="no-space col-12 col-md-6"></div>
            </div>
          </div>
          <ul className="text-p text-medium gray-4">
            <li>
              <span className="text-semibold"></span>
            </li>
            <li>
              <span className="text-semibold"></span>
            </li>
            <li>
              <span className="text-semibold"></span>
            </li>
            <li>
              <span className="text-semibold"></span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TempArticle;
