import React, { useEffect, useState } from "react";
import { D_TextInput } from "../../components/input/input";
import FButtonMain, { SocialButton } from "../../components/Button/Main";
import { Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";

//import validation function
import { emailIsValid, passwordIsValid } from "../../utils/validation";

// import icon images
import googleIconSvg from "../../assets/google-logo.png";
let googleIcon = <img src={googleIconSvg} />;
import facebookIconSvg from "../../assets/FacebookLogo.svg";
let facebookIcon = <img src={facebookIconSvg} />;
import appleIconSvg from "../../assets/AppleLogo.svg";
let appleIcon = <img src={appleIconSvg} />;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const envelope = <FontAwesomeIcon icon={faEnvelope} />;

import "./style.css";

import { animateScroll as scroll } from "react-scroll";
import { useLoading } from "../../contexts/LoadingContext";
import { Auth } from "../../apiSdks/Auth";

interface SignUpPropType {}

export default function SignUp({}: SignUpPropType): React.JSX.Element {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  let { setLoading, setLoadingText } = useLoading();
  const [emailValid, setEmailValid] = useState<boolean | null>(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState<boolean | null>(false);
  const [pfeedbackText, setPFeedbackText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalBody, setModalBody] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [okayText, setOkayText] = useState("Okay");

  function goToLogin() {
    navigate("/login");
  }

  function closeModal() {
    setShowModal(false);
  }
  /*
  function goToVerify() {
    navigate("/verify");
  }

  function goToDashboard() {
    navigate("/dashboard");
  }

 */

  function validateEmail() {
    setEmailValid(emailIsValid(user));
    if (emailIsValid(user)) {
      setFeedbackText("Email is valid");
    } else if (emailIsValid(user)) {
      setFeedbackText("Input a valid email");
    } else setFeedbackText("");
  }

  function resetEmailInput() {
    setEmailValid(null);
  }

  function validatePassword() {
    setPasswordValid(passwordIsValid(password));
    if (passwordIsValid(password)) {
      setPFeedbackText("Password Valid");
    } else if (!passwordIsValid(password)) {
      setPFeedbackText("Password Should be 8 or more characters");
    } else setFeedbackText("");
  }

  function resetPasswordInput() {
    setPasswordValid(null);
  }

  function sendSignup() {
    console.log("clicked");
    validateEmail();
    validatePassword();
    if (!emailIsValid(user)) {
      setFeedbackText("Input a valid email");
      return;
    }
    if (!passwordIsValid(password)) {
      setPFeedbackText("Password Should be 8 or more characters");
      return;
    }

    // begin-loading
    setLoading(true);
    setLoadingText("Creating Account. Please Wait...");
    Auth.postAuthSignupEmailandpassword(user, password, "user")
      .then(() => {
        setLoading(false);
        setModalTitle("Success. Verify Your Account");
        setModalBody(
          `Thank you for signing up. A verification mail has been sent to your email. Please verify your mail to continue using our service.`,
        );
        setShowModal(true);
        setOkayText("Login");
      })
      .catch((err) => {
        setModalTitle("Signup Error");
        setModalBody(`Reason: ${err.message}`);
        setShowModal(true);
        setLoading(false);
      });
  }

  useEffect(() => {
    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);

  return (
    <main id="signup" className="royal-shade-5">
      <Modal
        onCancel={closeModal}
        onOk={okayText == "Okay" ? closeModal : goToLogin}
        okText={okayText}
        open={showModal}
        closable={true}
      >
        <div className="py-3" />
        <h5 className="text-bold text-center">{modalTitle}</h5>
        <div className="py-1" />
        <p className="text-small text-center">{modalBody}</p>
        <div className="py-2" />
      </Modal>
      <div className="main-spacing-x w-100">
        <div id="signup-contents-main-container">
          <div className="py-2" />
          <div className="py-2" />
          <div className="container-fluid no-space">
            <div className="row no-space justify-content-center align-items-center">
              <div className="col-12 col-md-8 col-lg-7 no-space">
                <div className="signup-contents white-bg py-5 px-3">
                  <div className="text-center">
                    <h1 className="text-bold font-family-quicksand">
                      CREATE NEW ACCOUNT
                    </h1>
                    <p className="text-medium">Input Your Valid Credentials</p>
                  </div>
                  <div className="py-1" />
                  <div>
                    <div>
                      <D_TextInput
                        valid={emailValid}
                        feedbackText={feedbackText}
                        onFocus={resetEmailInput}
                        value={user}
                        onChange={setUser}
                        leftIcon={envelope}
                        placeholder="User ID / Email"
                        dark={false}
                      />
                    </div>
                    <div className="py-2" />
                    <div>
                      <D_TextInput
                        valid={passwordValid}
                        onFocus={resetPasswordInput}
                        feedbackText={pfeedbackText}
                        value={password}
                        onChange={setPassword}
                        type="password"
                        placeholder="Password"
                        dark={false}
                      />
                    </div>
                    <div className="py-2" />
                  </div>
                  <div>
                    <p className="text-medium text-center">
                      By Signing up, you agree to our{" "}
                      <Link to={"/terms-and-conditions"}>
                        terms and conditions.
                      </Link>{" "}
                      and <Link to={"/privacy-policy"}>privacy policy.</Link>
                    </p>
                  </div>
                  <div className="py-2" />
                  <div>
                    <FButtonMain
                      style={{ width: "100%" }}
                      actionFn={sendSignup}
                    >
                      <span className="text-none text-semibold">
                        Create Account
                      </span>
                    </FButtonMain>
                  </div>
                  <div className="py-2" />
                  <div className=" text-center">
                    <span className="text-p text-medium">
                      Already have an account?{" "}
                      <span className="text-bold pointer" onClick={goToLogin}>
                        Login Here
                      </span>
                    </span>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-divider-2 gray-10-bg" />
        <div className="py-1" />
        <div className="py-2" />

        <div className="container-fluid no-space">
          <div className="row no-space col-12 col-lg-10 col-xl-8 center">
            <div className="col-11 center col-md-4 no-space">
              <div className="py-1" />
              <div className="px-1">
                <SocialButton
                  icon={googleIcon}
                  actionFn={() => {}}
                  text="Sign In With Google"
                />
              </div>
            </div>
            <div className="col-11 center col-md-4 no-space">
              <div className="py-1" />
              <div className="px-1">
                <SocialButton
                  icon={facebookIcon}
                  actionFn={() => {}}
                  text="Sign In With Facebook"
                />
              </div>
            </div>
            <div className="col-11 center col-md-4 no-space">
              <div className="py-1" />
              <div className="px-1">
                <SocialButton
                  icon={appleIcon}
                  actionFn={() => {}}
                  text="Sign In With Apple"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-2" />
        <div className="py-2" />
      </div>
    </main>
  );
}
