import { Link } from "react-router-dom";
import avatar from "../../assets/images/avatar.png";
export interface BlogCardProp {
  title: string;
  linkPath: string;
  highlightText: string;
  img: React.JSX.Element;
}

import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons/faChevronCircleRight";
import React from "react";

const BlogCardMain = ({
  title,
  linkPath,
  highlightText,
  img,
}: BlogCardProp) => {
  return (
    <div id="blog-card" className="blog-card-container gray-3">
      <div className="blog-card-image-container">{img}</div>
      <div className="py-1"></div>
      <div className="px-2">
        <div className="blog-text-container text-main">
          <h6 className="text-medium font-family-quicksand ">{title}</h6>
        </div>
        <div className="blog-text-container" style={{ fontWeight: "550" }}>
          <p className="word-break gray-4">{highlightText}</p>
        </div>
        <div className="py-1"></div>
        <Link className="text-none gray-1" to={linkPath}>
          <div className="blog-text-container text-p">
            <div className="container-fluid no-space">
              <div className="row no-space align-items-center">
                <div className="no-space w-max-content">
                  <span className="text-semibold">Read More</span>
                </div>
                <div className="no-space" style={{ width: "5px" }} />
                <div className="w-max-content no-space">
                  <div>
                    <FontAwesomeIcon icon={faChevronCircleRight} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

interface BCardProps {
  feature: boolean;
  linkPath: string;
  title: string;
  highlightText: string;
  image: React.JSX.Element;
  cat: string;
  duration: string;
}

export const FeaturedCard = ({
  feature,
  title,
  linkPath,
  highlightText,
  image,
  cat,
  duration,
}: BCardProps) => {
  let gridStyle = feature
    ? "col-12 col-lg-6 no-space py-2 py-lg-0 "
    : "col-12 no-space py-2 ";
  // implement logic to maximize user experience on the blog item.
  return (
    <div className={`${feature ? "feature" : ""} featured-card`}>
      <div className="container-fluid no-space">
        <div className="row no-space">
          <div className={gridStyle}>
            <div className="fcard-image-container">{image}</div>
          </div>
          <div className={gridStyle + " fcontent"}>
            <Link className="text-none" to={linkPath}>
              <div className="container-fluid no-space">
                <div className="row no-space">
                  <div className="w-max-content no-space">
                    <p className="royal text-semibold">
                      {feature ? "FEATURED" : cat.toUpperCase()}
                    </p>
                  </div>
                  <div className="col"></div>
                  <div className="w-max-content no-space">
                    <p className="text-semibold royal-shade-5">
                      {duration} Read
                    </p>
                  </div>
                </div>
              </div>
              <div className="pointer">
                <h6 className="text-semibold royal-shade-5">{title}</h6>
              </div>
              <div className="py-1" />
              <div className="pointer">
                <p className=" royal-shade-5 text-medium">
                  {highlightText}{" "}
                  <span className="text-semibold">...Read More.</span>
                </p>
              </div>
              <div className="py-2" />
            </Link>
            <div className="container-fluid no-space">
              <div className="row no-space">
                <div className="w-max-content no-space">
                  <div className="f-card-avatar-container">
                    <img className="" src={avatar} />
                  </div>
                </div>
                <div className="col no-space px-2">
                  <p className="royal-shade-4 text-semibold">Adefuye Abayomi</p>
                  <p className="royal-shade-4 text-medium">
                    Creative Designer at Five and Six Technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3" />
    </div>
  );
};
export const Placeholder = () => {
  return (
    <div className="container-fluid no-space">
      <div className="row no-space">
        <div className="col-12 no-space"></div>
        <div className="col-12  no-space"></div>
      </div>
    </div>
  );
};
export default BlogCardMain;
