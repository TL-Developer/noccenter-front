import React from 'react';
import Grid from '@material-ui/core/Grid';
import TableIncidents from './components/TableIncidents';

import {
  TitleStyled,
  CardStyled,
} from './style';

const Incidents = () => (
  <Grid container>
    <Grid item xs={12}>
      <CardStyled>
        <TitleStyled>
          <p>Visualizar por: Prioridade</p>
        </TitleStyled>

        <TableIncidents />    
      </CardStyled>
    </Grid>
  </Grid>
);

export default Incidents;
