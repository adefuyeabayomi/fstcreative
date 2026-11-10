import axios from "axios";

const localUrl = "http://localhost:3000";
const productionURL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.denateonlineservice.com";

function backendUrl() {
  // During server-side rendering `window` is not available.
  if (typeof window === "undefined") {
    return productionURL;
  }

  const hostname = window.location.hostname;
  return hostname === "localhost" || hostname === "127.0.0.1"
    ? localUrl
    : productionURL;
}

export const axiosInstance = axios.create({
  baseURL: backendUrl(),
  headers: {
    "Content-Type": "application/json", // Set the content type to JSON
  },
});
