"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { AuthField } from "@/components/ui/AuthField";
import { AuthNotice } from "@/components/ui/AuthNotice";
import { AuthSplitLayout } from "@/components/ui/AuthSplitLayout";
import { GoogleAuthButton } from "@/components/GoogleAuthButton";
import { ArrowRightIcon, LockIcon, MailIcon, ShieldIcon } from "@/components/ui/icons";
import { useAuth } from "@/contexts/AuthContext";
import { userAuthApi } from "@/api/userAuth";
import { emailIsValid, passwordIsValid } from "@/utils/validation";

type Step = "credentials" | "otp";

interface FieldErrors {
  email?: string;
  password?: string;
}

export default function Login(): React.JSX.Element {
  const router = useRouter();
  const auth = useAuth();
  const searchParams = useSearchParams() ?? new URLSearchParams();
  const next = searchParams.get("next");
  const callbackUrl = searchParams.get("callbackUrl");

  const [step, setStep] = useState<Step>("credentials");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  function finishLogin() {
    if (callbackUrl) router.push(callbackUrl);
    else if (next) router.push(`/${next}?${searchParams.toString()}`);
    else router.push("/dashboard");
  }

  async function submitCredentials() {
    setError(null);

    const nextErrors: FieldErrors = {};
    if (!emailIsValid(email)) nextErrors.email = "Enter a valid email address";
    if (!passwordIsValid(password)) {
      nextErrors.password = "Password should be at least 8 characters";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      const result = await auth.login(email, password);
      if (result.requiresOtp) {
        setStep("otp");
        setOtp("");
        setInfo(`Enter the 6-digit code sent to ${email}.`);
      } else {
        finishLogin();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to sign in.");
    } finally {
      setSubmitting(false);
    }
  }

  async function submitOtp() {
    setError(null);
    if (!/^\d{6}$/.test(otp)) {
      setError("Enter the 6-digit code from your email.");
      return;
    }

    setSubmitting(true);
    try {
      await auth.verifyOtp(email, otp);
      finishLogin();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Verification failed.");
    } finally {
      setSubmitting(false);
    }
  }

  async function resendCode() {
    setError(null);
    try {
      await userAuthApi.resendOtp(email, "login");
      setInfo("A new verification code has been sent.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not resend the code.");
    }
  }

  async function handleGoogle(idToken: string) {
    setError(null);
    setSubmitting(true);
    try {
      await auth.googleSignIn(idToken);
      finishLogin();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Google sign-in failed.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AuthSplitLayout
      title={step === "credentials" ? "Welcome back" : "Verify your email"}
      subtitle={
        step === "credentials"
          ? "Sign in to manage your projects, classes and account."
          : `We sent a 6-digit code to ${email}.`
      }
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link
            href={
              searchParams.toString()
                ? `/signup?${searchParams.toString()}`
                : "/signup"
            }
            className="font-semibold text-brand no-underline transition hover:text-brand-600"
          >
            Create an account
          </Link>
        </>
      }
    >
      {error && <AuthNotice tone="error">{error}</AuthNotice>}
      {info && step === "otp" && <AuthNotice tone="info">{info}</AuthNotice>}

      {step === "credentials" ? (
        <form
          className="space-y-5"
          onSubmit={(event) => {
            event.preventDefault();
            void submitCredentials();
          }}
        >
          <AuthField
            label="Email address"
            value={email}
            onChange={setEmail}
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            inputMode="email"
            icon={<MailIcon className="h-[18px] w-[18px]" />}
            error={errors.email}
            required
          />

          <div>
            <AuthField
              label="Password"
              value={password}
              onChange={setPassword}
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              icon={<LockIcon className="h-[18px] w-[18px]" />}
              error={errors.password}
              required
            />
            <div className="mt-2 flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-brand no-underline transition hover:text-brand-600"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            shape="xl"
            fullWidth
            loading={submitting}
            className="group !font-semibold"
          >
            Sign in
            <ArrowRightIcon className="h-[17px] w-[17px] transition-transform group-hover:translate-x-0.5" />
          </Button>

          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-xs text-slate-400">OR</span>
            </div>
          </div>

          <GoogleAuthButton
            mode="signin"
            onCredential={handleGoogle}
            onError={setError}
            onUnavailable={() =>
              setError("Google sign-in is not configured yet.")
            }
          />
        </form>
      ) : (
        <form
          className="space-y-5"
          onSubmit={(event) => {
            event.preventDefault();
            void submitOtp();
          }}
        >
          <AuthField
            label="Verification code"
            value={otp}
            onChange={(value) => setOtp(value.replace(/\D/g, "").slice(0, 6))}
            placeholder="123456"
            inputMode="numeric"
            maxLength={6}
            autoComplete="one-time-code"
            icon={<ShieldIcon className="h-[18px] w-[18px]" />}
            required
          />

          <Button
            type="submit"
            variant="primary"
            size="lg"
            shape="xl"
            fullWidth
            loading={submitting}
            className="group !font-semibold"
          >
            Verify &amp; sign in
            <ArrowRightIcon className="h-[17px] w-[17px] transition-transform group-hover:translate-x-0.5" />
          </Button>

          <div className="flex items-center justify-between pt-1 text-sm font-medium">
            <button
              type="button"
              onClick={resendCode}
              className="text-brand transition hover:text-brand-600"
            >
              Resend code
            </button>
            <button
              type="button"
              onClick={() => {
                setStep("credentials");
                setOtp("");
                setError(null);
                setInfo(null);
              }}
              className="text-slate-500 transition hover:text-slate-700"
            >
              Back to sign in
            </button>
          </div>
        </form>
      )}
    </AuthSplitLayout>
  );
}
