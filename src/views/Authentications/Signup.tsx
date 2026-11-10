"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthShell } from "@/components/ui/AuthShell";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import {
  ArrowRightIcon,
  LockIcon,
  MailIcon,
  ShieldIcon,
  UserIcon,
} from "@/components/ui/icons";
import { GoogleAuthButton } from "@/components/GoogleAuthButton";
import { useAuth } from "@/contexts/AuthContext";
import { userAuthApi } from "@/api/userAuth";
import { emailIsValid, passwordIsValid } from "@/utils/validation";

type Step = "details" | "otp";

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
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string | undefined>>({});

  function finishSignup() {
    const callbackUrl = searchParams.get("callbackUrl");
    router.push(callbackUrl || "/dashboard");
  }

  async function submitDetails() {
    const errors: Record<string, string | undefined> = {};
    if (!firstName.trim()) errors.firstName = "First name is required.";
    if (!lastName.trim()) errors.lastName = "Last name is required.";
    if (!emailIsValid(email)) errors.email = "Enter a valid email address.";
    if (!passwordIsValid(password)) errors.password = "Use at least 8 characters.";
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setSubmitting(true);
    setError(null);
    try {
      await auth.register({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email,
        password,
      });
      setStep("otp");
      setOtp("");
      setInfo("Enter the 6-digit code sent to your email to activate your account.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not create your account.");
    } finally {
      setSubmitting(false);
    }
  }

  async function submitOtp() {
    if (!/^\d{6}$/.test(otp)) {
      setError("Enter the 6-digit code from your email.");
      return;
    }
    setSubmitting(true);
    setError(null);
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
    setSubmitting(true);
    setError(null);
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
    <AuthShell
      title={step === "details" ? "Create your account" : "Check your email"}
      subtitle={
        step === "details"
          ? "Start your project, join a bootcamp and manage everything in one place."
          : `We sent a 6-digit code to ${email}.`
      }
      footer={
        <span>
          Already have an account?{" "}
          <Link
            href={searchParams.toString() ? `/login?${searchParams.toString()}` : "/login"}
            className="font-semibold text-brand no-underline hover:underline"
          >
            Sign in
          </Link>
        </span>
      }
    >
      <div className="mb-5 flex items-center gap-2">
        <span className="inline-flex h-6 items-center rounded-full bg-brand-50 px-2.5 text-[11px] font-medium text-brand">
          Step {step === "details" ? "1" : "2"} of 2
        </span>
        <span className="text-[12px] text-ink-subdued">
          {step === "details" ? "Account details" : "Email verification"}
        </span>
      </div>

      {error && <Alert tone="error" className="mb-4">{error}</Alert>}
      {info && step === "otp" && <Alert tone="info" className="mb-4">{info}</Alert>}

      {step === "details" ? (
        <>
          <form
            className="space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              void submitDetails();
            }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field
                label="First name"
                value={firstName}
                onChange={setFirstName}
                placeholder="Ada"
                autoComplete="given-name"
                icon={<UserIcon />}
                error={fieldErrors.firstName}
                required
              />
              <Field
                label="Last name"
                value={lastName}
                onChange={setLastName}
                placeholder="Okafor"
                autoComplete="family-name"
                error={fieldErrors.lastName}
                required
              />
            </div>

            <Field
              label="Email address"
              value={email}
              onChange={setEmail}
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
              inputMode="email"
              icon={<MailIcon />}
              error={fieldErrors.email}
              required
            />

            <Field
              label="Password"
              value={password}
              onChange={setPassword}
              type="password"
              placeholder="At least 8 characters"
              autoComplete="new-password"
              icon={<LockIcon />}
              error={fieldErrors.password}
              hint="Use 8+ characters with a mix of letters and numbers."
              required
            />

            <p className="text-[12px] leading-5 text-ink-subdued">
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

            <Button type="submit" fullWidth loading={submitting}>
              Create account
              <ArrowRightIcon />
            </Button>
          </form>

          <div className="my-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-subdued">
            <span className="h-px flex-1 bg-black/[0.06]" />
            or
            <span className="h-px flex-1 bg-black/[0.06]" />
          </div>

          <GoogleAuthButton
            mode="signup"
            onCredential={handleGoogle}
            onError={setError}
            onUnavailable={() =>
              setError("Google sign-in is not configured yet.")
            }
          />
        </>
      ) : (
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            void submitOtp();
          }}
        >
          <Field
            label="Verification code"
            value={otp}
            onChange={(value) => setOtp(value.replace(/\D/g, "").slice(0, 6))}
            placeholder="123456"
            inputMode="numeric"
            maxLength={6}
            autoComplete="one-time-code"
            icon={<ShieldIcon />}
            required
          />

          <Button type="submit" fullWidth loading={submitting}>
            Verify &amp; continue
            <ArrowRightIcon />
          </Button>

          <div className="flex items-center justify-between pt-1 text-[13px] font-medium">
            <button
              type="button"
              onClick={resendCode}
              className="text-brand transition-colors hover:text-brand-600"
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
              className="text-ink-muted transition-colors hover:text-ink"
            >
              Back
            </button>
          </div>
        </form>
      )}
    </AuthShell>
  );
}
