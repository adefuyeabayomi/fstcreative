import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import "./style.css";

const FigmaIntro = (): React.JSX.Element => {
  useEffect(() => {
    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);
  return (
    <section className="main-spacing-x">
      <div className="py-3" />
      <div className="article-title-backdrop py-4 p-3">
        <h2 className="font-family-quicksand text-medium">
          Introduction to Figma - Creative Design and Prototyping Tool
        </h2>
        <div className="py-1" />
        <p className="white">
          <span>Date: 6 October, 2024</span>{" "}
          <span>Tags: Visual Design, Introduction, Design Elements</span>
        </p>
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

export default FigmaIntro;
