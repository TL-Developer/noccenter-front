import http from '@commons/utils/request';

export const get = () => {
  return http.get('/model');
};

