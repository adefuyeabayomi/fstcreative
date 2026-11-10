"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { AuthField } from "@/components/ui/AuthField";
import { AuthNotice } from "@/components/ui/AuthNotice";
import { AuthSplitLayout } from "@/components/ui/AuthSplitLayout";
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
    setError(null);
    if (!emailIsValid(email)) {
      setEmailError("Enter a valid email address");
      return;
    }
    setEmailError(undefined);

    setSubmitting(true);
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
    setError(null);
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
      <AuthSplitLayout
        title="Password updated"
        subtitle="Your password has been changed. You can now sign in with your new password."
        footer={
          <Link href="/login" className="font-semibold text-brand no-underline hover:text-brand-600">
            Back to sign in
          </Link>
        }
      >
        <div className="flex flex-col items-center gap-6 py-2">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand">
            <CheckIcon className="h-8 w-8" />
          </span>
          <Button
            type="button"
            variant="primary"
            size="lg"
            shape="xl"
            fullWidth
            className="group !font-semibold"
            onClick={goToLogin}
          >
            Continue to sign in
            <ArrowRightIcon className="h-[17px] w-[17px] transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </AuthSplitLayout>
    );
  }

  return (
    <AuthSplitLayout
      title={step === "email" ? "Forgot password?" : "Choose a new password"}
      subtitle={
        step === "email"
          ? "Enter the email on your account and we'll send a recovery code."
          : `Enter the code sent to ${email} and pick a new password.`
      }
      eyebrow={
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 items-center rounded-full bg-brand-50 px-2.5 text-[11px] font-medium text-brand">
            Step {step === "email" ? "1" : "2"} of 2
          </span>
          <span className="text-xs text-slate-400">
            {step === "email" ? "Find your account" : "Set a new password"}
          </span>
        </div>
      }
      footer={
        <>
          Remembered it?{" "}
          <Link href="/login" className="font-semibold text-brand no-underline hover:text-brand-600">
            Sign in
          </Link>
        </>
      }
    >
      {error && <AuthNotice tone="error">{error}</AuthNotice>}
      {info && step === "reset" && <AuthNotice tone="info">{info}</AuthNotice>}

      {step === "email" ? (
        <form
          className="space-y-5"
          onSubmit={(event) => {
            event.preventDefault();
            void requestCode();
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
            error={emailError}
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
            Send recovery code
            <ArrowRightIcon className="h-[17px] w-[17px] transition-transform group-hover:translate-x-0.5" />
          </Button>
        </form>
      ) : (
        <form
          className="space-y-5"
          onSubmit={(event) => {
            event.preventDefault();
            void resetPassword();
          }}
        >
          <AuthField
            label="Recovery code"
            value={otp}
            onChange={(value) => setOtp(value.replace(/\D/g, "").slice(0, 6))}
            placeholder="123456"
            inputMode="numeric"
            maxLength={6}
            autoComplete="one-time-code"
            icon={<ShieldIcon className="h-[18px] w-[18px]" />}
            required
          />

          <AuthField
            label="New password"
            value={newPassword}
            onChange={setNewPassword}
            type="password"
            placeholder="At least 8 characters"
            autoComplete="new-password"
            icon={<LockIcon className="h-[18px] w-[18px]" />}
            required
          />

          <AuthField
            label="Confirm new password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            type="password"
            placeholder="Repeat your new password"
            autoComplete="new-password"
            icon={<LockIcon className="h-[18px] w-[18px]" />}
            error={
              confirmPassword.length > 0 && confirmPassword !== newPassword
                ? "Passwords do not match."
                : undefined
            }
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
            Reset password
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
                setStep("email");
                setOtp("");
                setNewPassword("");
                setConfirmPassword("");
                setError(null);
                setInfo(null);
              }}
              className="text-slate-500 transition hover:text-slate-700"
            >
              Use a different email
            </button>
          </div>
        </form>
      )}
    </AuthSplitLayout>
  );
}
