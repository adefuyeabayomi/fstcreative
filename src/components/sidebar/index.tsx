import { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
//import icon images
import iconHome from "../../assets/images/d-icon-home.svg";
import iconProjects from "../../assets/images/d-icon-projects.svg";
import iconDSchool from "../../assets/images/d-icon-design-school.png";
import iconNotification from "../../assets/images/d-icon-notification.svg";
import iconTransactions from "../../assets/images/d-icon-transactions.svg";
import iconSupport from "../../assets/images/d-icon-support.svg";
import iconAccountSettings from "../../assets/images/d-icon-account.svg";
import iconLogout from "../../assets/images/d-icon-logout.svg";
import { useAuth } from "../../contexts/AuthContext";

export function SideBar() {
  const [sidebarStyle, setSidebarStyle] = useState({});
  let [active, setActive] = useState("");
  let auth = useAuth();
  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  function getActive(val: string) {
    return val.replace("/dashboard", "");
  }

  function closeModal() {
    setShowModal(false);
  }

  function openModal() {
    setShowModal(true);
  }

  function logOut() {
    auth.logout();
  }

  useEffect(() => {
    const handleScroll = () => {
      const sidebar = document.querySelector(".sidebar") as HTMLElement | null;
      const footer = document.querySelector(".footer") as HTMLElement | null;
      if (!sidebar || !footer) return;
      const sidebarHeight = sidebar.offsetHeight;
      const footerOffsetTop = footer.offsetTop;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      if (scrollY + windowHeight >= footerOffsetTop) {
        setSidebarStyle({
          position: "absolute",
          top: `${footerOffsetTop - sidebarHeight}px`,
        });
      } else {
        setSidebarStyle({
          position: "fixed",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="d-none d-md-block text-main">
      <Modal
        onCancel={closeModal}
        onOk={logOut}
        open={showModal}
        closable={true}
        okText={"Log Out"}
      >
        <div className="py-3" />
        <h5 className="text-bold text-center">Log Out</h5>
        <div className="py-1" />
        <p className="text-small text-center">
          Are You Sure You Want to Log Out?
        </p>
        <div className="py-2" />
      </Modal>
      <section className={`sidebar-container`}>
        <section className="sidebar pl-5" style={{ ...sidebarStyle }}>
          <div className="py-2" />

          <ul className="sidebar-list-container font-family-quicksand text-medium">
            <li className="sidebar-list-item">
              <div
                className={`slitem pointer ${getActive(active) == "" ? "active" : ""}`}
                onClick={() => {
                  navigate("/dashboard");
                  setActive("/dashboard");
                }}
              >
                <div className="container-fluid no-space">
                  <div className="row no-space align-items-center">
                    <div className="w-max-content no-space">
                      <img className="sblist-icon" src={iconHome} />
                    </div>
                    <div className="w-max-content no-space">
                      <p className="text-semibold px-1 royal-shade-5">Home</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="sidebar-list-item">
              <div
                className={`slitem pointer ${getActive(active) == "/projects-and-activities" ? "active" : ""}`}
                onClick={() => {
                  navigate("/dashboard/projects-and-activities");
                  setActive("/dashboard/projects-and-activities");
                }}
              >
                <div className="container-fluid no-space">
                  <div className="row no-space align-items-center">
                    <div className="w-max-content no-space">
                      <img className="sblist-icon" src={iconProjects} />
                    </div>
                    <div className="w-max-content no-space">
                      <p className="text-semibold px-1 royal-shade-5">
                        Projects & Activities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="sidebar-list-item">
              <div
                className={`slitem pointer ${getActive(active) == "/design-school" ? "active" : ""}`}
                onClick={() => {
                  navigate("/dashboard/design-school");
                  setActive("/dashboard/design-school");
                }}
              >
                <div className="container-fluid no-space">
                  <div className="row no-space align-items-center">
                    <div className="w-max-content no-space">
                      <img className="sblist-icon" src={iconDSchool} />
                    </div>
                    <div className="w-max-content no-space">
                      <p className="text-semibold px-1 royal-shade-5">
                        Design School
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="sidebar-list-item">
              <div
                className={`slitem pointer ${getActive(active) == "/notifications" ? "active" : ""}`}
                onClick={() => {
                  navigate("/dashboard/notifications");
                  setActive("/dashboard/notifications");
                }}
              >
                <div className="container-fluid no-space">
                  <div className="row no-space align-items-center">
                    <div className="w-max-content no-space">
                      <img className="sblist-icon" src={iconNotification} />
                    </div>
                    <div className="w-max-content no-space">
                      <p className="text-semibold px-1 royal-shade-5">
                        Notifications
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="sidebar-list-item">
              <div
                className={`slitem pointer ${getActive(active) == "/transactions" ? "active" : ""}`}
                onClick={() => {
                  navigate("/dashboard/transactions");
                  setActive("/dashboard/transactions");
                }}
              >
                <div className="container-fluid no-space">
                  <div className="row no-space align-items-center">
                    <div className="w-max-content no-space">
                      <img className="sblist-icon" src={iconTransactions} />
                    </div>
                    <div className="w-max-content no-space">
                      <p className="text-semibold px-1 royal-shade-5">
                        Transactions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="sidebar-list-item">
              <div
                className={`slitem pointer ${getActive(active) == "/customer-support" ? "active" : ""}`}
                onClick={() => {
                  navigate("/dashboard/customer-support");
                  setActive("/dashboard/customer-support");
                }}
              >
                <div className="container-fluid no-space">
                  <div className="row no-space align-items-center">
                    <div className="w-max-content no-space">
                      <img className="sblist-icon" src={iconSupport} />
                    </div>
                    <div className="w-max-content no-space">
                      <p className="text-semibold px-1 royal-shade-5">
                        Feedback & Complaints
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="sidebar-list-item">
              <div
                className={`slitem pointer ${getActive(active) == "/account-settings" ? "active" : ""}`}
                onClick={() => {
                  navigate("/dashboard/account-settings");
                  setActive("/dashboard/account-settings");
                }}
              >
                <div className="container-fluid no-space">
                  <div className="row no-space align-items-center">
                    <div className="w-max-content no-space">
                      <img className="sblist-icon" src={iconAccountSettings} />
                    </div>
                    <div className="w-max-content no-space">
                      <p className="text-semibold px-1 royal-shade-5">
                        Account Settings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="sidebar-list-item">
              <div
                onClick={openModal}
                className={`slitem pointer ${getActive(active) == "/logout" ? "active" : ""}`}
              >
                <div className="container-fluid no-space">
                  <div className="row no-space align-items-center">
                    <div className="w-max-content no-space">
                      <img className="sblist-icon" src={iconLogout} />
                    </div>
                    <div className="w-max-content no-space">
                      <p className="text-semibold px-1 royal-shade-5">
                        Log OUt
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <div className="py-4" />
          <div className="py-4" />
        </section>
      </section>
    </div>
  );
}
