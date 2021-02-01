import http from '@commons/utils/request';

export const post = (body) => {
  return http.post('/asterisk', body);
};
