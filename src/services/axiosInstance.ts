import axios from "axios";
let localUrl = "http://localhost:3000";
let productionURL = "https://api.denateonlineservice.com";

function backendUrl() {
  console.log({ LOCATION: window.location.hostname });
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
