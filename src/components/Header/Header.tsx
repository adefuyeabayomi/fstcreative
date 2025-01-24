import React, { useState } from "react";
import logo from "../../assets/images/Logo Main.svg";
import hIconNotif from "../../assets/images/hIconNotification.svg";
import hIconUser from "../../assets/images/hIconUser.svg";

import iconHome from "../../assets/images/d-icon-home.svg";
import iconProjects from "../../assets/images/d-icon-projects.svg";
import iconDSchool from "../../assets/images/d-icon-design-school.png";
import iconNotification from "../../assets/images/d-icon-notification.svg";
import iconTransactions from "../../assets/images/d-icon-transactions.svg";
import iconSupport from "../../assets/images/d-icon-support.svg";
import iconAccountSettings from "../../assets/images/d-icon-account.svg";
import iconLogout from "../../assets/images/d-icon-logout.svg";

import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import FButtonMain from "../Button/Main";
import Overlay from "../overlay";
import { Twirl as Hamburger } from "hamburger-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBoxes,
  faBullseye,
  faTabletAlt,
  faPhone,
  faBlog,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../contexts/AuthContext";
import { useDash } from "../../contexts/DashContext";

export function Header(): React.JSX.Element {
  let navigate = useNavigate();
  let auth = useAuth();
  let { isDash } = useDash();
  function toggleHamburger() {
    setOpen(!isOpen);
  }
  let [active, setActive] = useState("");
  function getActive(val: string) {
    return val.replace("/dashboard", "");
  }

  const [isOpen, setOpen] = useState(false);
  return (
    <section id="header" className="py-0 py-lg-2">
      <div className="main-spacing-x">
        <div className="container-fluid no-space">
          <div className="row no-space align-items-center">
            <div className="no-space w-max-content">
              <div className="logo-container">
                <Link to={"/"}>
                  <img className="logo-img" src={logo} />
                </Link>
              </div>
            </div>
            <div className="col no-space"></div>
            <div className="no-space d-none d-lg-block w-max-content">
              <div className="desktop-navigation-links">
                <nav>
                  <ul>
                    <li className="desktop-nav-links">
                      <Link
                        className="text-none royal-shade-5 text-medium-1"
                        to={"/"}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="desktop-nav-links">
                      <Link
                        className="text-none royal-shade-5 text-medium-1"
                        to={"/services"}
                      >
                        Services
                      </Link>
                    </li>
                    <li className="desktop-nav-links">
                      <Link
                        className="text-none royal-shade-5 text-medium-1"
                        to={"/exhibits"}
                      >
                        Exhibits
                      </Link>
                    </li>
                    <li className="desktop-nav-links">
                      <Link
                        className="text-none royal-shade-5 text-medium-1"
                        to={"/products"}
                      >
                        Products
                      </Link>
                    </li>
                    <li className="desktop-nav-links">
                      <Link
                        className="text-none royal-shade-5 text-medium-1"
                        to={"/blog"}
                      >
                        Blog
                      </Link>
                    </li>
                    <li className="desktop-nav-links">
                      <Link
                        className="text-none royal-shade-5 text-medium-1"
                        to={"/careers"}
                      >
                        Careers
                      </Link>
                    </li>
                    <li className="desktop-nav-links">
                      <Link
                        className="text-none royal-shade-5 text-medium-1"
                        to={"/designschool"}
                      >
                        Design School
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="w-max-content px-2"></div>
            {auth.isAuthenticated ? (
              <div className="w-max-content no-space d-none d-sm-block">
                <div className="desktop-nav-links">
                  <Link
                    className="text-none royal-shade-5 text-medium-1"
                    to={"/dashboard"}
                  >
                    My Dashboard
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}{" "}
            {auth.isAuthenticated ? (
              <div className="w-max-content no-space d-none d-sm-block">
                <div className="desktop-nav-links">
                  <Link
                    className="text-none royal-shade-5 text-medium-1"
                    to={"/dashboard/notifications"}
                  >
                    <img src={hIconNotif} className="h-icon" />
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}{" "}
            {auth.isAuthenticated ? (
              <div className="w-max-content no-space d-none d-sm-block">
                <div className="desktop-nav-links">
                  <Link
                    className="text-none royal-shade-5 text-medium-1"
                    to={"/dashboard"}
                  >
                    <img src={hIconUser} className="h-icon" /> Abayomi
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}
            {!auth.isAuthenticated ? (
              <div className="w-max-content no-space d-none d-sm-block">
                <div className="desktop-nav-links">
                  <Link
                    className="text-none royal-shade-5 text-medium-1"
                    to={"/"}
                  >
                    <span className="px-1">
                      <FontAwesomeIcon size={"sm"} icon={faPhone} />
                    </span>
                    Contact
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}
            {!auth.isAuthenticated ? (
              <div className="w-max-content no-space d-none d-sm-block">
                <div className="desktop-nav-links">
                  <Link
                    className="text-none royal-shade-5 text-medium-1"
                    to={"/login"}
                  >
                    Login
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}
            {!auth.isAuthenticated ? (
              <div className="w-max-content px-2"></div>
            ) : (
              ""
            )}
            {!auth.isAuthenticated ? (
              <div className="w-max-content no-space d-none d-sm-block">
                <div>
                  <FButtonMain
                    iconLeft={false}
                    icon={<FontAwesomeIcon icon={faArrowRight} size={"1x"} />}
                    actionFn={() => navigate("/signup")}
                  >
                    <span className="text-none text-semibold">Sign Up</span>
                  </FButtonMain>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="w-max-content no-space d-block d-lg-none">
              <Hamburger
                toggled={isOpen}
                color="#0533aa"
                size={18}
                toggle={toggleHamburger}
              />
              <Overlay isOpen={isOpen} toggle={toggleHamburger}>
                <div className="py-4" />
                {auth.isAuthenticated && isDash ? (
                  <div className="px-3">
                    <h4 className="text-bold royal-shade-5">Dashboard Menu</h4>
                  </div>
                ) : (
                  <span></span>
                )}
                {auth.isAuthenticated && isDash ? (
                  <div className="mobile-sidebar-container">
                    <ul className="sidebar-list-container font-family-quicksand text-medium">
                      <li className="sidebar-list-item">
                        <div
                          className={`slitem pointer ${getActive(active) == "" ? "active" : ""}`}
                          onClick={() => {
                            navigate("/dashboard");
                            toggleHamburger();
                            setActive("/dashboard");
                          }}
                        >
                          <div className="container-fluid no-space">
                            <div className="row no-space align-items-center">
                              <div className="w-max-content no-space">
                                <img className="sblist-icon" src={iconHome} />
                              </div>
                              <div className="w-max-content no-space">
                                <p className="text-semibold px-1 royal-shade-5">
                                  My Dashboard Overview
                                </p>
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
                            toggleHamburger();
                            setActive("/dashboard/projects-and-activities");
                          }}
                        >
                          <div className="container-fluid no-space">
                            <div className="row no-space align-items-center">
                              <div className="w-max-content no-space">
                                <img
                                  className="sblist-icon"
                                  src={iconProjects}
                                />
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
                            toggleHamburger();
                            setActive("/dashboard/design-school");
                          }}
                        >
                          <div className="container-fluid no-space">
                            <div className="row no-space align-items-center">
                              <div className="w-max-content no-space">
                                <img
                                  className="sblist-icon"
                                  src={iconDSchool}
                                />
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
                            toggleHamburger();
                            setActive("/dashboard/notifications");
                          }}
                        >
                          <div className="container-fluid no-space">
                            <div className="row no-space align-items-center">
                              <div className="w-max-content no-space">
                                <img
                                  className="sblist-icon"
                                  src={iconNotification}
                                />
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
                            toggleHamburger();
                            setActive("/dashboard/transactions");
                          }}
                        >
                          <div className="container-fluid no-space">
                            <div className="row no-space align-items-center">
                              <div className="w-max-content no-space">
                                <img
                                  className="sblist-icon"
                                  src={iconTransactions}
                                />
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
                            toggleHamburger();
                            setActive("/dashboard/customer-support");
                          }}
                        >
                          <div className="container-fluid no-space">
                            <div className="row no-space align-items-center">
                              <div className="w-max-content no-space">
                                <img
                                  className="sblist-icon"
                                  src={iconSupport}
                                />
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
                            toggleHamburger();
                            setActive("/dashboard/account-settings");
                          }}
                        >
                          <div className="container-fluid no-space">
                            <div className="row no-space align-items-center">
                              <div className="w-max-content no-space">
                                <img
                                  className="sblist-icon"
                                  src={iconAccountSettings}
                                />
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
                    <div className="py-3" />
                  </div>
                ) : (
                  <span></span>
                )}
                <div className="px-3">
                  <h4 className="text-bold royal-shade-5">Main Menu</h4>
                </div>

                <div className="mobile-menu-container p-3">
                  <nav>
                    <ul className="text-medium">
                      <li className="">
                        <Link
                          onClick={toggleHamburger}
                          className="text-none royal-shade-5 text-medium-1"
                          to={"/"}
                        >
                          <FontAwesomeIcon color="#608aff" icon={faHome} /> Home
                        </Link>
                      </li>
                      <div className="mobile-list-divider" />
                      <li className="">
                        <Link
                          onClick={toggleHamburger}
                          className="text-none royal-shade-5 text-medium-1"
                          to={"/services"}
                        >
                          <FontAwesomeIcon color="#608aff" icon={faBoxes} />{" "}
                          Services
                        </Link>
                      </li>
                      <div className="mobile-list-divider" />
                      <li className="">
                        <Link
                          onClick={toggleHamburger}
                          className="text-none royal-shade-5 text-medium-1"
                          to={"/exhibits"}
                        >
                          <FontAwesomeIcon color="#608aff" icon={faBullseye} />{" "}
                          Exhibits
                        </Link>
                      </li>
                      <div className="mobile-list-divider" />
                      <li className="">
                        <Link
                          onClick={toggleHamburger}
                          className="text-none royal-shade-5 text-medium-1"
                          to={"/products"}
                        >
                          <FontAwesomeIcon color="#608aff" icon={faTabletAlt} />{" "}
                          Products
                        </Link>
                      </li>
                      <div className="mobile-list-divider" />
                      <li className="">
                        <Link
                          onClick={toggleHamburger}
                          className="text-none royal-shade-5 text-medium-1"
                          to={"/blog"}
                        >
                          <FontAwesomeIcon color="#608aff" icon={faPhone} />{" "}
                          Contact
                        </Link>
                      </li>
                      <div className="mobile-list-divider" />
                      <li className="">
                        <Link
                          onClick={toggleHamburger}
                          className="text-none royal-shade-5 text-medium-1"
                          to={"/blog"}
                        >
                          <FontAwesomeIcon color="#608aff" icon={faBlog} /> Blog
                        </Link>
                      </li>
                      <div className="mobile-list-divider" />
                      <li className="">
                        <Link
                          onClick={toggleHamburger}
                          className="text-none royal-shade-5 text-medium-1"
                          to={"/blog"}
                        >
                          <FontAwesomeIcon color="#608aff" icon={faBlog} />{" "}
                          Careers
                        </Link>
                      </li>

                      <div className="mobile-list-divider" />
                      <li className="">
                        <Link
                          onClick={toggleHamburger}
                          className="text-none royal-shade-5 text-medium-1"
                          to={"/blog"}
                        >
                          <FontAwesomeIcon color="#608aff" icon={faBlog} />{" "}
                          Design School
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="py-2" />
                <div>
                  {!auth.isAuthenticated ? (
                    <div className="px-3 royal-shade-4">
                      <FButtonMain
                        iconLeft={false}
                        icon={
                          <FontAwesomeIcon icon={faArrowRight} size={"1x"} />
                        }
                        actionFn={() => {
                          navigate("/login");
                          toggleHamburger();
                        }}
                        style={{
                          width: "100%",
                          backgroundColor: "white",
                          border: "2px solid",
                          color: "#00113c",
                        }}
                      >
                        <span className="text-none text-semibold">Login</span>
                      </FButtonMain>
                    </div>
                  ) : (
                    ""
                  )}
                  {!auth.isAuthenticated ? (
                    <div className="px-3">
                      <div className="py-2" />
                      <FButtonMain
                        iconLeft={false}
                        icon={
                          <FontAwesomeIcon icon={faArrowRight} size={"1x"} />
                        }
                        actionFn={() => {
                          navigate("/signup");
                          toggleHamburger();
                        }}
                        style={{ width: "100%" }}
                      >
                        <span className="text-none text-semibold">Sign Up</span>
                      </FButtonMain>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="py-5" />
              </Overlay>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
