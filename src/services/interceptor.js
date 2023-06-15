import axios from "axios";
import { config } from "../config";

const token = JSON.parse(localStorage.getItem("auth"))

const axiosService = axios.create({
  baseURL: config.baseUrl,
  headers: {
    "Content-Type": "application/json"
  }
})

axiosService.interceptors.request.use(
  config => {
    // Modify request config
    config.headers.Authorization = `Bearer ${token}`
    return config;
  },
  error => {
    // Handle request error
    return Promise.reject(error);
  }
);

axiosService.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      // handle unauthorized error
    } else if (error.response && error.response.status === 404) {
      // handle not found error
    } else {
      // handle other errors
    }
    return Promise.reject(error);
  }
);

export default axiosService