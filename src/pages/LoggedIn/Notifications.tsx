import React, { useEffect } from "react";
import "./style.css";
import { animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons/faCheckDouble";
import NotificationItem from "../../components/Item";
import { useDash } from "../../contexts/DashContext";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Notifications = (): React.JSX.Element => {
  let { updateDashStatus } = useDash();
  let navigate = useNavigate();
  let auth = useAuth();
  if (!auth.isAuthenticated) {
    navigate("/auth-guard");
  }
  useEffect(() => {
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
      <div className="container-fluid no-space">
        <div className="row no-space align-items-top">
          <div className="col no-space">
            <div className="d-page-heading">
              <h1 className="">Notifications</h1>
              <p className="text-medium">
                Access your dashboard, project updates, design school materials
                and permissions, informations and notifications here.
              </p>
            </div>
          </div>
          <div className="w-max-content no-space">
            <div>
              <button className="filter-button">
                Mark All As Read <FontAwesomeIcon icon={faCheckDouble} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3" />
      <div className="d-page-content">
        <div>
          <NotificationItem />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
