import React, { useEffect } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons/faCheckDouble";

const NotificationItem = (): React.JSX.Element => {
  return (
    <div className="notification-item-container">
      <div className="container-fluid no-space">
        <div className="row no-space">
          <div className="w-max-content no-space">
            <div className="notif-icon-container">
              <FontAwesomeIcon icon={faDollarSign} />
            </div>
          </div>
          <div className="col no-space">
            <div className="px-2">
              <p className="text-medium">
                An offer was made for your recent post. “I need a plumber for”{" "}
              </p>
              <small className="gray-5">30th October, 2025</small>
            </div>
          </div>
          <div className="w-max-content no-space text-center">
            <div className="px-2 w-max-content">
              <p className="text-medium w-max-content center">
                {" "}
                <FontAwesomeIcon icon={faCheckDouble} />{" "}
              </p>
              <small className="gray-5 w-max-content">2hours Ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
