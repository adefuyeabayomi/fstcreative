import React, { useEffect, useState } from "react";
import "./style.css";
import { animateScroll as scroll } from "react-scroll";
import InputPlain, { TextAreaPlain } from "../../components/input/input";
import FButtonMain from "../../components/Button/Main";

const Boot = (): React.JSX.Element => {
  let [email, setEmail] = useState("");
  useEffect(() => {
    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);

  return (
    <div className="main-spacing-x" id="job-application">
      <div className="py-3" />
      <div className="py-3" />
      <div>
        <h1 className="text-bold text-center royal-shade-5 font-family-quicksand">
          Register For Bootcamp
        </h1>

        <div className="py-1" />
        <h6 className="text-center text-semibold col-md-10 col-lg-9 col-xl-7 center">
          UI/UX Design - Beginner To Advance
        </h6>
        <div className="py-1" />
        <p className="text-center text-semibold col-md-10 col-lg-9 col-xl-7 center">
          Remote Internship
        </p>
      </div>
      <div className="py-3" />
      <div className="fade-border r-15 py-3 p-2 p-md-3">
        <div>
          <p className="text-medium gray-6">Full Name</p>
          <div className="py-1" />
          <InputPlain value={email} onChange={(val) => setEmail(val)} />
        </div>
        <div className="py-2" />
        <div>
          <p className="text-medium gray-6">Email</p>
          <div className="py-1" />
          <InputPlain value={email} onChange={(val) => setEmail(val)} />
        </div>
        <div className="py-2" />
        <div>
          <p className="text-medium gray-6">What's your Notice Period?</p>
          <div className="py-1" />
          <InputPlain value={email} onChange={(val) => setEmail(val)} />
        </div>
        <div className="py-2" />
        <div>
          <p className="text-medium gray-6">
            Cover Letter (You can share other relevant links here. )
          </p>
          <div className="py-1" />
          <TextAreaPlain value={email} onChange={(val) => setEmail(val)} />
        </div>
        <div className="py-2" />
        <div>
          <p className="text-medium gray-6">Upload Resume</p>
          <div className="py-1" />
          <input type="file" className="Boot-fileupload" />
        </div>
        <div className="py-4" />
        <div>
          <FButtonMain style={{ width: "100%" }} actionFn={() => {}}>
            <span>Submit Application</span>
          </FButtonMain>
        </div>
        <div className="py-2" />
      </div>
      <div className="py-3 w-100" />
    </div>
  );
};

export default Boot;
