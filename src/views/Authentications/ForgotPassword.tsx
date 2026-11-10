"use client";

import React, { useEffect, useState } from "react";
import { D_TextInput } from "../../components/input/input";
import FButtonMain from "../../components/Button/Main";
import { Modal } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { animateScroll as scroll } from "react-scroll";

import { emailIsValid } from "../../utils/validation";
import { useNotificationTrigger } from "../../contexts/notificationTrigger";
import { useAuth } from "../../contexts/AuthContext";

const envelope = <FontAwesomeIcon icon={faEnvelope} />;
const shield = <FontAwesomeIcon icon={faShieldAlt} />;
const lock = <FontAwesomeIcon icon={faLock} />;

type Step = "email" | "reset";

export default function ForgotPassword(): React.JSX.Element {
  const router = useRouter();
  const auth = useAuth();
  const { triggerError, triggerInfo } = useNotificationTrigger();
  const searchParams = useSearchParams() ?? new URLSearchParams();

  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailValid, setEmailValid] = useState<boolean | null>(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [showModal, setShowModal] = useState(false);

  function goToLogin() {
    router.push(
      searchParams.toString() ? `/login?${searchParams.toString()}` : "/login",
    );
  }

  function validateEmail() {
    setEmailValid(emailIsValid(email));
    if (!emailIsValid(email)) setFeedbackText("Input a valid email");
    else setFeedbackText("Email is valid");
  }

  async function requestResetCode() {
    validateEmail();
    if (!emailIsValid(email)) return;

    try {
      const message = await auth.forgotPassword(email);
      setStep("reset");
      setOtp("");
      triggerInfo({
        title: "Check your email",
        message,
      });
    } catch (error) {
      triggerError({
        title: "Could not send recovery code",
        message: error instanceof Error ? error.message : "Please try again.",
      });
    }
  }

  async function submitReset() {
    if (!/^\d{6}$/.test(otp)) {
      triggerError({
        title: "Invalid code",
        message: "Enter the 6-digit code from your email.",
      });
      return;
    }
    if (newPassword.length < 8) {
      triggerError({
        title: "Weak password",
        message: "Use at least 8 characters.",
      });
      return;
    }
    if (newPassword !== confirmPassword) {
      triggerError({
        title: "Passwords do not match",
        message: "Re-enter the same password in both fields.",
      });
      return;
    }

    try {
      await auth.resetPassword(email, otp, newPassword);
      setShowModal(true);
    } catch (error) {
      triggerError({
        title: "Could not reset password",
        message: error instanceof Error ? error.message : "Please try again.",
      });
    }
  }

  useEffect(() => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: "easeInOutQuart",
    });
  }, []);

  return (
    <main id="ForgotPassword">
      <Modal
        onCancel={goToLogin}
        onOk={goToLogin}
        open={showModal}
        closable={true}
        okText={"Go To Login"}
      >
        <div className="py-3" />
        <p className="text-bold text-center">
          PASSWORD RESET SUCCESSFUL. LOGIN NOW.
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
                      {step === "email" ? "FORGOT PASSWORD" : "RESET PASSWORD"}
                    </h1>
                    <p className="text-medium">
                      {step === "email"
                        ? "Input the email you used to create your account. If it exists, we will send you a 6-digit recovery code."
                        : `Enter the code sent to ${email} and choose a new password.`}
                    </p>
                  </div>
                  <div className="py-3" />

                  {step === "email" ? (
                    <>
                      <div>
                        <D_TextInput
                          valid={emailValid}
                          feedbackText={feedbackText}
                          onFocus={() => setEmailValid(null)}
                          value={email}
                          onChange={setEmail}
                          leftIcon={envelope}
                          placeholder="User ID / Email"
                          dark={false}
                        />
                      </div>
                      <div className="py-2" />
                      <div>
                        <FButtonMain
                          style={{ width: "100%" }}
                          actionFn={requestResetCode}
                        >
                          <span className="text-none text-semibold">
                            Send Recovery Code
                          </span>
                        </FButtonMain>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <D_TextInput
                          valid={/^\d{6}$/.test(otp) ? true : null}
                          feedbackText=""
                          value={otp}
                          onChange={setOtp}
                          leftIcon={shield}
                          placeholder="6-digit recovery code"
                          dark={false}
                        />
                      </div>
                      <div className="py-2" />
                      <div>
                        <D_TextInput
                          valid={newPassword.length >= 8 ? true : null}
                          feedbackText=""
                          value={newPassword}
                          onChange={setNewPassword}
                          type="password"
                          leftIcon={lock}
                          placeholder="New Password"
                          dark={false}
                        />
                      </div>
                      <div className="py-2" />
                      <div>
                        <D_TextInput
                          valid={
                            confirmPassword.length > 0
                              ? confirmPassword === newPassword
                              : null
                          }
                          feedbackText={
                            confirmPassword.length > 0 &&
                            confirmPassword !== newPassword
                              ? "Passwords do not match"
                              : ""
                          }
                          value={confirmPassword}
                          onChange={setConfirmPassword}
                          type="password"
                          leftIcon={lock}
                          placeholder="Confirm New Password"
                          dark={false}
                        />
                      </div>
                      <div className="py-2" />
                      <div>
                        <FButtonMain
                          style={{ width: "100%" }}
                          actionFn={submitReset}
                        >
                          <span className="text-none text-semibold">
                            Reset Password
                          </span>
                        </FButtonMain>
                      </div>
                      <div className="py-2" />
                      <div className="text-center">
                        <span
                          className="text-bold pointer text-main"
                          onClick={() => setStep("email")}
                        >
                          Use a different email
                        </span>
                        <span className="px-2">|</span>
                        <span className="text-bold pointer" onClick={goToLogin}>
                          Back to login
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
