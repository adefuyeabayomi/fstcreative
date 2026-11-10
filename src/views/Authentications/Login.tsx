"use client";

import React, { useEffect, useState } from "react";
import { D_TextInput } from "../../components/input/input";
import FButtonMain from "../../components/Button/Main";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { animateScroll as scroll } from "react-scroll";

import { emailIsValid, passwordIsValid } from "../../utils/validation";
import { useNotificationTrigger } from "../../contexts/notificationTrigger";
import { useAuth } from "../../contexts/AuthContext";
import { useLoading } from "../../contexts/LoadingContext";
import { userAuthApi } from "@/api/userAuth";
import { GoogleAuthButton } from "../../components/GoogleAuthButton";

const envelope = <FontAwesomeIcon icon={faEnvelope} />;
const shield = <FontAwesomeIcon icon={faShieldAlt} />;

type Step = "credentials" | "otp";

export default function Login(): React.JSX.Element {
  const router = useRouter();
  const auth = useAuth();
  const { setLoading, setLoadingText } = useLoading();
  const { triggerError, triggerInfo, triggerSuccess } = useNotificationTrigger();

  const [step, setStep] = useState<Step>("credentials");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [emailValid, setEmailValid] = useState<boolean | null>(false);
  const [passwordValid, setPasswordValid] = useState<boolean | null>(false);
  const [pfeedbackText, setPFeedbackText] = useState("");
  const [feedbackText, setFeedbackText] = useState("");

  const searchParams = useSearchParams() ?? new URLSearchParams();
  const next = searchParams.get("next");
  const callbackUrl = searchParams.get("callbackUrl");

  function finishLogin() {
    if (callbackUrl) {
      router.push(callbackUrl);
    } else if (next) {
      router.push(`/${next}?${searchParams.toString()}`);
    } else {
      router.push("/dashboard");
    }
  }

  function goToSignup() {
    router.push(
      searchParams.toString() ? `/signup?${searchParams.toString()}` : "/signup",
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

  async function sendLogin() {
    validateEmail();
    validatePassword();
    if (!emailIsValid(email) || !passwordIsValid(password)) return;

    setLoading(true);
    setLoadingText("Authenticating. Please wait...");
    try {
      const result = await auth.login(email, password);
      if (result.requiresOtp) {
        setStep("otp");
        setOtp("");
        triggerInfo({
          title: "Verification code sent",
          message: "Check your email for the 6-digit code.",
        });
      } else {
        triggerSuccess({ title: "Login successful", message: "" });
        finishLogin();
      }
    } catch (error) {
      triggerError({
        title: "Login error",
        message: error instanceof Error ? error.message : "Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  async function verifyLoginOtp() {
    if (!/^\d{6}$/.test(otp)) {
      triggerError({
        title: "Invalid code",
        message: "Enter the 6-digit code from your email.",
      });
      return;
    }

    setLoading(true);
    setLoadingText("Verifying. Please wait...");
    try {
      await auth.verifyOtp(email, otp);
      triggerSuccess({ title: "Login successful", message: "" });
      finishLogin();
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
      await userAuthApi.resendOtp(email, "login");
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
    setLoadingText("Signing in with Google...");
    try {
      await auth.googleSignIn(idToken);
      triggerSuccess({ title: "Login successful", message: "" });
      finishLogin();
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
    <main id="login">
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
                      {step === "credentials" ? "LOGIN" : "VERIFY YOUR EMAIL"}
                    </h1>
                    <p className="text-medium">
                      {step === "credentials"
                        ? "Input Your Valid Credentials"
                        : `Enter the 6-digit code sent to ${email}`}
                    </p>
                  </div>
                  <div className="py-3" />

                  {step === "credentials" ? (
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
                        <FButtonMain style={{ width: "100%" }} actionFn={sendLogin}>
                          <span className="text-none text-semibold">Login</span>
                        </FButtonMain>
                      </div>
                      <div className="py-2" />
                      <div className="text-center">
                        <span className="text-medium text-p">
                          Don't have an account?{" "}
                          <span className="text-bold pointer" onClick={goToSignup}>
                            Create Account Here
                          </span>
                        </span>
                        <br />
                        <Link
                          href={"/forgot-password"}
                          className="text-none text-main"
                        >
                          <small className="text-bold">Forgot password?</small>
                        </Link>
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
                          actionFn={verifyLoginOtp}
                        >
                          <span className="text-none text-semibold">
                            Verify & Login
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
                            setStep("credentials");
                            setOtp("");
                          }}
                        >
                          Back
                        </span>
                      </div>
                    </>
                  )}
                  <div className="py-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid no-space">
          <div className="row no-space col-12 col-lg-10 col-xl-8 center">
            <div className="col-11 center col-md-5 no-space">
              <div className="py-1" />
              <div className="px-1">
                <GoogleAuthButton
                  mode="signin"
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
