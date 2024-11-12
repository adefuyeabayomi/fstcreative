import { Link } from "react-router-dom";

import logoBlue from "../../assets/images/logo-blue.svg";

import "./style.css";

export function Footer(): React.JSX.Element {
  return (
    <footer className="footer text-center text-lg-left">
      <div className="main-spacing-x">
        <div className="py-4" />
        <div className="container-fluid no-space">
          <div className="row no-space justify-content-center">
            <div className="col-12 col-md-6 col-lg-3 col-xl-3 order-last order-xl-first d-md-none d-xl-block">
              <div className="py-4 py-md-0" />
              <div className="footer-logo-container white">
                <div className="w-max-content center">
                  <img src={logoBlue} className="footer-logo" />
                </div>
                <div className="text-center">
                  <p className="text-semibold">Five and Six Technologies</p>
                  <p className="text-regular">Art & Design</p>
                  <p className="text-regular">Systems & Structure</p>
                  <p className="text-regular">Brilliance & Collaboration</p>
                </div>
              </div>
            </div>
            <div className="col-xl-1 d-none d-xl-block"></div>

            <div className="col-12 col-md-6 col-lg-3 col-xl-2 no-space">
              <div className="py-0 py-md-0" />
              <div className="footer-contents-container white">
                <h6 className="font-family-quicksand text-semibold">Explore</h6>
                <div className="py-1" />
                <ul className="footer-list text-p text-medium">
                  <li>
                    <Link className="text-none white text-regular" to={""}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="text-none white text-regular" to={""}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className="text-none white text-regular" to={""}>
                      Our Works
                    </Link>
                  </li>
                  <li>
                    <Link className="text-none white text-regular" to={""}>
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link className="text-none white text-regular" to={""}>
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 col-xl-2 no-space">
              <div className="py-4 py-md-0" />
              <div className="footer-contents-container white">
                <div className="footer-contents-container white">
                  <h6 className="font-family-quicksand text-semibold">
                    Services
                  </h6>
                  <div className="py-1" />
                  <ul className="footer-list text-p text-medium">
                    <li>
                      <Link className="text-none text-regular white" to={""}>
                        Web & Mobile Development
                      </Link>
                    </li>
                    <li>
                      <Link className="text-none white text-regular" to={""}>
                        UI/UX Design
                      </Link>
                    </li>
                    <li>
                      <Link className="text-none white text-regular" to={""}>
                        Digital Content Creation
                      </Link>
                    </li>
                    <li>
                      <Link className="text-none white text-regular" to={""}>
                        Animations and Ad's Creation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 col-xl-2 no-space">
              <div className="py-4 py-md-2 py-lg-0" />
              <div className="footer-contents-container white">
                <div className="footer-contents-container white">
                  <h6 className="font-family-quicksand text-semibold">
                    Products
                  </h6>
                  <div className="py-1" />
                  <ul className="footer-list text-p text-medium">
                    <li>
                      <Link className="text-none text-regular white" to={""}>
                        Nikko Blogger
                      </Link>
                    </li>
                    <li>
                      <Link className="text-none white text-regular" to={""}>
                        Showa
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 col-xl-2 no-space">
              <div className="py-4 py-md-2 py-lg-0" />
              <div className="footer-contents-container white">
                <div className="footer-contents-container white">
                  <h6 className="font-family-quicksand text-semibold">
                    Design School
                  </h6>
                  <div className="py-1" />
                  <ul className="footer-list text-p text-medium">
                    <li>
                      <Link className="text-none text-regular white" to={""}>
                        Design Basics
                      </Link>
                    </li>
                    <li>
                      <Link className="text-none white text-regular" to={""}>
                        Intermidiate UI Design
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4" />
    </footer>
  );
}
