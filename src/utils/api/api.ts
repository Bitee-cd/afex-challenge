import axios, { AxiosInstance } from "axios";

export const baseURL = {
  live: "https://afex-frontend-technical-challenge-api.onrender.com/api/v1",
};

const apiClient: AxiosInstance = axios.create({
  baseURL: baseURL.live,
  timeout: 60000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const useApiClient = () => {
  return apiClient;
};

export default useApiClient;
