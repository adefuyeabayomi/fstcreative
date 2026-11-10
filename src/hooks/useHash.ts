"use client";

import { useEffect, useState } from "react";

/**
 * The App Router does not expose the URL hash through `usePathname` or
 * `useSearchParams`, so this small hook keeps it in React state.
 */
export function useHash() {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const update = () => setHash(window.location.hash);

    update();
    window.addEventListener("hashchange", update);

    return () => window.removeEventListener("hashchange", update);
  }, []);

  return hash;
}
