import http from '@commons/utils/request';

export const get = () => {
  return http.get('/escalation');
};

export const post = (body) => {
  return http.post('/escalation', body);
};
