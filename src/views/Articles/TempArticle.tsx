"use client";

import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
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
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="py-4" />
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <div className="w-full">
          <div className="flex flex-wrap">
            <div className="w-max">
              <p className="text-royal font-semibold">{category}</p>
            </div>
            <div className="flex-1"></div>
            <div className="w-max">
              <p className="font-semibold text-royal-ink">{duration} Read</p>
            </div>
          </div>
        </div>
        <div className="py-2" />
        <h1 className="font-bold font-quicksand text-royal-ink text-[28px] leading-tight sm:text-[36px]">
          Introduction to Visual Design (I) - Design Elements
        </h1>
      </div>
      <div className="mx-auto w-full max-w-3xl px-0 sm:px-2 md:px-4 lg:px-5 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-xl">
        <div className="py-3" />
        <div>
          <h4 className="font-quicksand text-slate-800 font-semibold text-[20px] leading-snug"></h4>
          <p className="py-2 font-medium text-slate-600"></p>
          <div className="w-full">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="w-full md:w-[calc(50%-0.5rem)]"></div>
              <div className="w-full md:w-[calc(50%-0.5rem)]"></div>
            </div>
          </div>
          <ul className="text-[15px] font-medium text-slate-600">
            <li>
              <span className="font-semibold"></span>
            </li>
            <li>
              <span className="font-semibold"></span>
            </li>
            <li>
              <span className="font-semibold"></span>
            </li>
            <li>
              <span className="font-semibold"></span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TempArticle;
