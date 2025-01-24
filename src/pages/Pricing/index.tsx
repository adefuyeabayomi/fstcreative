import React, { useEffect } from "react";
import "./style.css";
import { animateScroll as scroll } from "react-scroll";
import { useDash } from "../../contexts/DashContext";
import { useLocation } from "react-router-dom";
import { generateReadableName } from "../../utils/utilityFn";
import CreativeDesignAndSoftware from "./CreativeDesignAndSoftware";
import DigitalContentCreation from "./DigitalContentCreation";
import DesignAndCodingBoothcamp from "./DesignAndCodingBoothcamp";
import VideoEditsAndCreation from "./VideoEditsAndCreation";

const Pricing = (): React.JSX.Element => {
  let { updateDashStatus } = useDash();
  let location = useLocation();
  useEffect(() => {}, []);
  let page = location.hash.slice(1, location.hash.length);

  let serviceNode = <div></div>;

  switch (page) {
    case "creativeDesignAndSoftwareDevelopment": {
      serviceNode = <CreativeDesignAndSoftware />;
      break;
    }
    case "digitalContentCreationAndSocialMediaManagement": {
      serviceNode = <DigitalContentCreation />;
      break;
    }
    case "videoEditsAndCreation": {
      serviceNode = <VideoEditsAndCreation />;
      break;
    }
    case "designAndCodingBootcamps": {
      serviceNode = <DesignAndCodingBoothcamp />;
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
        <h4 className="text-semibold font-family-quicksand text-center">
          {generateReadableName(page).replace("And", " & ") || ""}
        </h4>{" "}
        <div className="py-2" />
        <p className="text-center gray-6 text-medium col-12 col-md-9 col-lg-7 center">
          Explore our thoughtfully crafted packages designed to deliver
          exceptional value across our diverse service categories. Choose a plan
          that aligns perfectly with your needs and goals.
        </p>
      </div>

      <div className="py-3" />
      {serviceNode}
      <div className="py-3" />
    </div>
  );
};

export default Pricing;
