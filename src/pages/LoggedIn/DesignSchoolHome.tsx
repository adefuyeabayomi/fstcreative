import React, { useEffect } from "react";
import "./style.css";
import { animateScroll as scroll } from "react-scroll";
import { DashHomeCard } from "../../components/Cards";
import { useDash } from "../../contexts/DashContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const DesignSchoolHome = (): React.JSX.Element => {
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
        <h1 className="">Design School</h1>
        <p className="text-medium">Student Dashboard Overview</p>
      </div>
      <div className="py-3" />
      <div>
        <div className="container-fluid no-space">
          <div className="row no-space">
            {[1, 2, 3, 4, 5, 6].map((x) => {
              return (
                <div
                  key={x}
                  className="col-12 col-md-6 col-lg-4 col-xl-3 no-space"
                >
                  <div style={{ paddingRight: "15px", paddingTop: "15px" }}>
                    <DashHomeCard />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="py-3" />
      <div className="d-page-content">
        <div></div>
      </div>
    </div>
  );
};

export default DesignSchoolHome;
