import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TableIncidents from './components/TableIncidents';

import {
  TitleStyled,
  CardStyled,
} from './style';

const incidentesData = [
  {
    time: '16:04',
    host: 'Appdynamics_PRD_RICO_BACK_END',
    problem: 'HR: Business_Transaction_error_rate | TIER: ',
    severity: 'P1',
    duration: '5h 19m 42s',
    verified: 'Sim',
    notification: 2,
    description: { label: 'Operation Data: OPEN (0)' },
  },
  {
    time: '16:04',
    host: 'Appdynamics_PRD_RICO_BACK_END',
    problem: 'HR: Business_Transaction_error_rate | TIER: ',
    severity: 'P1',
    duration: '5h 19m 42s',
    verified: 'Sim',
    notification: 2,
    description: { label: 'Operation Data: OPEN (0)' },
  },
];

const Incidents = () => {
  const [incidents, setIncidents] = useState(incidentesData);

  const serialize = (data) => {
    debugger
    const { fields } = data;
    const newDataIncidents = data.map((incident) => {
      // const result = {
      //   "id":data.EVENT_ID,
      //   "time": data.EVENT_TIME,
      //   "date": data.EVENT_DATE,
      //   "host": data.HOST_HOST1,
      //   "problem": data.ALERT_SUBJECT,
      //   "severity": data.TRIGGER_SEVERITY,
      //   "duration": data.EVENT_AGE,
      //   "verified": false,
      //   "notification": false,
      //   "description": { "label": data.EVENT_TAGS }
      // };
      return {
        time: incident.EVENT_TIME,
        host: incident.HOST_HOST1,
        problem: incident.ALERT_SUBJECT,
        severity: incident.TRIGGER_SEVERITY,
        duration: incident.EVENT_AGE,
        verified: 'Nao',
        notification: 2,
        description: { label: incident.EVENT_TAGS },
      };
    });
  };
  
  useEffect(() => {
    if (window.socket) {
      window.socket.on("incidents_messages", data => {
        debugger
        // serialize(data);
        console.log(data);
      });
    }
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <CardStyled>
          <TitleStyled>
            <p>Visualizar por: Prioridade</p>
          </TitleStyled>

          <TableIncidents dataIncidents={incidents} />    
        </CardStyled>
      </Grid>
    </Grid>
  );
}

export default Incidents;
