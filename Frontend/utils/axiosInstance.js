// src/api/axios.js
import axios from "axios";

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
    if (error.response?.status === 401) {
      try {
        await axiosInstance.post("/auth/refresh"); // your backend refresh route
        return axiosInstance(error.config); // retry original request
      } catch (refreshError) {
        console.error("Session expired, logging out...");
        // dispatch(logout()) if using Redux
      }
    }
    return Promise.reject(error);
  }
);


export default axiosInstance;
