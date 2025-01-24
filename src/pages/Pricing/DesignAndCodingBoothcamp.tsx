import React, { useEffect } from "react";
import "./style.css";
import { animateScroll as scroll } from "react-scroll";

const DesignAndCodingBoothcamp = (): React.JSX.Element => {
  useEffect(() => {
    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);

  return <div>DesignAndCodingBoothcamp component</div>;
};

export default DesignAndCodingBoothcamp;
