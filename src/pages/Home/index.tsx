import "./style.css";

import heroImg from "../../assets/images/Hero-section.png";
import s2 from "../../assets/images/s2.png"
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
              <div className="img-container">
                <img src={heroImg} />
              </div>
            </div>
          </div>
        </div>
        <div className="d-divider-1 gray-11-bg my-5" />
        
        <div className="container-fluid no-space">
          <div className="row no-space align-items-end">
            
          <div className="col-12 col-lg-6 order-last order-md-first d-md-none d-lg-block">
              <div className="py-4 py-md-0" />
                <div className="img-container">
                  <img src={s2} />
                </div>
              </div>
            <div className="col-12 col-lg-6">
              <div className="hero-text-contents-container text-lg-left text-center">
                <div className="py-2" />
                <h1 className="font-family-quicksand text-semibold">
                  TAKE ADVANTAGE OF <span className="text-main">MODERN INNOVATIONS</span>{" "} TO SPEED UP YOUR BUSINESS OPERATIONS AND EXPOSURE.
                </h1>
                <div className="py-2" />
                <p className="text-regular">
                Having a website and a mobile application brings you just clicks away from getting a new client, making a new sale, getting one more prospect to see your business. Let's help you get visibility for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
