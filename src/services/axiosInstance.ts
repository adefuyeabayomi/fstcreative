import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";

/**
 * Shared client for remaining dashboard services. Relative URLs pass through
 * the Next.js /api rewrite, keeping httpOnly auth cookies first-party.
 */
export const axiosInstance = axios.create({
  baseURL: "",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

type RetryConfig = InternalAxiosRequestConfig & { _authRetried?: boolean };
let refreshInFlight: Promise<unknown> | null = null;

function refreshSession() {
  refreshInFlight ??= axios
    .post(
      "/api/v1/user-auth/refresh",
      {},
      { withCredentials: true, headers: { "Content-Type": "application/json" } },
    )
    .finally(() => {
      refreshInFlight = null;
    });
  return refreshInFlight;
}

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const config = error.config as RetryConfig | undefined;
    const isAuthRequest = config?.url?.includes("/user-auth/");
    if (error.response?.status === 401 && config && !config._authRetried && !isAuthRequest) {
      config._authRetried = true;
      try {
        await refreshSession();
        return axiosInstance.request(config);
      } catch (refreshError) {
        window.dispatchEvent(new Event("fst:user-session-expired"));
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);
