import "./style.css";

import heroImg from "../../assets/images/Hero-section.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import FButtonMain from "../../components/Button/Main";

const Home = () => {
  return (
    <main id="home" className="homepage-container">
      <div className="main-spacing-x">
        <div className="py-0 py-md-2 py-lg-4" />
        <div className="container-fluid no-space">
          <div className="row no-space align-items-center">
            <div className="col-12 col-md-6">
              <div className="hero-text-contents-container text-lg-left text-center">
                <div className="py-4" />
                <div className="hero-accent-container center d-block d-md-none">
                  <p>
                    <FontAwesomeIcon icon={faStarHalfStroke} /> Hi, Welcome{" "}
                    <span className="d-inline d-md-none">to FST</span>
                    <span className="d-none d-md-inline">
                      to Five & Six Technologies
                    </span>{" "}
                    <FontAwesomeIcon icon={faStarHalfStroke} />
                  </p>
                </div>
                <div className="hero-accent-container d-none d-md-block">
                  <p>
                    <FontAwesomeIcon icon={faStarHalfStroke} /> Hi, Welcome{" "}
                    <span className="d-inline d-md-none">to FST</span>
                    <span className="d-none d-md-inline">
                      to Five & Six Technologies
                    </span>{" "}
                    <FontAwesomeIcon icon={faStarHalfStroke} />
                  </p>
                </div>
                <div className="py-2" />
                <h1 className="font-family-quicksand text-semibold">
                  WE CREATE <span className="text-main">RESULT DRIVEN</span>{" "}
                  DIGITAL SOLUTIONS
                </h1>
                <div className="py-2" />
                <p className="text-regular">
                  At Five & Six Technologies, our mission is to drive your
                  business forward. We build websites and mobile apps that
                  increase sales, enhance brand visibility, engage customers
                  effectively, and generate valuable leads, ensuring tangible
                  growth and success for your business.
                </p>
                <div className="py-2" />
                <div>
                  <FButtonMain
                    style={{
                      borderRadius: "50px",
                      paddingLeft: "70px",
                      paddingRight: "70px",
                    }}
                    icon={<FontAwesomeIcon icon={faLocationArrow} />}
                    iconLeft={false}
                  >
                    Explore
                  </FButtonMain>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              
            <div className="py-4 py-md-0" />
              <div className="hero-img-container img-container">
                <img src={heroImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
