import { displayNotification } from '@/utils/notifications';
import statusCodesArray from '@/utils/statusCodes';
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

const BASE_URL = 'http://localhost:5000/api';
const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors for handling responses
api.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data.status && response.data.status.type === 'success') {
      const statusCode = statusCodesArray.find(code => code.code === response.data.status.code);
      if (statusCode) {
        displayNotification(statusCode);
      }
    }
    return response.data;
  },
  (error: AxiosError) => {
    if (error.response) {
      const errorData = error.response.data as ApiResponse<null>;
      const statusCode = statusCodesArray.find(code => code.code === errorData.status.code);
      if (statusCode) {
        displayNotification(statusCode);
        throw new Error(errorData.status.message);
      }
    } else {
      const statusCode = statusCodesArray.find(code => code.code === 'GENERAL_001');
      if (statusCode) {
        displayNotification(statusCode);
        throw new Error(statusCode.message);
      }
    }
  }
);
 
export default api;

interface ApiResponse<T> {
  status: {
    code: string;
    message: string;
    type: 'success' | 'error';
  };
  data: T;
}