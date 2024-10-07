import React, { useState } from "react";
import logo from "../../assets/images/Logo Main.svg";

import "./style.css";
import { Link } from "react-router-dom";
import FButtonMain from "../Button/Main";
import Overlay from "../overlay";
import { Twirl as Hamburger } from "hamburger-react";

export function Header(): React.JSX.Element {
  function toggleHamburger() {
    setOpen(!isOpen);
  }
  const [isOpen, setOpen] = useState(false);
  return (
    <section id="header" className="py-0 py-lg-2">
      <div className="main-spacing-x">
        <div className="container-fluid no-space">
          <div className="row no-space align-items-center">
            <div className="no-space w-max-content">
              <div className="logo-container">
                <img className="logo-img" src={logo} />
              </div>
            </div>
            <div className="col no-space"></div>
            <div className="no-space d-none d-lg-block w-max-content">
              <div className="desktop-navigation-links">
                <nav>
                  <ul>
                    <li className="desktop-nav-links">
                      <Link className="text-none gray-1 text-medium" to={"/"}>
                        Home
                      </Link>
                    </li>
                    <li className="desktop-nav-links">
                      <Link
                        className="text-none gray-1 text-medium"
                        to={"/services"}
                      >
                        Services
                      </Link>
                    </li>
                    <li className="desktop-nav-links">
                      <Link
                        className="text-none gray-1 text-medium"
                        to={"/exhibits"}
                      >
                        Exhibits
                      </Link>
                    </li>
                    <li className="desktop-nav-links">
                      <Link
                        className="text-none gray-1 text-medium"
                        to={"/products"}
                      >
                        Products
                      </Link>
                    </li>
                    <li className="desktop-nav-links">
                      <Link
                        className="text-none gray-1 text-medium"
                        to={"/blog"}
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col no-space"></div>
            <div className="w-max-content no-space d-none d-sm-block">
              <div>
                <FButtonMain>Get In Touch</FButtonMain>
              </div>
            </div>
            <div className="w-max-content no-space d-block d-lg-none">
              <Hamburger
                toggled={isOpen}
                color="#000000"
                size={19}
                toggle={toggleHamburger}
              />
              <Overlay isOpen={isOpen} toggle={toggleHamburger}>
                <div className="mobile-menu-container"></div>
              </Overlay>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
