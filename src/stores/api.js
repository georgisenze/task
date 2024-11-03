import { useAuthStore } from "./modules/auth/auth";
import axios from "axios";

let api;

function createApi() {
  api = axios.create({
    baseURL: import.meta.env.VITE_APP_URL,
    json: true,
    withCredentials: false,
    timeout: 50000,
  });
  api.interceptors.request.use((config) => {
    const userSession = useAuthStore();
    if (userSession.isLoggedIn) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${userSession.accessToken}`,
      };
    }
    return config;
  });

  return api;
}

export function useApi() {
  if (!api) {
    createApi();
  }
  return api;
}
