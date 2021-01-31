import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://10.242.7.180:3002/api/v1',
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
