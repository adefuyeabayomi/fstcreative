import React, { useEffect } from "react";
import "./style.css";
import { animateScroll as scroll } from "react-scroll";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDash } from "../../contexts/DashContext";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Transactions = (): React.JSX.Element => {
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
      <div className="py-3" />

      <div className="container-fluid no-space">
        <div className="row no-space align-items-top">
          <div className="col no-space">
            <div className="d-page-heading">
              <h1 className="">Transactions</h1>
              <p className="text-medium">
                Access your dashboard, project updates, design school materials
                and permissions, informations and notifications here.
              </p>
            </div>
          </div>
          <div className="w-max-content no-space">
            <div>
              <button className="filter-button">
                Filters <FontAwesomeIcon icon={faCheckDouble} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3" />
      <div>
        <p className="text-semibold"> Showing for This Month</p>
      </div>
      <div className="py-1" />
      <div className="transaction-table-container">
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Time</th>
              <th>-</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-semibold text-small">
              <td>1</td>
              <td>
                Premium Branding Identity and Design Plan For FST Creative
                Agency
              </td>
              <td>230,000</td>
              <td>Pending</td>
              <td>23 Oct '25. 13:23am</td>
              <td>Pay Now</td>
            </tr>
            <tr className="text-semibold text-small">
              <td>1</td>
              <td>
                Premium Branding Identity and Design Plan For FST Creative
                Agency
              </td>
              <td>230,000</td>
              <td>Pending</td>
              <td>23 Oct '25. 13:23am</td>
              <td>Pay Now</td>
            </tr>
            <tr className="text-semibold text-small">
              <td>1</td>
              <td>
                Premium Branding Identity and Design Plan For FST Creative
                Agency
              </td>
              <td>230,000</td>
              <td>Pending</td>
              <td>23 Oct '25. 13:23am</td>
              <td>Pay Now</td>
            </tr>
            <tr className="text-semibold text-small">
              <td>1</td>
              <td>
                Premium Branding Identity and Design Plan For FST Creative
                Agency
              </td>
              <td>230,000</td>
              <td>Pending</td>
              <td>23 Oct '25. 13:23am</td>
              <td>Pay Now</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="py-3" />
      <div className="d-page-content">
        <div></div>
      </div>
    </div>
  );
};

export default Transactions;
