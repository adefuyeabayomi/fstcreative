import React, { useEffect } from "react";
import "./style.css";
import { animateScroll as scroll } from "react-scroll";
import heroImg from "../../assets/images/Default_A_techsavvy_young_black_man_smiling_as_he_works_on_his_2 1.png";
import dUIImg from "../../assets/images/dUIimg.png";
import bIconAi from "../../assets/images/bIconAi.png";
import bIconBezier from "../../assets/images/bIconBezier.png";
import bIconCode from "../../assets/images/bIconCode.png";
import bIconFigma from "../../assets/images/bIconFigma.png";
import bIconUI from "../../assets/images/bIconUI.png";
import angArrow from "../../assets/images/ang45arrow.svg";
import FButtonMain from "../../components/Button/Main";
import { useDash } from "../../contexts/DashContext";
import { useAuth } from "../../contexts/AuthContext";
import { useLoading } from "../../contexts/LoadingContext";
import { useNavigate, useSearchParams } from "react-router-dom";

const Bootcamps = (): React.JSX.Element => {
  let auth = useAuth()
  let {setLoading,setLoadingText} = useLoading()
  let navigate = useNavigate()
  let { updateDashStatus } = useDash();
  const [searchParams] = useSearchParams();
  let next = searchParams.get("next")
  useEffect(() => {
    updateDashStatus(false);
    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);
  
  function handleRegisterForBootcamp(){
    if(!auth.isAuthenticated){
      // redirect to the login / signup page
      // Now the page has a reference page.
      // next=choosePlan&serviceGroup=groupname&serviceSubgroup=subgroupname&packageType
      setLoading(true)
      setLoadingText("You need to Login to Register For Bootcamp. Redirecting to Login Page")
      setTimeout(()=>{
        setLoading(false)
        setLoadingText("")
      let path = `login?next=bootcamps&register=true`
      console.log(path)
      navigate(`/${path}`)
      },5000)
    }
  }

  return (
    <div className="main-spacing-x royal-shade-5">
      <div className="py-4" />
      <div className="py-2" />
      <div className="container-fluid no-space  text-center text-lg-left">
        <div className="row no-space align-items-center justify-content-center">
          <div className="col-12 col-md-6 col-lg-6 no-space">
            <div>
              <h1 className="text-semibold">
                Kickstart Your Tech Career with Hands-On Learning
              </h1>
            </div>
            <div className="py-2" />
            <div>
              <div className="container-fluid no-space">
                <div className="row no-space">
                  <div className="col no-space">
                    <img src={bIconFigma} className="bHicon" />
                  </div>
                  <div className="col no-space">
                    <img className="bHicon" src={bIconCode} />
                  </div>
                  <div className="col no-space">
                    <img className="bHicon" src={bIconBezier} />
                  </div>
                  <div className="col no-space">
                    <img className="bHicon" src={bIconUI} />
                  </div>
                  <div className="col no-space">
                    <img className="bHicon" src={bIconAi} />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-2" />
            <div>
              <h6 className="text-medium-1 bHSubline center d-block d-lg-none">
                Start Your Design Journey with Our Bootcamp—Coding Coming Soon!
              </h6>
              <h6 className="text-medium-1 bHSubline d-none d-lg-block">
                Start Your Design Journey with Our Bootcamp—Coding Coming Soon!
              </h6>
              <p className="bHSubline text-medium  center d-block d-lg-none">
                Explore our current Product Design Bootcamp and gain hands-on
                experience in UI/UX, visual design, and interactive prototyping.
                As we grow, expect even more opportunities, including coding
                bootcamps!
              </p>
              <p className="bHSubline text-medium d-none d-lg-block">
                Explore our current Product Design Bootcamp and gain hands-on
                experience in UI/UX, visual design, and interactive prototyping.
                As we grow, expect even more opportunities, including coding
                bootcamps!
              </p>
              <div className="py-4 py-md-0" />
            </div>
          </div>
          <div className="col-12 col-md-6 no-space">
            <div className="p-2 py-md-0 py-lg-2">
              <img className="bHeroImgMain" src={heroImg} />
            </div>
          </div>
        </div>
      </div>

      <div className="py-4" />
      <div className="d-divider-half gray-11-bg"></div>
      <div className="py-4" />
      <div>
        <h5 className="royal">
          EXPLORE <img className="bExploreArrow" src={angArrow} />
        </h5>
      </div>
      <div>
        <div className="py-4" />
        <div className="">
          <div className="container-fluid no-space">
            <div className="row no-space align-items-center">
              <div className="w-max-content no-space">
                <p className="text-semibold">3 Months Bootcamp</p>
              </div>
              <div className="col no-space" />
              <div className="w-max-content  no-space">
                <p className="text-semibold p-2 fade-border">
                  Starts March 14<sup>th</sup>
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-semibold">
              Product Design Bootcamp (Beginner to Advanced)
            </h3>
            <div className="py-2" />
            <h6 className="text-semibold">
              🚀 Master UI/UX & Visual Design in Just 3 Months!
            </h6>

            <div className="py-2" />
            <div>
              <ul className="font-family-quicksand gray-3 text-medium-1 text-p ad-list-container">
                <li>
                  ✅ <span className="text-semibold gray-2">Start Date:</span>{" "}
                  14th March, 2025
                </li>
                <li>
                  ✅ <span className="text-semibold gray-2">Duration:</span> 12
                  Weeks (Live Sessions + Hands-on Practicals)
                </li>
                <li>
                  ✅ <span className="text-semibold gray-2">Skill Level:</span>{" "}
                  Total Beginner to Advanced
                </li>
                <li>
                  ✅ <span className="text-semibold gray-2">Mode:</span> Online
                  (Live + Recorded Sessions)
                </li>
              </ul>
            </div>
          </div>
          <div className="py-2" />
          <div className="fade-border r-10 p-2">
            <img src={dUIImg} className="r-5 w-100" />
          </div>
          <div className="py-3" />
          <div>
            <h6 className="text-semibold">What You'll Learn</h6>

            <div className="py-2" />
            <ul className=" bPageList font-family-quicksand gray-3 text-medium-1 text-p ad-list-container">
              <li>
                🔹{" "}
                <span className="text-semibold gray-2">
                  Basics of Visual Design –{" "}
                </span>{" "}
                Master design principles, color theory, and typography.
              </li>
              <li>
                🔹{" "}
                <span className="text-semibold gray-2">
                  Logo Design & Vector Editing (Inkscape) –{" "}
                </span>{" "}
                Create stunning logos and scalable vector graphics.
              </li>
              <li>
                🔹{" "}
                <span className="text-semibold gray-2">
                  Fundamentals of UI/UX Design (Figma) –
                </span>{" "}
                Learn wireframing, prototyping, and user research.
              </li>
              <li>
                🔹{" "}
                <span className="text-semibold gray-2">
                  Design Systems and Libraries –{" "}
                </span>{" "}
                Build reusable UI components for scalable projects.
              </li>
              <li>
                🔹{" "}
                <span className="text-semibold gray-2">
                  Advanced UI Design –{" "}
                </span>{" "}
                Craft polished, high-quality interfaces that stand out.
              </li>
              <li>
                🔹{" "}
                <span className="text-semibold gray-2">
                  Interaction & Motion Design –{" "}
                </span>{" "}
                Create immersive experiences with animations and
                micro-interactions.
              </li>
              <li>
                🔹{" "}
                <span className="text-semibold gray-2">
                  Product Development Lifecycle –{" "}
                </span>{" "}
                Work in a team setting, collaborate on projects, and understand
                real-world workflows.
              </li>
              <li>
                🔹{" "}
                <span className="text-semibold gray-2">
                  Live Sessions & Portfolio Projects –{" "}
                </span>{" "}
                Gain hands-on experience and showcase your work to potential
                employers.
              </li>
            </ul>
          </div>
          <div className="py-3" />
          <div>
            <h6 className="text-semibold">Why This Bootcamp?</h6>

            <div className="py-2" />
            <ul className=" bPageList font-family-quicksand gray-3 text-medium-1 text-p ad-list-container">
              <li>
                💡{" "}
                <span className="text-semibold gray-2">
                  {" "}
                  Industry-Relevant Training –{" "}
                </span>{" "}
                Learn exactly what top companies look for in designers.
              </li>
              <li>
                🖥{" "}
                <span className="text-semibold gray-2">
                  {" "}
                  Practical Hands-on Approach –{" "}
                </span>{" "}
                Apply your knowledge through real-world projects.
              </li>
              <li>
                📂{" "}
                <span className="text-semibold gray-2">
                  {" "}
                  Build a Portfolio That Stands Out –{" "}
                </span>{" "}
                Work on projects that impress recruiters.
              </li>
              <li>
                👨‍🏫{" "}
                <span className="text-semibold gray-2">
                  {" "}
                  Expert Mentorship & Guidance –{" "}
                </span>{" "}
                Get personalized feedback from industry professionals.
              </li>
              <li>
                🤝{" "}
                <span className="text-semibold gray-2">
                  {" "}
                  Community & Collaboration –{" "}
                </span>{" "}
                Join a network of aspiring designers and start working on real
                products.
              </li>
            </ul>
          </div>
          <div className="py-3" />
          <div>
            <h6 className="text-semibold">
              By the End of This Bootcamp, You’ll Be Able To:
            </h6>

            <div className="py-2" />
            <ul className=" bPageList font-family-quicksand gray-3 text-medium-1 text-p ad-list-container">
              <li>
                ✅ Design high-quality user interfaces & experiences from
                scratch.
              </li>
              <li>✅ Work with modern design tools (Figma, Inkscape, etc.).</li>
              <li>✅ Build and contribute to real-world products.</li>
              <li>
                ✅ Create a compelling portfolio that attracts job offers.
              </li>
            </ul>
          </div>
          <div className="py-3" />

          <h6 className="text-bold font-family-arial">
            Ready to Start Your Design Journey?
          </h6>
          <div className="py-1" />
          <p className="text-semibold">🚀 Register Now and Secure Your Spot!</p>

          <div className="py-3" />
          <div>
            <FButtonMain actionFn={handleRegisterForBootcamp} style={{ width: "100%" }}>Register</FButtonMain>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bootcamps;
