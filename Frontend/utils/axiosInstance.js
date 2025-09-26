// src/api/axios.js
import axios from "axios";
import store  from "../app/store.js";
import { refreshToken } from "../src/app/Slices/authSlice.js";

// ✅ Axios instance with environment-based base URL
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // allow cookies (if backend sets HttpOnly cookies)
});

// ✅ Optional: request interceptor to add tokens
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {

        await store.dispatch(refreshToken()).unwarap();
        const newToken = localStorage.getItem("accessToken");

        if(newToken){
          originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        console.error("Session expired, logging out...");
        dispatch(logout());
        window.location.href = "/login"; 
      }
    }
    return Promise.reject(error);
  }
);


export default axiosInstance;
