import { Suspense } from "react";
import Page from "@/views/Authentications/Signup";

export const metadata = {
  title: "Create Account",
};

// This page reads search params, so render it per request.
export const dynamic = "force-dynamic";

export default function Route() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}
