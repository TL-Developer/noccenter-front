import React from 'react';
import Grid from '@material-ui/core/Grid';
import BigNumber from '../../../commons/components/BigNumber';

const Incidents = () => (
  <Grid container spacing={2}>
    <Grid noGutters item xs={6}>
      <BigNumber
        title="P1"
        subtitle="Incidentes"
        color="#ff3300"
        value="16"
      />
    </Grid>

    <Grid item xs={6}>
      <BigNumber
        title="P2"
        subtitle="Incidentes"
        color="#E28800"
        value="16"
      />
    </Grid>

    <Grid item xs={6}>
      <BigNumber
        title="P3"
        subtitle="Incidentes"
        color="#9A00E2"
        value="16"
      />
    </Grid>

    <Grid item xs={6}>
      <BigNumber
        title="P4"
        subtitle="Incidentes"
        color="#ff3300"
        value="16"
      />
    </Grid>
  </Grid>
);

export default Incidents;
