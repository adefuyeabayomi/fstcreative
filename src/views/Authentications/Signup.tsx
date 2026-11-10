"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { AuthField } from "@/components/ui/AuthField";
import { AuthNotice } from "@/components/ui/AuthNotice";
import { AuthSplitLayout } from "@/components/ui/AuthSplitLayout";
import { GoogleAuthButton } from "@/components/GoogleAuthButton";
import {
  ArrowRightIcon,
  LockIcon,
  MailIcon,
  ShieldIcon,
  UserIcon,
} from "@/components/ui/icons";
import { useAuth } from "@/contexts/AuthContext";
import { userAuthApi } from "@/api/userAuth";
import { emailIsValid, passwordIsValid } from "@/utils/validation";

type Step = "details" | "otp";

interface FieldErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

export default function SignUp(): React.JSX.Element {
  const router = useRouter();
  const auth = useAuth();
  const searchParams = useSearchParams() ?? new URLSearchParams();

  const [step, setStep] = useState<Step>("details");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  function finishSignup() {
    const callbackUrl = searchParams.get("callbackUrl");
    router.push(callbackUrl || "/dashboard");
  }

  async function submitDetails() {
    setError(null);

    const nextErrors: FieldErrors = {};
    if (!firstName.trim()) nextErrors.firstName = "First name is required";
    if (!lastName.trim()) nextErrors.lastName = "Last name is required";
    if (!emailIsValid(email)) nextErrors.email = "Enter a valid email address";
    if (!passwordIsValid(password)) {
      nextErrors.password = "Password should be at least 8 characters";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      await auth.register({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email,
        password,
      });
      setStep("otp");
      setOtp("");
      setInfo(`Enter the 6-digit code sent to ${email}.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not create your account.");
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
      await auth.verifyEmail(email, otp);
      finishSignup();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Verification failed.");
    } finally {
      setSubmitting(false);
    }
  }

  async function resendCode() {
    setError(null);
    try {
      await userAuthApi.resendOtp(email, "verify_email");
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
      finishSignup();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Google sign-up failed.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AuthSplitLayout
      title={step === "details" ? "Create your account" : "Check your email"}
      subtitle={
        step === "details"
          ? "Start your project, join a bootcamp and manage everything in one place."
          : `We sent a 6-digit code to ${email}.`
      }
      eyebrow={
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 items-center rounded-full bg-brand-50 px-2.5 text-[11px] font-medium text-brand">
            Step {step === "details" ? "1" : "2"} of 2
          </span>
          <span className="text-xs text-slate-400">
            {step === "details" ? "Account details" : "Email verification"}
          </span>
        </div>
      }
      footer={
        <>
          Already have an account?{" "}
          <Link
            href={
              searchParams.toString()
                ? `/login?${searchParams.toString()}`
                : "/login"
            }
            className="font-semibold text-brand no-underline transition hover:text-brand-600"
          >
            Sign in
          </Link>
        </>
      }
    >
      {error && <AuthNotice tone="error">{error}</AuthNotice>}
      {info && step === "otp" && <AuthNotice tone="info">{info}</AuthNotice>}

      {step === "details" ? (
        <form
          className="space-y-5"
          onSubmit={(event) => {
            event.preventDefault();
            void submitDetails();
          }}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <AuthField
              label="First name"
              value={firstName}
              onChange={setFirstName}
              placeholder="Ada"
              autoComplete="given-name"
              icon={<UserIcon className="h-[18px] w-[18px]" />}
              error={errors.firstName}
              required
            />
            <AuthField
              label="Last name"
              value={lastName}
              onChange={setLastName}
              placeholder="Okafor"
              autoComplete="family-name"
              icon={<UserIcon className="h-[18px] w-[18px]" />}
              error={errors.lastName}
              required
            />
          </div>

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

          <AuthField
            label="Password"
            value={password}
            onChange={setPassword}
            type="password"
            placeholder="At least 8 characters"
            autoComplete="new-password"
            icon={<LockIcon className="h-[18px] w-[18px]" />}
            error={errors.password}
            hint="Use 8+ characters with a mix of letters and numbers."
            required
          />

          <p className="text-xs leading-5 text-slate-500">
            By creating an account you agree to our{" "}
            <Link href="/terms-and-conditions" className="text-brand no-underline hover:underline">
              terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="text-brand no-underline hover:underline">
              privacy policy
            </Link>
            .
          </p>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            shape="xl"
            fullWidth
            loading={submitting}
            className="group !font-semibold"
          >
            Create account
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
            mode="signup"
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
            Verify &amp; continue
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
                setStep("details");
                setOtp("");
                setError(null);
                setInfo(null);
              }}
              className="text-slate-500 transition hover:text-slate-700"
            >
              Back
            </button>
          </div>
        </form>
      )}
    </AuthSplitLayout>
  );
}
