import { Suspense } from "react";
import Page from "@/views/Pricing";

export const metadata = {
  title: "Pricing",
};

// The pricing page reads search params (selected plan) and the URL hash
// (service category), so render it per request instead of prerendering.
export const dynamic = "force-dynamic";

export default function Route() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  );
}
