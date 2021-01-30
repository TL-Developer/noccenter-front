import React from 'react';
import Grid from '@material-ui/core/Grid';
import AlertsTable from './components/AlertsTable';

import {
  CardStyled,
} from './style';

const IncidentsHistory = () => {
  return (
    <Grid container>
      <CardStyled>
        <AlertsTable />
      </CardStyled>
    </Grid>
  );
}

export default IncidentsHistory;
