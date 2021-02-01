import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TableIncidents from './components/TableIncidents';

import {
  TitleStyled,
  CardStyled,
} from './style';

// const incidentesData = [
//   {
//     id: '1',
//     time: '16:04',
//     host: 'Appdynamics_PRD_RICO_BACK_END',
//     problem: 'HR: Business_Transaction_error_rate | TIER: ',
//     severity: 'P1',
//     duration: '5h 19m 42s',
//     verified: 'Sim',
//     notification: 2,
//     description: { label: 'Operation Data: OPEN (0)' },
//   },
//   {
//     id: '2',
//     time: '16:04',
//     host: 'Appdynamics_PRD_RICO_BACK_END',
//     problem: 'HR: Business_Transaction_error_rate | TIER: ',
//     severity: 'P1',
//     duration: '5h 19m 42s',
//     verified: 'Sim',
//     notification: 2,
//     description: { label: 'Operation Data: OPEN (0)' },
//   },
//   {
//     id: '3',
//     time: '16:04',
//     host: 'Appdynamics_PRD_RICO_BACK_END',
//     problem: 'HR: Business_Transaction_error_rate | TIER: ',
//     severity: 'P1',
//     duration: '5h 19m 42s',
//     verified: 'Sim',
//     notification: 2,
//     description: { label: 'Operation Data: OPEN (0)' },
//   },
// ];

const IncidentsScreen = () => {
  const [incidents, setIncidents] = useState([]);
  const [newincident, setNewincident] = useState(false);

  const serialize = (data) => {
    const { fields } = data;

    return {
      id: fields.id,
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
    window.socket.on("incidents_messages", data => {
      const dataParsed = JSON.parse(data);
      const newIncidents = incidents;
      const incident = dataParsed.fields;
      const incidentId = incident?.id;

      if (incidentId) {
        if (incident.EVENT_VALUE === '0') {
          const findIndexIncident = newIncidents.findIndex((inc) => inc.id === incidentId);
          
          if (findIndexIncident !== -1) {
            newIncidents.splice(findIndexIncident, 1);

            setIncidents([
              ...newIncidents,
            ]);
    
            setNewincident(true);
    
            setTimeout(() => {
              setNewincident(false);
            }, 300);
          }
        } else {
          const incidentSerialized = serialize(dataParsed);

          newIncidents.push(incidentSerialized);

          setIncidents([
            ...newIncidents,
          ]);

          setNewincident(true);

          setTimeout(() => {
            setNewincident(false);
          }, 50);
        }
      } else {
        console.log('Zabix não enviou o id')
      }
    });
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <CardStyled>
          <TitleStyled>
            <p>GESTÃO DE INCIDENTES</p>
          </TitleStyled>

          <TableIncidents newincident={newincident} incidents={incidents} />    
        </CardStyled>
      </Grid>
    </Grid>
  );
}

export default IncidentsScreen;
