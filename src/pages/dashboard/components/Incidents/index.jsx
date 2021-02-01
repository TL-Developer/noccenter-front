import React from 'react';
import Grid from '@material-ui/core/Grid';
import BigNumber from '@commons/components/BigNumber';

const Incidents = () => (
  <Grid container spacing={2}>
    <Grid item xs={6}>
      <BigNumber
        title="P1"
        subtitle="Incidentes"
        color="#E20000"
        value="15"
      />
    </Grid>

    <Grid item xs={6}>
      <BigNumber
        title="P2"
        subtitle="Incidentes"
        color="#E28800"
        value="25"
      />
    </Grid>

    <Grid item xs={6}>
      <BigNumber
        title="P3"
        subtitle="Incidentes"
        color="#00C7E2"
        value="37"
      />
    </Grid>

    <Grid item xs={6}>
      <BigNumber
        title="P4"
        subtitle="Incidentes"
        color="#9A00E2"
        value="50"
      />
    </Grid>
  </Grid>
);

export default Incidents;
