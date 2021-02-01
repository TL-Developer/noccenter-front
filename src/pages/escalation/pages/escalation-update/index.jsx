import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import CreateEscalation from '@pages/escalation/components/CreateEscalation';
import * as escalation from '@pages/escalation/services/escalation'; 

import {
  TitleStyled,
  CardStyled,
} from './style';

const escalationsData = [
  {
    contact: "11111111",
    email: "tiago.lima@xpi.com.br",
    job: "gerente",
    name: "tiago",
    order: "1º Escalation",
    squad: "tttt",
    techLead: "tttt"
  },
  {
    contact: "11111111",
    email: "tiago.lima@xpi.com.br",
    job: "gerente",
    name: "tiago",
    order: "2º Escalation",
    squad: "tttt",
    techLead: "tttt"
  },
  {
    contact: "11111111",
    email: "tiago.lima@xpi.com.br",
    job: "gerente",
    name: "tiago",
    order: "3º Escalation",
    squad: "tttt",
    techLead: "tttt"
  }
];

const EscalationUpdate = () => {
  const [escalations, setEscalations] = useState(escalationsData);
  const [squad, setSquad] = useState(escalationsData[0].squad);
  const [techLead, setTechLead] = useState(escalationsData[0].techLead);
  const timeoutSnackbar = 5000;

  const saveEscalation = async () => {
    const body = escalations.map((escalation) => ({
      ...escalation,
      squad,
      techLead,
    }));

    if (window.setState && window.setState.setLoading) {
      window.setState.setLoading(true);
    }

    try {
      await escalation.post(body);

      if (window.setState && window.setState.setLoading) {
        window.setState.setLoading(false);
      }

      window.setState.setOpenSnackbar(true);
      window.setState.setSeveritySnackbar('success');
      window.setState.setMessageSnackbar('Salvo com sucesso');

      setTimeout(() => {
        window.setState.setOpenSnackbar(false);
      }, timeoutSnackbar)
    } catch (error) {
      console.log(error);
      window.setState.setOpenSnackbar(true);

      window.setState.setSeveritySnackbar('error');
      window.setState.setMessageSnackbar('Ops! Ocorreu um erro');

      if (window.setState && window.setState.setLoading) {
        window.setState.setLoading(false);
      }

      setTimeout(() => {
        window.setState.setOpenSnackbar(false);
      }, timeoutSnackbar)
    }
  };

  const onChange = (e, escalation, index, key) => {
    const { target: { value } } = e;
    const newEscalations = escalations;
    
    escalation[key] = value;
    newEscalations[index] = escalation;
   
    setEscalations([
      ...newEscalations,
    ]);
  };

  return (
    <Grid container>
      <CardStyled>
        <TitleStyled>
          <p>Editar escalation</p>
        </TitleStyled>
      
        <CreateEscalation
          saveEscalation={saveEscalation}
          onChange={(e, escalation, index, key) => onChange(e, escalation, index, key)}
          escalations={escalations}
          squad={squad}
          techLead={techLead}
          setEscalations={setEscalations}
          setSquad={setSquad}
          setTechLead={setTechLead}
        />
      </CardStyled>
    </Grid>
  );
}

export default EscalationUpdate;
