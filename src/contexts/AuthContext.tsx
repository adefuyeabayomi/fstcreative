"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { userAuthApi, type SessionUser } from "@/api/userAuth";

export type { SessionUser };

interface RegisterInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface AuthContextType {
  /** False until the initial session lookup finishes. */
  isReady: boolean;
  isAuthenticated: boolean;
  user: SessionUser | null;
  email: string;

  /** Step 1 of password login. Returns true when an OTP is required. */
  login: (email: string, password: string) => Promise<{ requiresOtp: boolean }>;
  /** Step 2: exchange the emailed code for a session. */
  verifyOtp: (email: string, otp: string) => Promise<void>;

  register: (input: RegisterInput) => Promise<void>;
  verifyEmail: (email: string, otp: string) => Promise<void>;
  googleSignIn: (idToken: string) => Promise<void>;

  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;

  forgotPassword: (email: string) => Promise<string>;
  resetPassword: (email: string, otp: string, newPassword: string) => Promise<string>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [user, setUser] = useState<SessionUser | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const session = await userAuthApi.me();
        if (!cancelled) setUser(session.user);
      } catch {
        if (!cancelled) setUser(null);
      } finally {
        if (!cancelled) setIsReady(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const expire = () => setUser(null);
    window.addEventListener("fst:user-session-expired", expire);
    return () => window.removeEventListener("fst:user-session-expired", expire);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const result = await userAuthApi.login(email, password);
    // The backend always requires the emailed OTP for password sign-in.
    return { requiresOtp: result.requiresOtp !== false };
  }, []);

  const verifyOtp = useCallback(async (email: string, otp: string) => {
    const session = await userAuthApi.verifyOtp(email, otp);
    setUser(session.user);
  }, []);

  const register = useCallback(async (input: RegisterInput) => {
    await userAuthApi.register(input);
  }, []);

  const verifyEmail = useCallback(async (email: string, otp: string) => {
    const session = await userAuthApi.verifyEmail(email, otp);
    setUser(session.user);
  }, []);

  const googleSignIn = useCallback(async (idToken: string) => {
    const session = await userAuthApi.google(idToken);
    setUser(session.user);
  }, []);

  const logout = useCallback(async () => {
    try {
      await userAuthApi.logout();
    } finally {
      setUser(null);
    }
  }, []);

  const refreshUser = useCallback(async () => {
    try {
      const session = await userAuthApi.me();
      setUser(session.user);
    } catch {
      setUser(null);
    }
  }, []);

  const forgotPassword = useCallback(async (email: string) => {
    const result = await userAuthApi.forgotPassword(email);
    return result.message;
  }, []);

  const resetPassword = useCallback(
    async (email: string, otp: string, newPassword: string) => {
      const result = await userAuthApi.resetPassword(email, otp, newPassword);
      return result.message;
    },
    [],
  );

  const value = useMemo<AuthContextType>(
    () => ({
      isReady,
      isAuthenticated: Boolean(user),
      user,
      email: user?.email ?? "",
      login,
      verifyOtp,
      register,
      verifyEmail,
      googleSignIn,
      logout,
      refreshUser,
      forgotPassword,
      resetPassword,
    }),
    [
      isReady,
      user,
      login,
      verifyOtp,
      register,
      verifyEmail,
      googleSignIn,
      logout,
      refreshUser,
      forgotPassword,
      resetPassword,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
