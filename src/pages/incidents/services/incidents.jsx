import http from '@commons/utils/request';

export const getIncidentsHistory = () => {
  return http.get('/incidentHistory');
};

export const postIncidentsHistory = (body) => {
  return http.post('/incidentHistory', body);
};

