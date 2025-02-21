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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDash } from "../../contexts/DashContext";

const Home = () => {
  let navigate = useNavigate();
  let location = useLocation();

  let { updateDashStatus } = useDash();
  useEffect(() => {
    updateDashStatus(false);
    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);
  useEffect(() => {
    if (location.hash === "#services") {
      scrollToServices();
    } else if (location.hash === "#contact") {
      scrollToContact();
    } else {
      scroll.scrollToTop({
        duration: 1000, // duration of the scrolling animation in milliseconds
        smooth: "easeInOutQuart", // the type of easing
      });
    }
  }, [location]);
  function scrollToServices() {
    let element = document.querySelector("#services") as HTMLElement;
    window.scrollTo({
      top: element.offsetTop - 70, // Adjust the offset value as needed
      behavior: "smooth",
    });
  }

  function scrollToContact() {
    let element = document.querySelector("#contact") as HTMLElement;
    window.scrollTo({
      top: element.offsetTop - 70, // Adjust the offset value as needed
      behavior: "smooth",
    });
  }

  function goToPricing(qGroup: string) {
    navigate(`/pricing#${qGroup}`);
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
                <h1 className="text-bold font-family-quicksand">
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
                <div
                  className="w-max-content center d-block d-md-none"
                  onClick={scrollToServices}
                >
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
                <div
                  className="w-max-content d-none d-md-block"
                  onClick={scrollToServices}
                >
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
                  <span className="text-main">MODERN INNOVATIONS</span> AND
                  SPEED UP YOUR BUSINESS OPERATIONS AND EXPOSURE.
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
                    Branding & Identity Design
                  </h5>
                  <div className="py-1" />
                  <ul className="service-list text-p text-regular">
                    <li className="text-medium">Strategic Brand Development</li>
                    <li className="text-medium">
                      Custom Logo Creation. Distinctive and Timeless logos
                      tailored to your brand’s personality and vision.
                    </li>
                    <li className="text-medium">
                      Visual Identity Systems (Reusable) with cohesive branding
                      assets, including iconography, patterns, and graphic
                      elements, for consistent communication
                    </li>
                    <li className="text-medium">Brand Story Design</li>
                    <li className="text-medium">
                      Packaging & Merchandise Branding
                    </li>
                  </ul>
                  <div className="py-2" />
                  <FButtonMain
                    style={{ paddingLeft: "70px", paddingRight: "70px" }}
                    actionFn={() => {
                      goToPricing("branding");
                    }}
                  >
                    See Service Plans
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
                    Creative Graphics Design
                  </h5>
                  <div className="py-1" />
                  <ul className="service-list text-p text-regular">
                    <li className="text-medium">
                      High-Impact Poster & Flyer Designs to promote events,
                      products, or campaigns with maximum visual appeal.
                    </li>
                    <li className="text-medium">
                      Social Media Graphics optimized for all social platforms,
                      ensuring consistent branding across all channels.
                    </li>
                    <li className="text-medium">
                      Advertorial Style Graphics Stunning visuals specifically
                      created for ads, ensuring high click-through rates and
                      conversions.
                    </li>
                  </ul>
                  <div className="py-2" />
                  <FButtonMain
                    style={{ paddingLeft: "70px", paddingRight: "70px" }}
                    actionFn={() => {
                      goToPricing("creativeGraphicsDesign");
                    }}
                  >
                    See Service Plans
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
                    UI/UX Design
                  </h5>
                  <div className="py-1" />
                  <ul className="service-list text-p text-regular">
                    <li className="text-medium">
                      Full User Research (surveys, interviews, journey maps)
                    </li>
                    <li className="text-medium">Low-Fi and High Fi Designs </li>
                    <li className="text-medium">
                      Fully Interactive Prototyping for Proper User Testing.
                    </li>
                    <li className="text-medium">
                      Style Guide + Design System (detailed with icons and
                      reusable components for scalability)
                    </li>
                  </ul>
                  <div className="py-2" />
                  <FButtonMain
                    style={{ paddingLeft: "70px", paddingRight: "70px" }}
                    actionFn={() => {
                      goToPricing("uiUxDesign");
                    }}
                  >
                    See Service Plans
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
                    Web Development
                  </h5>
                  <div className="py-1" />
                  <ul className="service-list text-p text-regular">
                    <li className="text-medium">
                      Fully Accessible Website Design. User Friendly Interface
                      which ensures A great experience for your customers{" "}
                    </li>
                    <li className="text-medium">
                      Simplified Deployment and Assistance
                    </li>
                    <li className="text-medium">
                      SEO Optimization and SSL Security{" "}
                    </li>
                    <li className="text-medium">
                      API and Database Integrations
                    </li>
                  </ul>
                  <div className="py-2" />
                  <FButtonMain
                    style={{ paddingLeft: "70px", paddingRight: "70px" }}
                    actionFn={() => {
                      goToPricing("webDevelopment");
                    }}
                  >
                    See Service Plans
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
          <div className="py-4" />
          <div className="container-fluid no-space">
            <div className="row no-space align-items-center col-12 col-xxl-10 center">
              <div className="col-12 col-lg-5 order-last order-lg-first">
                <div className="py-2 py-lg-0" />
                <div className="s-content">
                  <h5 className="font-family-quicksand text-semibold">
                    Design and Coding Classes
                  </h5>
                  <div className="py-1" />
                  <ul className="service-list text-p text-regular">
                    <li className="text-medium">
                      Design Fundamentals - Bootcamp{" "}
                    </li>
                    <li className="text-medium">
                      Web Design Fundamentals (HTML & CSS) - Bootcamp{" "}
                    </li>
                    <li className="text-medium">
                      JavaScript and The Web, React.js - Bootcamp{" "}
                    </li>
                    <li className="text-medium">
                      Beginner To Advanced UI Design With Figma - Bootcamp
                    </li>
                  </ul>
                  <div className="py-2" />
                  <FButtonMain
                    style={{ paddingLeft: "70px", paddingRight: "70px" }}
                    actionFn={() => {
                      navigate("/bootcamps");
                    }}
                  >
                    Register For a Bootcamp
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
