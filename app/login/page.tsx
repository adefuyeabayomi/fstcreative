import { Suspense } from "react";
import Page from "@/views/Authentications/Login";

export const metadata = {
  title: "Login",
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
