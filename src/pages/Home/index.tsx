import "./style.css";

import heroImg from "../../assets/images/Hero-section.png";
import s2 from "../../assets/images/s2.png";
import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/images/service3.png";
import service4 from "../../assets/images/service4.png";
import contactCall from "../../assets/images/contact-call.png";
import contactWhatsapp from "../../assets/images/contact-whatsapp.png";
import contactEmail from "../../assets/images/contact-email.png";
import { animateScroll as scroll } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import FButtonMain from "../../components/Button/Main";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  let navigate = useNavigate();
  useEffect(() => {
    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);
  function scrollToServices() {
    let element = document.querySelector("#services") as HTMLElement;
    window.scrollTo({
      top: element.offsetTop - 70, // Adjust the offset value as needed
      behavior: "smooth",
    });
  }
  function goToQuotationRequest(qGroup: string) {
    navigate(`/quotation-request#${qGroup}`);
  }
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
                <div className="w-max-content" onClick={scrollToServices}>
                  <FButtonMain
                    style={{
                      borderRadius: "50px",
                      paddingLeft: "70px",
                      paddingRight: "70px",
                    }}
                    icon={<FontAwesomeIcon icon={faLocationArrow} />}
                    iconLeft={false}
                  >
                    Our Services
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

        <div id="section-2" className="container-fluid no-space">
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
                  TAKE ADVANTAGE OF{" "}
                  <span className="text-main">MODERN INNOVATIONS</span> TO SPEED
                  UP YOUR BUSINESS OPERATIONS AND EXPOSURE.
                </h1>
                <div className="py-2" />
                <p className="text-regular">
                  Having a website and a mobile application brings you just
                  clicks away from getting a new client, making a new sale,
                  getting one more prospect to see your business. Let's help you
                  get visibility for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-divider-1 gray-11-bg my-5" />
        <div id="services">
          <div className="text-center service-text container">
            <div className="py-2" />
            <h1 className="font-family-quicksand text-semibold">
              OUR <span className="text-main">SERVICES</span>
            </h1>
            <div className="py-2" />
            <p className="text-regular">
              Discover how our diverse suite of services can help you navigate
              the digital landscape with ease, offering innovative solutions
              tailored to your unique needs.
            </p>
          </div>
          <div className="py-4" />
          <div className="container-fluid no-space">
            <div className="row no-space align-items-center col-12 col-xxl-10 center">
              <div className="col-12 col-lg-5 order-last order-lg-first">
                <div className="py-2 py-lg-0" />
                <div className="s-content">
                  <h5 className="font-family-quicksand text-semibold">
                    Digital product design and development.
                  </h5>
                  <div className="py-1" />
                  <ul className="service-list text-p text-regular">
                    <li className="text-medium">Web Development</li>
                    <li className="text-medium">Mobile App Development</li>
                    <li className="text-medium">UI/UX Design</li>
                    <li className="text-medium">Product Management</li>
                  </ul>
                  <div className="py-2" />
                  <FButtonMain
                    style={{ paddingLeft: "70px", paddingRight: "70px" }}
                    actionFn={() => {
                      goToQuotationRequest("product-development");
                    }}
                  >
                    Get Quotation
                  </FButtonMain>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="img-container s-image">
                  <img src={service1} />
                </div>
              </div>
            </div>
          </div>
          <div className="py-4" />
          <div className="container-fluid no-space">
            <div className="row no-space align-items-center col-12 col-xxl-10 center">
              <div className="col-12 col-lg-5 order-last">
                <div className="py-2 py-lg-0" />
                <div className="s-content">
                  <h5 className="font-family-quicksand text-semibold">
                    Digital Content Creation and Social Media Management.
                  </h5>
                  <div className="py-1" />
                  <ul className="service-list text-p text-regular">
                    <li className="text-medium">Copywriting</li>
                    <li className="text-medium">Social Media Management</li>
                    <li className="text-medium">Blog Management</li>
                  </ul>
                  <div className="py-2" />
                  <FButtonMain
                    style={{ paddingLeft: "70px", paddingRight: "70px" }}
                    actionFn={() => {
                      goToQuotationRequest("content-creation");
                    }}
                  >
                    Get Quotation
                  </FButtonMain>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="img-container s-image">
                  <img src={service2} />
                </div>
              </div>
            </div>
          </div>
          <div className="py-4" />
          <div className="container-fluid no-space">
            <div className="row no-space align-items-center col-12 col-xxl-10 center">
              <div className="col-12 col-lg-5 order-last order-lg-first">
                <div className="py-2 py-lg-0" />
                <div className="s-content">
                  <h5 className="font-family-quicksand text-semibold">
                    Animation and Story Illustration.
                  </h5>
                  <div className="py-1" />
                  <ul className="service-list text-p text-regular">
                    <li className="text-medium">2d Animations</li>
                    <li className="text-medium">Story Illustrations </li>
                    <li className="text-medium">
                      Product Ads Video & Animations
                    </li>
                  </ul>
                  <div className="py-2" />
                  <FButtonMain
                    style={{ paddingLeft: "70px", paddingRight: "70px" }}
                    actionFn={() => {
                      goToQuotationRequest("animations");
                    }}
                  >
                    Get Quotation
                  </FButtonMain>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="img-container s-image">
                  <img src={service3} />
                </div>
              </div>
            </div>
          </div>
          <div className="py-4" />
          <div className="container-fluid no-space">
            <div className="row no-space align-items-center col-12 col-xxl-10 center">
              <div className="col-12 col-lg-5 order-last">
                <div className="py-2 py-lg-0" />
                <div className="s-content">
                  <h5 className="font-family-quicksand text-semibold">
                    Design Classes.
                  </h5>
                  <div className="py-1" />
                  <ul className="service-list text-p text-regular">
                    <li className="text-medium">Design Basics</li>
                    <li className="text-medium">Basic Web Development</li>
                    <li className="text-medium">Front End Frameworks </li>
                    <li className="text-medium">UI / UX Design Classes</li>
                  </ul>
                  <div className="py-2" />
                  <FButtonMain
                    style={{ paddingLeft: "70px", paddingRight: "70px" }}
                    actionFn={() => {
                      goToQuotationRequest("coding-school");
                    }}
                  >
                    Go To Class
                  </FButtonMain>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="img-container s-image">
                  <img src={service4} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-divider-1 gray-11-bg my-5" />
        <div id="contact">
          <div className="service-text-container">
            <div className="py-2" />
            <h1 className="text-center font-family-quicksand text-semibold">
              GET IN <span className="text-main">CONTACT</span>
            </h1>
            <div className="py-2" />
            <p className="text-center text-regular">
              Reach us via the following channels for further enquires, feedback
              or complaints.
            </p>
            <div className="py-3" />
            <div className="container-fluid no-space">
              <div className="row g-2">
                <div className="col-12 col-md-4">
                  <div className="py-2 py-md-0" />
                  <div className="contact-item">
                    <div className="w-max-content center">
                      <div className="img-container">
                        <img className="contact-image" src={contactCall} />
                      </div>
                    </div>
                    <div className="px-2 text-center">
                      <h6 className="font-family-quicksand text-semibold">
                        Call
                      </h6>
                      <p className="text-regular">
                        <Link
                          className="text-none text-regular mw-150 text-dark"
                          to={"tel:+2348136243796"}
                        >
                          08136243796
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="py-2 py-md-0" />
                  <div className="contact-item">
                    <div className="w-max-content center">
                      <div className="img-container">
                        <img className="contact-image" src={contactWhatsapp} />
                      </div>
                    </div>
                    <div className="px-2 text-center">
                      <h6 className="font-family-quicksand text-semibold">
                        WhatsApp
                      </h6>
                      <p className="text-regular">
                        <Link
                          className="text-none text-regular mw-150 text-dark"
                          to={"https://wa.me/+2348136243796"}
                        >
                          08136243796
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="py-2 py-md-0" />
                  <div className="contact-item">
                    <div className="w-max-content center">
                      <div className="img-container">
                        <img className="contact-image" src={contactEmail} />
                      </div>
                    </div>
                    <div className="px-2 text-center">
                      <h6 className="font-family-quicksand text-semibold">
                        Email
                      </h6>
                      <p className="text-regular">
                        <Link
                          className="text-none text-regular mw-150 text-dark"
                          to={"mailto:adefuyeabayomi16@gmail.com"}
                        >
                          adefuyeabayomi16gmail.com
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
