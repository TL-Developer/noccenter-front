import http from '@commons/utils/request';

export const post = () => {
  return http.post('/automation');
};

