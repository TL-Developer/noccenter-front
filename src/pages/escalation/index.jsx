import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import EscalationTable from './components/EscalationTable';
import Button from '@commons/components/Button';

import {
  ButtonStyled,
  CardStyled,
} from './style';

const Escalation = () => (
  <Grid container>
    <Grid item xs={12}>
      <CardStyled>
          <ButtonStyled>
            <Link to="/escalation/new">
              <Button>Criar novo grupo</Button>
            </Link>
          </ButtonStyled>
        <EscalationTable />    
      </CardStyled>
    </Grid>
  </Grid>
);

export default Escalation;
