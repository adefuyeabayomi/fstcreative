import React, { useEffect, useState } from "react";
import { D_TextInput } from "../../components/input/input";
import FButtonMain, { SocialButton } from "../../components/Button/Main";
import { Spin, Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";

//import validation function
import { emailIsValid, passwordIsValid } from "../../utils/validation";

// import icon images
import { useNotificationTrigger } from "../../contexts/notificationTrigger";
import googleIconSvg from "../../assets/google-logo.png";
let googleIcon = <img src={googleIconSvg} />;
import facebookIconSvg from "../../assets/FacebookLogo.svg";
let facebookIcon = <img src={facebookIconSvg} />;
import appleIconSvg from "../../assets/AppleLogo.svg";
let appleIcon = <img src={appleIconSvg} />;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { animateScroll as scroll } from "react-scroll";

const envelope = <FontAwesomeIcon icon={faEnvelope} />;

//import request function
import { Auth } from "../../apiSdks/Auth";

import "./style.css";
import { useAuth } from "../../contexts/AuthContext";
import { useLoading } from "../../contexts/LoadingContext";

interface LoginPropType {}

export default function Login({}: LoginPropType): React.JSX.Element {
  const navigate = useNavigate();
  let auth = useAuth();
  let { setLoading, setLoadingText } = useLoading();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState<boolean | null>(false);
  const [passwordValid, setPasswordValid] = useState<boolean | null>(false);
  const [pfeedbackText, setPFeedbackText] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalBody, setModalBody] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const { triggerInfo } = useNotificationTrigger();
  function goToSignup() {
    navigate("/signup");
  }
  function goToDashboard() {
    navigate("/dashboard");
  }
  function closeModal() {
    setShowModal(false);
  }

  function validateEmail() {
    setEmailValid(emailIsValid(user));
    console.log({ user });
    if (emailIsValid(user)) {
      setFeedbackText("Email is valid");
    } else if (emailIsValid(user)) {
      setFeedbackText("Input a valid email");
    } else setFeedbackText("");
  }

  function validatePassword() {
    setPasswordValid(passwordIsValid(password));
    if (passwordIsValid(password)) {
      setPFeedbackText("Password Valid");
    } else if (!passwordIsValid(password)) {
      setPFeedbackText("Password Should be 8 or more characters");
    } else setFeedbackText("");
  }

  function resetEmailInput() {
    setEmailValid(null);
  }

  function resetPasswordInput() {
    setPasswordValid(null);
  }

  function sendLogin() {
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

    Auth.postAuthLogin(user, password, "user")
      .then((response) => {
        console.log({ response });
        setShowModal(true);
        setLoading(false);
        triggerInfo({ title: "Login Successful", message: "" });
        auth.login(response.token, user);
        goToDashboard();
      })
      .catch((err) => {
        console.error({ err });
        setModalTitle("Login Error");
        setModalBody(`Reason: ${err.response.data.message || ""}`);
        setShowModal(true);
        setLoading(false);
      });
  }

  function sendLoginDummy() {
    navigate("/dashboard");
  }

  useEffect(() => {
    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);

  return (
    <main id="login">
      <Modal
        onCancel={closeModal}
        onOk={closeModal}
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
        <div className="py-4" />
        <div className="py-2" />
        <div id="signup-contents-main-container">
          <div className="container-fluid no-space">
            <div className="row no-space justify-content-center align-items-center">
              <div className="col-12 col-md-8 col-lg-7 no-space">
                <div className="signup-contents py-5 px-3">
                  <div className="text-center">
                    <h1 className="text-bold font-family-quicksand">LOGIN</h1>
                    <p className="text-medium">Input Your Valid Credentials</p>
                  </div>
                  <div className="py-3" />
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
                    <FButtonMain style={{ width: "100%" }} actionFn={sendLogin}>
                      <span className="text-none text-semibold">Login</span>
                    </FButtonMain>
                  </div>
                  <div className="py-2" />
                  <div className=" text-center">
                    <span className="text-medium text-p">
                      Don't have an account?{" "}
                      <span className="text-bold pointer" onClick={goToSignup}>
                        Create Account Here
                      </span>
                    </span>
                    <br />
                    <Link
                      to={"/forgot-password"}
                      className="text-none text-main"
                    >
                      <small className="text-bold">Forgot password?</small>
                    </Link>
                  </div>
                  <div className="py-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

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

        <Spin
          fullscreen
          tip={"Logging In, Please Wait"}
          spinning={spinning}
        ></Spin>
      </div>
    </main>
  );
}
