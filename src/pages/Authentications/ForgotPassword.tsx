import React, { useEffect, useState } from "react";
import { D_TextInput } from "../../components/input/input";
import FButtonMain from "../../components/Button/Main";
import { Spin, Modal } from "antd";

//import validation function
import { emailIsValid } from "../../utils/validation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "../../services/auth";
import { useNotificationTrigger } from "../../contexts/notificationTrigger";
import { animateScroll as scroll } from "react-scroll";

const envelope = <FontAwesomeIcon icon={faEnvelope} />;

interface ForgotPasswordPropType {}

export default function ForgotPassword({}: ForgotPasswordPropType): React.JSX.Element {
  const [user, setUser] = useState("");
  const [emailValid, setEmailValid] = useState<boolean | null>(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { triggerError } = useNotificationTrigger();

  function closeModal() {
    setShowModal(false);
  }

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
  function sendForgotPassword() {
    validateEmail();
    if (!emailIsValid(user)) {
      setFeedbackText("Input a valid email");
      return;
    }
    // begin-loading
    setSpinning(true);
    AuthService.forgotPassword({ email: user })
      .then(() => {
        setSpinning(false);
        setShowModal(true);
      })
      .catch((err) => {
        console.error({ err });
        triggerError({ title: "Error Occured", message: err.message });
        setSpinning(false);
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
    <main id="ForgotPassword">
      <Modal
        onCancel={closeModal}
        onOk={closeModal}
        open={showModal}
        closable={true}
      >
        <div className="py-3" />
        <p className="text-bold text-center">
          AN EMAIL HAS BEEN SENT. FOLLOW THE INSTRUCTIONS IN IT TO RECOVER YOUR
          EMAIL.
        </p>
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
                    <h1 className="text-bold font-family-quicksand">
                      FORGOT PASSWORD
                    </h1>
                    <p className="text-medium">
                      Please input the email you used to create the account. If
                      the email exists on our database. Follow the instructions
                      in the mail to reset your password.
                    </p>
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
                  </div>
                  <div>
                    <FButtonMain
                      style={{ width: "100%" }}
                      actionFn={sendForgotPassword}
                    >
                      <span className="text-none text-semibold">
                        Send Recovery Email
                      </span>
                    </FButtonMain>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Spin
          fullscreen
          tip={"Sending Recovery Mail, Please Wait"}
          spinning={spinning}
        ></Spin>
      </div>
    </main>
  );
}
