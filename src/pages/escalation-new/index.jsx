import React from 'react';
import Grid from '@material-ui/core/Grid';
import CreateEscalation from './components/CreateEscalation';

import {
  TitleStyled,
  CardStyled,
} from './style';

const EscalationNew = () => {
  return (
    <Grid container>
      <CardStyled>
        <TitleStyled>
          <p>Cadastrando escalation</p>
        </TitleStyled>

        <CreateEscalation />
      </CardStyled>
    </Grid>
  );
}

export default EscalationNew;
