import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// We create a helper to "hook" Clerk into Axios
export const setupAxiosInterceptors = (getToken) => {
  axiosInstance.interceptors.request.use(async (config) => {
    const token = await getToken();
    console.log("SENDING TOKEN:", token ? "YES" : "NO");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
};

export default axiosInstance;