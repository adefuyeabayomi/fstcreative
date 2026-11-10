"use client";

"use client";

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { SocialButton } from "@/components/Button/Main";
import googleIconSvg from "@/assets/google-logo.png";
import { useNotificationTrigger } from "@/contexts/notificationTrigger";

interface GoogleAuthButtonProps {
  onCredential: (idToken: string) => void | Promise<void>;
  mode?: "signin" | "signup";
}

/**
 * Renders Google's official button when NEXT_PUBLIC_GOOGLE_CLIENT_ID is set.
 * Without a client id it degrades to the site's social button + a notice.
 */
export function GoogleAuthButton({
  onCredential,
  mode = "signin",
}: GoogleAuthButtonProps) {
  const { triggerError } = useNotificationTrigger();
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  if (!clientId) {
    return (
      <SocialButton
        icon={<img src={googleIconSvg.src} alt="Google" />}
        actionFn={() =>
          triggerError({
            title: "Google sign-in",
            message:
              "Google sign-in is not configured yet. Add NEXT_PUBLIC_GOOGLE_CLIENT_ID.",
          })
        }
        text={mode === "signup" ? "Sign Up With Google" : "Sign In With Google"}
      />
    );
  }

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        text={mode === "signup" ? "signup_with" : "signin_with"}
        shape="pill"
        theme="outline"
        size="large"
        width="320"
        onSuccess={(credentialResponse) => {
          if (credentialResponse.credential) {
            void onCredential(credentialResponse.credential);
          }
        }}
        onError={() =>
          triggerError({
            title: "Google sign-in failed",
            message: "Please try again.",
          })
        }
      />
    </GoogleOAuthProvider>
  );
}
