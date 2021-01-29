import React from 'react';
import Grid from '@material-ui/core/Grid';
import MacroViewIncidents from './components/MacroViewIncidents';
import Incidents from './components/Incidents';
import Automation from './components/Automation';
import VerifiedIncidents from './components/VerifiedIncidents';

const Dashboard = () => (
  <Grid container spacing={3}>
    <Grid item xs={6}>
      <MacroViewIncidents />
    </Grid>

    <Grid item xs={6}>
      <Incidents />
    </Grid>

    <Grid item xs={6}>
      <Automation />
    </Grid>

    <Grid item xs={6}>
      <VerifiedIncidents />
    </Grid>
  </Grid>
);

export default Dashboard;
