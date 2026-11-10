import { Suspense } from "react";
import Page from "@/views/Authentications/ForgotPassword";

export const metadata = {
  title: "Forgot Password",
};

// Reads search params, so render per request.
export const dynamic = "force-dynamic";

export default function Route() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}
