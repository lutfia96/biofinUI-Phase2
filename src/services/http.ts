import axios, { AxiosRequestConfig } from "axios";

const privateBaseUrl = "https://biofin-egaz.zmotion.co.tz/api/";
// const privateBaseUrl = "https://biofin.zmotion.co.tz/api/";
export const axiosInstance = axios.create({
  baseURL: privateBaseUrl,
});
const token = "biofin-key-2344";

export const privateAxiosInstance = axios.create({
  baseURL: privateBaseUrl,
  headers: {
    "X-System-API-Token": token,
  },
});

export const get = async <T>(url: string, config?: AxiosRequestConfig) => {
  return axiosInstance.get<T>(url, config);
};

export const post = async <T>(url: string, data: any) => {
  return axiosInstance.post<T>(url, data, { headers: {} });
};

export const postPayment = async <T>(url: string, data: any) => {
  return privateAxiosInstance.post<T>(url, data);
};
