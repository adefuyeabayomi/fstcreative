"use client";

import { useEffect, useRef, useState } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import googleIcon from "@/assets/google-logo.png";

interface GoogleAuthButtonProps {
  onCredential: (idToken: string) => void | Promise<void>;
  onError?: (message: string) => void;
  onUnavailable?: () => void;
  mode?: "signin" | "signup";
}

const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID?.trim();

const buttonClasses =
  "flex h-12 w-full items-center justify-center gap-2 rounded-control border border-black/[0.06] bg-surface-primary text-sm font-medium text-ink-muted shadow-card transition-colors hover:border-black/10 hover:bg-surface-secondary/40";

export function GoogleAuthButton({
  onCredential,
  onError,
  onUnavailable,
}: GoogleAuthButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(400);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateWidth = () => setWidth(Math.max(200, Math.floor(element.clientWidth)));
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  if (!clientId) {
    return (
      <button type="button" onClick={onUnavailable} className={buttonClasses}>
        <img src={googleIcon.src} alt="" className="h-4 w-4" />
        Continue with Google
      </button>
    );
  }

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div
        ref={containerRef}
        className="flex h-12 w-full items-center justify-center overflow-hidden rounded-control [&>div]:!w-full [&_iframe]:!mx-auto [&_iframe]:!block"
      >
        <GoogleLogin
          text="continue_with"
          shape="rectangular"
          theme="outline"
          size="large"
          logo_alignment="center"
          width={String(width)}
          onSuccess={(response) => {
            if (response.credential) {
              void onCredential(response.credential);
            } else {
              onError?.("Google did not return a credential. Please try again.");
            }
          }}
          onError={() =>
            onError?.(
              "Google sign-in could not start. Check that pop-ups are allowed and try again.",
            )
          }
        />
      </div>
    </GoogleOAuthProvider>
  );
}
