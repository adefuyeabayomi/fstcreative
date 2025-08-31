import React, { useEffect, useState } from "react";
import "./style.css";
import { animateScroll as scroll } from "react-scroll";
import InputPlain, { TextAreaPlain } from "../../components/input/input";
import FButtonMain from "../../components/Button/Main";
import { useDash } from "../../contexts/DashContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const CustomerSupport = (): React.JSX.Element => {
  let [email, setEmail] = useState("");
  let [fullName, setFullName] = useState("");
  let [feedback, setFeedBack] = useState("");
  let { updateDashStatus } = useDash();
  let navigate = useNavigate();
  let auth = useAuth();
  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/auth-guard");
    }
    updateDashStatus(true);

    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);

  return (
    <div className="d-page royal-shade-5">
      <div className="py-4" />
      <div className="d-page-heading">
        <h1 className="">Feedback and Complaints</h1>
        <p className="text-medium">
          Access your dashboard, project updates, design school materials and
          permissions, informations and notifications here.
        </p>
      </div>
      <div className="py-3" />
      <div className="fade-border r-15 p-3">
        <div>
          <p className="text-medium gray-5">Email</p>
          <div className="py-1" />
          <InputPlain
            value={email}
            onChange={(e) => {
              setEmail(e);
            }}
          />
        </div>
        <div className="py-2" />
        <div>
          <p className="text-medium gray-5">Fullname (Optional)</p>
          <div className="py-1" />
          <InputPlain
            value={fullName}
            onChange={(e) => {
              setFullName(e);
            }}
          />
        </div>
        <div className="py-2" />
        <div>
          <p className="text-medium gray-5">Your Feedback or Complaint</p>
          <div className="py-1" />
          <TextAreaPlain
            value={feedback}
            onChange={(e) => {
              setFeedBack(e);
            }}
          />
        </div>
        <div className="py-2" />
        <div>
          <FButtonMain style={{ width: "100%" }}>
            <span className="text-medium font-family-quicksand">Submit</span>
          </FButtonMain>
        </div>
      </div>
      <div className="py-3" />
      <div className="d-page-content">
        <div></div>
      </div>
    </div>
  );
};

export default CustomerSupport;
