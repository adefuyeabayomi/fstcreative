"use client";

import { useState } from "react";
import { useDashboardPage } from "@/hooks/useDashboardPage";
import { useAuth } from "@/contexts/AuthContext";
import { userAuthApi } from "@/api/userAuth";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { LockIcon } from "@/components/ui/icons";
import {
  Badge,
  Card,
  DashboardPage,
} from "@/components/ui/DashboardPage";

export default function AccountSettings(): React.JSX.Element {
  useDashboardPage();
  const { user } = useAuth();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const initials = `${user?.firstName?.[0] ?? ""}${user?.lastName?.[0] ?? ""}`.toUpperCase();

  async function changePassword() {
    setError(null);
    setSuccess(null);

    if (!oldPassword) {
      setError("Enter your current password.");
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

    setSaving(true);
    try {
      await userAuthApi.changePassword(oldPassword, newPassword);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setSuccess("Password updated successfully.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not change password.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <DashboardPage
      title="Account settings"
      description="Review your account information and manage your password."
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-[18px] font-semibold text-brand">
              {initials || "U"}
            </span>
            <div className="min-w-0">
              <h2 className="truncate text-[18px] font-semibold text-ink">
                {`${user?.firstName ?? ""} ${user?.lastName ?? ""}`.trim() || "Account"}
              </h2>
              <p className="truncate text-[13px] text-ink-muted">{user?.email}</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between gap-4 border-b border-black/[0.06] pb-3">
              <span className="text-[13px] text-ink-muted">Account status</span>
              <Badge tone="success">{user?.status ?? "ACTIVE"}</Badge>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-black/[0.06] pb-3">
              <span className="text-[13px] text-ink-muted">Email address</span>
              <span className="truncate text-[13px] font-medium text-ink">
                {user?.email ?? "—"}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-[13px] text-ink-muted">Member since</span>
              <span className="text-[13px] font-medium text-ink">
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  : "—"}
              </span>
            </div>
          </div>

          <p className="mt-5 rounded-control bg-surface-secondary px-3.5 py-3 text-[12px] leading-5 text-ink-muted">
            Need to change your name or email? Contact support and our team will
            update your account.
          </p>
        </Card>

        <Card>
          <h2 className="text-[18px] font-semibold text-ink">Change password</h2>
          <p className="mt-1 text-[13px] leading-5 text-ink-muted">
            Choose a strong password you do not use anywhere else.
          </p>

          <form
            className="mt-5 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              void changePassword();
            }}
          >
            {error && <Alert tone="error">{error}</Alert>}
            {success && <Alert tone="success">{success}</Alert>}

            <Field
              label="Current password"
              value={oldPassword}
              onChange={setOldPassword}
              type="password"
              autoComplete="current-password"
              icon={<LockIcon />}
            />
            <Field
              label="New password"
              value={newPassword}
              onChange={setNewPassword}
              type="password"
              autoComplete="new-password"
              icon={<LockIcon />}
            />
            <Field
              label="Confirm new password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              type="password"
              autoComplete="new-password"
              icon={<LockIcon />}
              error={
                confirmPassword.length > 0 && confirmPassword !== newPassword
                  ? "Passwords do not match."
                  : undefined
              }
            />

            <Button type="submit" loading={saving}>
              Update password
            </Button>
          </form>
        </Card>
      </div>
    </DashboardPage>
  );
}
