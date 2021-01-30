import React from 'react';
import Grid from '@material-ui/core/Grid';
import MacroViewIncidents from './components/MacroViewIncidents';
import Incidents from './components/Incidents';
import Automation from './components/Automation';
import VerifiedIncidents from './components/VerifiedIncidents';

const Dashboard = () => (
  <Grid container spacing={3}>
    <Grid item xs={7}>
      <MacroViewIncidents />
    </Grid>

    <Grid item xs={5}>
      <Incidents />
    </Grid>

    <Grid item xs={7}>
      <Automation />
    </Grid>

    <Grid item xs={5}>
      <VerifiedIncidents />
    </Grid>
  </Grid>
);

export default Dashboard;
