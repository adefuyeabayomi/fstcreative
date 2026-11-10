"use client";

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import googleIcon from "@/assets/google-logo.png";

interface GoogleAuthButtonProps {
  onCredential: (idToken: string) => void | Promise<void>;
  onError?: (message: string) => void;
  onUnavailable?: () => void;
  mode?: "signin" | "signup";
}

const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

const buttonClasses =
  "flex h-12 w-full items-center justify-center gap-2 rounded-control border border-black/[0.06] bg-surface-primary text-sm font-medium text-ink-muted shadow-card transition-colors hover:border-black/10 hover:bg-surface-secondary/40";

export function GoogleAuthButton({
  onCredential,
  onError,
  onUnavailable,
  mode = "signin",
}: GoogleAuthButtonProps) {
  const label =
    mode === "signup" ? "Continue with Google" : "Continue with Google";

  const visual = (
    <span className={buttonClasses} aria-hidden="true">
      <img src={googleIcon.src} alt="" className="h-4 w-4" />
      {label}
    </span>
  );

  if (!clientId) {
    return (
      <button type="button" onClick={onUnavailable} className={buttonClasses}>
        <img src={googleIcon.src} alt="" className="h-4 w-4" />
        {label}
      </button>
    );
  }

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="relative h-12 w-full">
        {visual}
        {/* Real Google Identity button, transparently overlaid so the visible
            control can use our layout while keeping Google's auth flow. */}
        <div className="absolute inset-0 z-10 cursor-pointer overflow-hidden opacity-0 [&_div]:h-full [&_div]:w-full [&_iframe]:!h-full [&_iframe]:!w-full">
          <GoogleLogin
            text={mode === "signup" ? "signup_with" : "signin_with"}
            shape="rectangular"
            theme="outline"
            size="large"
            width="400"
            onSuccess={(response) => {
              if (response.credential) {
                void onCredential(response.credential);
              } else {
                onError?.("Google did not return a credential. Please try again.");
              }
            }}
            onError={() => onError?.("Google sign-in failed. Please try again.")}
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
