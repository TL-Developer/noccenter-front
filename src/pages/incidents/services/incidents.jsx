import http from '@commons/utils/request';

export const getAlerts = () => {
  return http.get('/incidentHistory');
};

