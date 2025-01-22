import React, { useEffect } from "react";
import "./style.css";
import { animateScroll as scroll } from "react-scroll";
import ang45Arrow from "../../assets/images/ang45arrow.svg";

import pIconTitle from "../../assets/images/pIconTitle.svg";

interface DHCPropType {
  title?: string;
  description?: string;
  actionFn?: () => void;
  buttonText?: string;
}

export const DashHomeCard = ({
  title,
  description,
  actionFn,
  buttonText,
}: DHCPropType): React.JSX.Element => {
  useEffect(() => {
    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);

  return (
    <div className="d-home-card royal-shade-5 text-center">
      <div>
        <h6 className="text-bold"> {title || "Block Title"}</h6>
        <div className="py-1" />
        <p className="text-medium">{description || "Descriptions"}</p>
      </div>
      <div className="py-1" />
      <div>
        <button onClick={actionFn} className="text-center royal text-center">
          <div className="container-fluid no-space">
            <div className="row no-space align-items-center justify-content-center center">
              <div className="w-max-content no-space">
                <p className="text-medium">{buttonText || "Go To Page"}</p>
              </div>
              <div className="w-max-content no-space">
                <img src={ang45Arrow} className="d-home-card-img" />
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

interface DProjectCardPropType {}

export const ProjectCard = ({}: DProjectCardPropType) => {
  return (
    <div className="project-card-container-main">
      <div className="py-2" />
      <div className="container-fluid no-space">
        <div className="row no-space">
          <div className="col-12 no-space">
            <div className="container-fluid no-space align-items-top">
              <div className="row no-space">
                <div className="col no-space">
                  <div>
                    <h6 className="text-semibold pc-header lin-1 w-max-content">
                      Logo & Brand Identity Design
                    </h6>
                    <small className="premium-plan text-semibold">
                      Premium Plan
                    </small>
                  </div>
                </div>
                <div className="w-max-content no-space">
                  <div className="pcardtitleimg-container">
                    <img className="pcardTitleImg" src={pIconTitle} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 no-space fade-border">
            <div className="py-3" />
            <div>
              <h6 className="royal-shade-4 text-semibold">
                Premium Plan - Deliverables Break Down
              </h6>
            </div>
            <div>
              <ul className="text-medium pcardlist font-family-quicksand">
                <li>Erik Lamela is a great guy</li>
                <li>Erik Lamela is a great guy</li>
                <li>Erik Lamela is a great guy</li>
                <li>Erik Lamela is a great guy</li>
                <li>Erik Lamela is a great guy</li>
                <li>Erik Lamela is a great guy</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 no-space fade-border">
            <div className="py-3" />
            <div>
              <h6 className="royal-shade-4 text-semibold">Project Status</h6>
            </div>
            <div>
              <ul className="font-family-quicksand text-semibold project-status-list royal-shade-5">
                <li>
                  <div className="container-fluid no-space">
                    <div className="row no-space align-items-center">
                      <div className="w-max-content no-space">
                        <div className="ps-dot"></div>
                      </div>
                      <div className="w-max-content no-space">
                        <span className="px-2">Logo Design - Pending</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="container-fluid no-space">
                    <div className="row no-space align-items-center">
                      <div className="w-max-content no-space">
                        <div className="ps-dot"></div>
                      </div>
                      <div className="w-max-content no-space">
                        <span className="px-2">SM Poster - Pending</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="container-fluid no-space">
                    <div className="row no-space align-items-center">
                      <div className="w-max-content no-space">
                        <div className="ps-dot"></div>
                      </div>
                      <div className="w-max-content no-space">
                        <span className="px-2">
                          Brand ID Guidelines - Pending
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 no-space fade-border">
            <div className="py-3" />
            <div>
              <h6 className="royal-shade-4 text-semibold">Project Specifics</h6>
            </div>
            <div>
              <div className="py-2" />
              <div className="project-specifics-container">
                <p className="text-semibold royal-shade-4">Field</p>
                <p className="text-medium royal-shade-5">
                  Access your dashboard, project updates, design school
                  materials and permissions, informations and notifications
                  here.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 no-space fade-border">
            <div className="py-3" />
            <div>
              <h6 className="royal-shade-4 text-semibold">Payment Summary</h6>
            </div>
            <div>
              <div className="container-fluid no-space">
                <div className="row no-space">
                  <div className="col no-space">
                    <div className="py-2" />
                    <div>
                      <p className="text-semibold">Price</p>
                      <small className="gray-5">category name</small>
                    </div>
                  </div>
                  <div className="w-max-content no-space">
                    <p className="text-semibold">NGN 200,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
