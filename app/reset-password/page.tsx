import { redirect } from "next/navigation";

/**
 * Password recovery is a single email + OTP flow at /forgot-password.
 * The old token-link route is kept as a redirect so stale links still work.
 */
export default function ResetPasswordRoute() {
  redirect("/forgot-password");
}
