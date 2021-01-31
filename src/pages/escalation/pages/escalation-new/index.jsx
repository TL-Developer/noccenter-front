import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import CreateEscalation from '@pages/escalation/components/CreateEscalation';
import Snackbar from '@commons/components/Snackbar';
import { useHistory } from "react-router-dom";
import * as escalation from '@pages/escalation/services/escalation';

import {
  TitleStyled,
  CardStyled,
} from './style';

const escalationsData = [
  {
    contact: "",
    email: "",
    job: "",
    name: "",
    order: "1º Escalation",
    squad: "",
    techLead: ""
  },
  {
    contact: "",
    email: "",
    job: "",
    name: "",
    order: "2º Escalation",
    squad: "",
    techLead: ""
  },
  {
    contact: "",
    email: "",
    job: "",
    name: "",
    order: "3º Escalation",
    squad: "",
    techLead: ""
  }
];

const EscalationNew = () => {
  const [escalations, setEscalations] = useState(escalationsData);
  const [squad, setSquad] = useState(escalationsData[0].squad);
  const [techLead, setTechLead] = useState(escalationsData[0].techLead);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [messageSnackbar, setMessageSnackbar] = useState('');
  const [severitySnackbar, setSeveritySnackbar] = useState('success');
  const history = useHistory();
  const timeoutSnackbar = 5000;

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const saveEscalation = async () => {
    const body = escalations.map((escalation) => ({
      ...escalation,
      squad,
      techLead,
    }));

    try {
      await escalation.post(body);

      history.push("/escalation");
      setOpenSnackbar(true);
      setSeveritySnackbar('success');
      setMessageSnackbar('Salvo com sucesso');
      setTimeout(() => {
        setOpenSnackbar(false);
      }, timeoutSnackbar)
    } catch (error) {
      console.log(error);
      setOpenSnackbar(true);
      setSeveritySnackbar('error');
      setMessageSnackbar('Ops! Ocorreu um erro');
      setTimeout(() => {
        setOpenSnackbar(false);
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
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        autoHideDuration={6000}
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        message={messageSnackbar}
        severity={severitySnackbar}
      />
      <CardStyled>
        <TitleStyled>
          <p>Cadastrando escalation</p>
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

export default EscalationNew;
