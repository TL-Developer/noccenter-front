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
  const [incidents, setIncidents] = useState([]);

  const serialize = (data) => {
    const { fields } = data;

    return {
      time: fields.time,
      host: fields.host,
      problem: fields.problem,
      severity: fields.severity,
      duration: fields.EVENT_AGE,
      verified: fields.verified ? 'Sim' : 'Não',
      notification: 2,
      description: { label: fields.description },
    }
  };
  
  useEffect(() => {
    if (window.socket) {
      window.socket.on("incidents_messages", data => {
        debugger
        const incidentSerialized = serialize(JSON.parse(data));

        setIncidents([
          ...incidents,
          incidentSerialized,
        ]);
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
