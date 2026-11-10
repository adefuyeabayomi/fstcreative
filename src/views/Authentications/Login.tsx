"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthShell } from "@/components/ui/AuthShell";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { ArrowRightIcon, LockIcon, MailIcon, ShieldIcon } from "@/components/ui/icons";
import { GoogleAuthButton } from "@/components/GoogleAuthButton";
import { useAuth } from "@/contexts/AuthContext";
import { userAuthApi } from "@/api/userAuth";
import { emailIsValid, passwordIsValid } from "@/utils/validation";

type Step = "credentials" | "otp";

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
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; password?: string }>({});

  function finishLogin() {
    if (callbackUrl) router.push(callbackUrl);
    else if (next) router.push(`/${next}?${searchParams.toString()}`);
    else router.push("/dashboard");
  }

  async function submitCredentials() {
    const errors: typeof fieldErrors = {};
    if (!emailIsValid(email)) errors.email = "Enter a valid email address.";
    if (!passwordIsValid(password)) errors.password = "Use at least 8 characters.";
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setSubmitting(true);
    setError(null);
    try {
      const result = await auth.login(email, password);
      if (result.requiresOtp) {
        setStep("otp");
        setOtp("");
        setInfo("Enter the 6-digit code sent to your email.");
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
    if (!/^\d{6}$/.test(otp)) {
      setError("Enter the 6-digit code from your email.");
      return;
    }
    setSubmitting(true);
    setError(null);
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
    setSubmitting(true);
    setError(null);
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
    <AuthShell
      title={step === "credentials" ? "Welcome back" : "Verify your email"}
      subtitle={
        step === "credentials"
          ? "Sign in to manage your projects, classes and account."
          : `We sent a 6-digit code to ${email}.`
      }
      footer={
        <span>
          New to Five &amp; Six?{" "}
          <Link
            href={searchParams.toString() ? `/signup?${searchParams.toString()}` : "/signup"}
            className="font-semibold text-brand no-underline hover:underline"
          >
            Create an account
          </Link>
        </span>
      }
    >
      {error && <Alert tone="error" className="mb-4">{error}</Alert>}
      {info && step === "otp" && <Alert tone="info" className="mb-4">{info}</Alert>}

      {step === "credentials" ? (
        <>
          <form
            className="space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              void submitCredentials();
            }}
          >
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
              placeholder="Your password"
              autoComplete="current-password"
              icon={<LockIcon />}
              error={fieldErrors.password}
              required
            />

            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-[13px] font-medium text-brand no-underline hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Button type="submit" fullWidth loading={submitting}>
              Sign in
              <ArrowRightIcon />
            </Button>
          </form>

          <div className="my-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-subdued">
            <span className="h-px flex-1 bg-black/[0.06]" />
            or
            <span className="h-px flex-1 bg-black/[0.06]" />
          </div>

          <GoogleAuthButton
            mode="signin"
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
            type="text"
            placeholder="123456"
            inputMode="numeric"
            maxLength={6}
            autoComplete="one-time-code"
            icon={<ShieldIcon />}
            required
          />

          <Button type="submit" fullWidth loading={submitting}>
            Verify &amp; sign in
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
                setStep("credentials");
                setOtp("");
                setError(null);
                setInfo(null);
              }}
              className="text-ink-muted transition-colors hover:text-ink"
            >
              Back to sign in
            </button>
          </div>
        </form>
      )}
    </AuthShell>
  );
}
