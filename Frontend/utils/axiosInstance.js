// src/api/axios.js
import axios from "axios";

// ✅ Axios instance with environment-based base URL
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // allow cookies (if backend sets HttpOnly cookies)
});



export default axiosInstance;
