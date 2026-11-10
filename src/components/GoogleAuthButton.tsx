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

export function GoogleAuthButton({
  onCredential,
  onError,
  onUnavailable,
  mode = "signin",
}: GoogleAuthButtonProps) {
  if (!clientId) {
    return (
      <button
        type="button"
        onClick={onUnavailable}
        className="flex h-11 w-full items-center justify-center gap-2.5 rounded-control border border-black/[0.06] bg-surface-primary text-sm font-medium text-ink-muted shadow-card transition-all hover:border-brand/40 hover:shadow-floating active:scale-[0.98]"
      >
        <img src={googleIcon.src} alt="" className="h-4 w-4" />
        Continue with Google
      </button>
    );
  }

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="flex justify-center [&>div]:w-full">
        <GoogleLogin
          text={mode === "signup" ? "signup_with" : "signin_with"}
          shape="rectangular"
          theme="outline"
          size="large"
          width="336"
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
    </GoogleOAuthProvider>
  );
}
