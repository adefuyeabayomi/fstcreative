/**
 * Client for the fst_backend public-user auth API.
 *
 * Requests use relative URLs so the Next.js rewrite proxies them to the
 * Express server; the httpOnly session cookies are therefore first-party.
 */

export interface SessionUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  status: string;
  lastLoginAt: string | null;
  createdAt: string;
}

export interface OtpChallenge {
  message: string;
  expiresInMinutes: number;
  requiresOtp?: boolean;
}

interface Envelope<T> {
  success: boolean;
  message?: string;
  error?: string;
  data: T;
}

const BASE = "/api/v1/user-auth";

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(`${BASE}${path}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
    ...init,
  });

  let payload: Envelope<T> | null = null;
  try {
    payload = (await response.json()) as Envelope<T>;
  } catch {
    payload = null;
  }

  if (!response.ok || !payload?.success) {
    throw new Error(
      payload?.error || payload?.message || `Request failed (${response.status})`,
    );
  }

  return payload.data;
}

export const userAuthApi = {
  register: (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => request<{ user: SessionUser }>("/register", { method: "POST", body: JSON.stringify(data) }),

  verifyEmail: (email: string, otp: string) =>
    request<{ user: SessionUser }>("/verify-email", {
      method: "POST",
      body: JSON.stringify({ email, otp }),
    }),

  resendOtp: (email: string, purpose: "verify_email" | "login") =>
    request<OtpChallenge>("/resend-otp", {
      method: "POST",
      body: JSON.stringify({ email, purpose }),
    }),

  login: (email: string, password: string) =>
    request<OtpChallenge>("/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  verifyOtp: (email: string, otp: string) =>
    request<{ user: SessionUser }>("/otp", {
      method: "POST",
      body: JSON.stringify({ email, otp }),
    }),

  google: (idToken: string) =>
    request<{ user: SessionUser }>("/google", {
      method: "POST",
      body: JSON.stringify({ idToken }),
    }),

  me: async () => {
    try {
      return await request<{ user: SessionUser }>("/me");
    } catch {
      // The access cookie is short lived; try a silent refresh once.
      await request<{ user: SessionUser }>("/refresh", {
        method: "POST",
        body: "{}",
      });
      return request<{ user: SessionUser }>("/me");
    }
  },

  refresh: () => request<{ user: SessionUser }>("/refresh", { method: "POST", body: "{}" }),

  logout: () => request<{ message: string }>("/logout", { method: "POST", body: "{}" }),

  forgotPassword: (email: string) =>
    request<{ message: string; expiresInMinutes: number }>("/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email }),
    }),

  resetPassword: (email: string, otp: string, newPassword: string) =>
    request<{ message: string }>("/reset-password", {
      method: "POST",
      body: JSON.stringify({ email, otp, newPassword }),
    }),
};
