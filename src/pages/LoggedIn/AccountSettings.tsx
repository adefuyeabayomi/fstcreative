import React, { useEffect, useState } from "react";
import "./style.css";
import { animateScroll as scroll } from "react-scroll";
import InputPlain from "../../components/input/input";
import FButtonMain from "../../components/Button/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useDash } from "../../contexts/DashContext";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const AccountSettings = (): React.JSX.Element => {
  let { updateDashStatus } = useDash();
  let navigate = useNavigate();
  let auth = useAuth();
  let [username, setUsername] = useState("");
  // i should not allow them get here.
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
        <h1 className="">Account Settings</h1>
        <p className="text-medium">
          Access your dashboard, project updates, design school materials and
          permissions, informations and notifications here.
        </p>
      </div>
      <div className="py-3" />
      <h6 className="royal-shade-4 text-semibold">Profile</h6>
      <div className="py-1" />
      <div className="fade-border r-15 p-3">
        <div>
          <p className="text-medium gray-5">Username</p>
          <div className="py-1" />
          <InputPlain
            value={username}
            onChange={(e) => {
              setUsername(e);
            }}
          />
        </div>
        <div className="py-2" />
        <div>
          <FButtonMain style={{ width: "100%" }}>
            <span className="text-medium font-family-quicksand">
              Update Profile
            </span>
          </FButtonMain>
        </div>
      </div>
      <div className="py-3" />
      <h6 className="royal-shade-4 text-semibold">User Account</h6>
      <div className="py-1" />
      <div className="fade-border r-15 p-3">
        <div className="container-fluid no-space">
          <div className="row no-space">
            <div className="col no-space">
              <div>
                <p className="gray-5 text-medium">Primary Email Address</p>
                <p className="text-medium royal-shade-5">
                  adefuyeabayomi16@gmail.com
                </p>
              </div>
            </div>
            <div className=" w-max-content no-space">
              <div>
                <FButtonMain style={{ borderRadius: "50px" }}>
                  <span className="text-medium font-family-quicksand">
                    Update <FontAwesomeIcon icon={faPen} />
                  </span>
                </FButtonMain>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3" />
        <div className="container-fluid no-space">
          <div className="row no-space">
            <div className="col no-space">
              <div>
                <p className="gray-5 text-medium">Primary Email Address</p>
                <p className="text-medium royal-shade-5">
                  adefuyeabayomi16@gmail.com
                </p>
              </div>
            </div>
            <div className=" w-max-content no-space">
              <div>
                <FButtonMain style={{ borderRadius: "50px" }}>
                  <span className="text-medium font-family-quicksand">
                    Update <FontAwesomeIcon icon={faPen} />
                  </span>
                </FButtonMain>
              </div>
            </div>
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

export default AccountSettings;
