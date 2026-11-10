"use client";

import React, { useEffect, useState } from "react";
import { D_TextInput } from "../../components/input/input";
import FButtonMain from "../../components/Button/Main";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faShieldAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { animateScroll as scroll } from "react-scroll";

import { emailIsValid, passwordIsValid } from "../../utils/validation";
import { useNotificationTrigger } from "../../contexts/notificationTrigger";
import { useAuth } from "../../contexts/AuthContext";
import { useLoading } from "../../contexts/LoadingContext";
import { userAuthApi } from "@/api/userAuth";
import { GoogleAuthButton } from "../../components/GoogleAuthButton";

import "./style.css";

const envelope = <FontAwesomeIcon icon={faEnvelope} />;
const shield = <FontAwesomeIcon icon={faShieldAlt} />;
const userIcon = <FontAwesomeIcon icon={faUser} />;

type Step = "details" | "otp";

export default function SignUp(): React.JSX.Element {
  const router = useRouter();
  const auth = useAuth();
  const { setLoading, setLoadingText } = useLoading();
  const { triggerError, triggerInfo, triggerSuccess } = useNotificationTrigger();

  const [step, setStep] = useState<Step>("details");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [emailValid, setEmailValid] = useState<boolean | null>(false);
  const [passwordValid, setPasswordValid] = useState<boolean | null>(false);
  const [pfeedbackText, setPFeedbackText] = useState("");
  const [feedbackText, setFeedbackText] = useState("");

  const searchParams = useSearchParams() ?? new URLSearchParams();

  function finishSignup() {
    const callbackUrl = searchParams.get("callbackUrl");
    if (callbackUrl) router.push(callbackUrl);
    else router.push("/dashboard");
  }

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

  function validatePassword() {
    setPasswordValid(passwordIsValid(password));
    if (!passwordIsValid(password)) {
      setPFeedbackText("Password should be 8 or more characters");
    } else {
      setPFeedbackText("Password valid");
    }
  }

  async function sendSignup() {
    validateEmail();
    validatePassword();

    if (!firstName.trim() || !lastName.trim()) {
      triggerError({
        title: "Missing details",
        message: "Enter your first and last name.",
      });
      return;
    }
    if (!emailIsValid(email) || !passwordIsValid(password)) return;

    setLoading(true);
    setLoadingText("Creating account. Please wait...");
    try {
      await auth.register({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email,
        password,
      });
      setStep("otp");
      setOtp("");
      triggerInfo({
        title: "Verify your email",
        message: "A 6-digit verification code has been sent to your email.",
      });
    } catch (error) {
      triggerError({
        title: "Signup error",
        message: error instanceof Error ? error.message : "Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  async function verifySignupOtp() {
    if (!/^\d{6}$/.test(otp)) {
      triggerError({
        title: "Invalid code",
        message: "Enter the 6-digit code from your email.",
      });
      return;
    }

    setLoading(true);
    setLoadingText("Verifying your email...");
    try {
      await auth.verifyEmail(email, otp);
      triggerSuccess({
        title: "Account created",
        message: "Welcome to Five and Six Technologies!",
      });
      finishSignup();
    } catch (error) {
      triggerError({
        title: "Verification failed",
        message: error instanceof Error ? error.message : "Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  async function resendOtp() {
    try {
      await userAuthApi.resendOtp(email, "verify_email");
      triggerInfo({
        title: "Code resent",
        message: "A new verification code has been sent.",
      });
    } catch (error) {
      triggerError({
        title: "Could not resend",
        message: error instanceof Error ? error.message : "Please try again.",
      });
    }
  }

  async function handleGoogleCredential(idToken: string) {
    setLoading(true);
    setLoadingText("Signing up with Google...");
    try {
      await auth.googleSignIn(idToken);
      triggerSuccess({
        title: "Account ready",
        message: "Welcome to Five and Six Technologies!",
      });
      finishSignup();
    } catch (error) {
      triggerError({
        title: "Google sign-in failed",
        message: error instanceof Error ? error.message : "Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: "easeInOutQuart",
    });
  }, []);

  return (
    <main id="signup" className="royal-shade-5">
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
                      {step === "details" ? "CREATE NEW ACCOUNT" : "VERIFY YOUR EMAIL"}
                    </h1>
                    <p className="text-medium">
                      {step === "details"
                        ? "Input Your Valid Credentials"
                        : `Enter the 6-digit code sent to ${email}`}
                    </p>
                  </div>
                  <div className="py-1" />

                  {step === "details" ? (
                    <>
                      <div>
                        <D_TextInput
                          valid={firstName.trim().length > 0 ? true : null}
                          feedbackText=""
                          value={firstName}
                          onChange={setFirstName}
                          leftIcon={userIcon}
                          placeholder="First Name"
                          dark={false}
                        />
                      </div>
                      <div className="py-2" />
                      <div>
                        <D_TextInput
                          valid={lastName.trim().length > 0 ? true : null}
                          feedbackText=""
                          value={lastName}
                          onChange={setLastName}
                          leftIcon={userIcon}
                          placeholder="Last Name"
                          dark={false}
                        />
                      </div>
                      <div className="py-2" />
                      <div>
                        <D_TextInput
                          valid={emailValid}
                          feedbackText={feedbackText}
                          onFocus={() => setEmailValid(null)}
                          value={email}
                          onChange={setEmail}
                          leftIcon={envelope}
                          placeholder="Email Address"
                          dark={false}
                        />
                      </div>
                      <div className="py-2" />
                      <div>
                        <D_TextInput
                          valid={passwordValid}
                          onFocus={() => setPasswordValid(null)}
                          feedbackText={pfeedbackText}
                          value={password}
                          onChange={setPassword}
                          type="password"
                          placeholder="Password"
                          dark={false}
                        />
                      </div>
                      <div className="py-2" />
                      <div>
                        <p className="text-medium text-center">
                          By signing up, you agree to our{" "}
                          <Link href={"/terms-and-conditions"}>
                            terms and conditions.
                          </Link>{" "}
                          and <Link href={"/privacy-policy"}>privacy policy.</Link>
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
                      <div className="text-center">
                        <span className="text-p text-medium">
                          Already have an account?{" "}
                          <span className="text-bold pointer" onClick={goToLogin}>
                            Login Here
                          </span>
                        </span>
                        <br />
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
                          placeholder="6-digit verification code"
                          dark={false}
                        />
                      </div>
                      <div className="py-2" />
                      <div>
                        <FButtonMain
                          style={{ width: "100%" }}
                          actionFn={verifySignupOtp}
                        >
                          <span className="text-none text-semibold">
                            Verify Email
                          </span>
                        </FButtonMain>
                      </div>
                      <div className="py-2" />
                      <div className="text-center">
                        <span
                          className="text-bold pointer text-main"
                          onClick={resendOtp}
                        >
                          Resend code
                        </span>
                        <span className="px-2">|</span>
                        <span
                          className="text-bold pointer"
                          onClick={() => {
                            setStep("details");
                            setOtp("");
                          }}
                        >
                          Back
                        </span>
                      </div>
                    </>
                  )}
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
            <div className="col-11 center col-md-5 no-space">
              <div className="py-1" />
              <div className="px-1">
                <GoogleAuthButton
                  mode="signup"
                  onCredential={handleGoogleCredential}
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
