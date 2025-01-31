import React, { useEffect } from "react";
import "./style.css";
import { animateScroll as scroll } from "react-scroll";
import heroImg from "../../assets/images/Default_A_techsavvy_young_black_man_smiling_as_he_works_on_his_2 1.png";
import dUIImg from "../../assets/images/dUIimg.png";
import bIconAi from "../../assets/images/bIconAi.png";
import bIconBezier from "../../assets/images/bIconBezier.png";
import bIconCode from "../../assets/images/bIconCode.png";
import bIconFigma from "../../assets/images/bIconFigma.png";
import bIconUI from "../../assets/images/bIconUI.png";
import angArrow from "../../assets/images/ang45arrow.svg";
import FButtonMain from "../../components/Button/Main";
import { useDash } from "../../contexts/DashContext";

const Bootcamps = (): React.JSX.Element => {
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
    <div className="main-spacing-x royal-shade-5">
      <div className="py-4" />
      <div className="py-2" />
      <div className="container-fluid no-space  text-center text-lg-left">
        <div className="row no-space align-items-end align-items-lg-center justify-content-center">
          <div className="col-12 col-md-6 col-lg-5 no-space">
            <div>
              <h1 className="text-semibold">
                Go From Complete Beginner To Your First Internship
              </h1>
            </div>
            <div className="py-2" />
            <div>
              <div className="container-fluid no-space">
                <div className="row no-space">
                  <div className="col no-space">
                    <img src={bIconFigma} className="bHicon" />
                  </div>
                  <div className="col no-space">
                    <img className="bHicon" src={bIconCode} />
                  </div>
                  <div className="col no-space">
                    <img className="bHicon" src={bIconBezier} />
                  </div>
                  <div className="col no-space">
                    <img className="bHicon" src={bIconUI} />
                  </div>
                  <div className="col no-space">
                    <img className="bHicon" src={bIconAi} />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-2" />
            <div>
              <h6 className="text-medium bHSubline center d-block d-lg-none">
                Explore our available bootcamp sessions and begin your design &
                coding journey.
              </h6>
              <h6 className="text-medium bHSubline center d-none d-lg-block">
                Explore our available bootcamp sessions and begin your design &
                coding journey.
              </h6>
              <div className="py-4 py-md-0" />
            </div>
          </div>
          <div className="col-12 col-md-6 no-space">
            <div className="p-2 py-md-0 py-lg-2">
              <img className="bHeroImgMain" src={heroImg} />
            </div>
          </div>
        </div>
      </div>

      <div className="py-4" />
      <div className="d-divider-half gray-11-bg"></div>
      <div className="py-4" />
      <div>
        <h5 className="royal">
          EXPLORE <img className="bExploreArrow" src={angArrow} />
        </h5>
      </div>
      <div>
        <div className="py-4" />
        <div className="">
          <div className="container-fluid no-space">
            <div className="row no-space align-items-center">
              <div className="w-max-content no-space">
                <p className="text-semibold">3 Months Bootcamp</p>
              </div>
              <div className="col no-space" />
              <div className="w-max-content  no-space">
                <p className="text-semibold p-2 fade-border">
                  Starts March 14<sup>th</sup>
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-semibold">
              UI/UX Design - Beginner To Advanced
            </h3>
            <h6 className="text-medium">
              Becoming a UI/UX Designer is a Interesting and Challenging Process. This Course is designed to help you become a better Creative Designer, Collaborator and Team Player.
            </h6>
          </div>
          <div className="py-2" />
          <div className="fade-border r-10 p-2">
            <img src={dUIImg} className="r-5 w-100" />
          </div>
          <div className="py-3" />
          <div>
            <h6 className="text-semibold">
              What You'll Gain From This Bootcamp
            </h6>

            <div className="py-2" />
            <ul className="bPageList">
              <li>
                <p className="text-medium">
                  The Fundamentals of Creative Design
                </p>
              </li>
              <li>
                <p className="text-medium">
                  Explore our available bootcamp sessions and begin your design
                  & coding journey.
                </p>
              </li>
              <li>
                <p className="text-medium">
                  Explore our available bootcamp sessions and begin your design
                  & coding journey.
                </p>
              </li>
            </ul>
          </div>
          <div className="py-3" />
          <div>
            <h6 className="text-semibold">Special Benefits</h6>
          </div>
          <div className="py-2" />
          <ul className="bPageList">
            <li>
              <p className="text-medium">
                Explore our available bootcamp sessions and begin your design &
                coding journey.
              </p>
            </li>
            <li>
              <p className="text-medium">
                Explore our available bootcamp sessions and begin your design &
                coding journey.
              </p>
            </li>
            <li>
              <p className="text-medium">
                Explore our available bootcamp sessions and begin your design &
                coding journey.
              </p>
            </li>
          </ul>
          <div className="py-3" />

          <div>
            <FButtonMain style={{ width: "100%" }}>Register</FButtonMain>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bootcamps;
