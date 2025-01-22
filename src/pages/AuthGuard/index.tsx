import React, { useEffect } from "react";
import "./style.css";
import { animateScroll as scroll } from "react-scroll";
import { useDash } from "../../contexts/DashContext";
import FButtonMain from "../../components/Button/Main";
import { useNavigate } from "react-router-dom";

const AuthGuard = (): React.JSX.Element => {
  let navigate = useNavigate();

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
    <div className="col-10 col-md-8 col-lg-5 center">
      <div className="py-5" />
      <div className="text-center royal-shade-5">
        <h5 className="text-bold">You are not Logged In.</h5>
        <p className="text-medium">
          Please login to access your dashboard and other informations.
        </p>
      </div>
      <div className="py-2" />
      <div className="">
        <FButtonMain
          actionFn={() => navigate("/login")}
          style={{ width: "100%", borderRadius: "30px" }}
        >
          <span className="font-family-quicksand">Login</span>
        </FButtonMain>
      </div>
      <div className="py-5" />
    </div>
  );
};

export default AuthGuard;
