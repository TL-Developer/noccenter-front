import axios from 'axios';

// const BASE_URL = 'http://10.242.7.180:3002/api/v1';
const BASE_URL = 'http://10.91.20.82:3002/api/v1';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'}
});

instance.interceptors.response.use((response) => {
  if (response.status >= 400 && response.status <= 503) {
    return Promise.reject(response.data);
  }
  return response.data;
}, error => {
  error.response.data.error = true;
  Promise.reject(error.response);
  return {
    data: error.response,
  };
});

export default instance;
