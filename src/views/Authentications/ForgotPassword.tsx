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
  CheckIcon,
  LockIcon,
  MailIcon,
  ShieldIcon,
} from "@/components/ui/icons";
import { useAuth } from "@/contexts/AuthContext";
import { emailIsValid } from "@/utils/validation";

type Step = "email" | "reset" | "done";

export default function ForgotPassword(): React.JSX.Element {
  const router = useRouter();
  const auth = useAuth();
  const searchParams = useSearchParams() ?? new URLSearchParams();

  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | undefined>();

  function goToLogin() {
    router.push(
      searchParams.toString() ? `/login?${searchParams.toString()}` : "/login",
    );
  }

  async function requestCode() {
    if (!emailIsValid(email)) {
      setEmailError("Enter a valid email address.");
      return;
    }
    setEmailError(undefined);
    setSubmitting(true);
    setError(null);
    try {
      const message = await auth.forgotPassword(email);
      setStep("reset");
      setOtp("");
      setInfo(message);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send the code.");
    } finally {
      setSubmitting(false);
    }
  }

  async function resetPassword() {
    if (!/^\d{6}$/.test(otp)) {
      setError("Enter the 6-digit code from your email.");
      return;
    }
    if (newPassword.length < 8) {
      setError("Use at least 8 characters for your new password.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSubmitting(true);
    setError(null);
    try {
      await auth.resetPassword(email, otp, newPassword);
      setStep("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not reset the password.");
    } finally {
      setSubmitting(false);
    }
  }

  async function resendCode() {
    setError(null);
    try {
      const message = await auth.forgotPassword(email);
      setInfo(message);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not resend the code.");
    }
  }

  if (step === "done") {
    return (
      <AuthShell
        title="Password updated"
        subtitle="Your password has been changed. You can now sign in with your new password."
        footer={
          <Link href="/login" className="font-semibold text-brand no-underline hover:underline">
            Back to sign in
          </Link>
        }
      >
        <div className="flex flex-col items-center gap-5 py-2">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
            <CheckIcon className="h-7 w-7" />
          </span>
          <Button fullWidth onClick={goToLogin}>
            Continue to sign in
            <ArrowRightIcon />
          </Button>
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title={step === "email" ? "Forgot password?" : "Choose a new password"}
      subtitle={
        step === "email"
          ? "Enter the email on your account and we'll send a recovery code."
          : `Enter the code sent to ${email} and pick a new password.`
      }
      footer={
        <span>
          Remembered it?{" "}
          <Link href="/login" className="font-semibold text-brand no-underline hover:underline">
            Sign in
          </Link>
        </span>
      }
    >
      {error && <Alert tone="error" className="mb-4">{error}</Alert>}
      {info && step === "reset" && <Alert tone="info" className="mb-4">{info}</Alert>}

      {step === "email" ? (
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            void requestCode();
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
            error={emailError}
            required
          />
          <Button type="submit" fullWidth loading={submitting}>
            Send recovery code
            <ArrowRightIcon />
          </Button>
        </form>
      ) : (
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            void resetPassword();
          }}
        >
          <Field
            label="Recovery code"
            value={otp}
            onChange={(value) => setOtp(value.replace(/\D/g, "").slice(0, 6))}
            placeholder="123456"
            inputMode="numeric"
            maxLength={6}
            autoComplete="one-time-code"
            icon={<ShieldIcon />}
            required
          />
          <Field
            label="New password"
            value={newPassword}
            onChange={setNewPassword}
            type="password"
            placeholder="At least 8 characters"
            autoComplete="new-password"
            icon={<LockIcon />}
            required
          />
          <Field
            label="Confirm new password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            type="password"
            placeholder="Repeat your new password"
            autoComplete="new-password"
            icon={<LockIcon />}
            error={
              confirmPassword.length > 0 && confirmPassword !== newPassword
                ? "Passwords do not match."
                : undefined
            }
            required
          />

          <Button type="submit" fullWidth loading={submitting}>
            Reset password
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
                setStep("email");
                setOtp("");
                setNewPassword("");
                setConfirmPassword("");
                setError(null);
                setInfo(null);
              }}
              className="text-ink-muted transition-colors hover:text-ink"
            >
              Use a different email
            </button>
          </div>
        </form>
      )}
    </AuthShell>
  );
}
