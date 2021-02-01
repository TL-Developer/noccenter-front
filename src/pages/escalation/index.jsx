import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import EscalationTable from './components/EscalationTable';
import Button from '@commons/components/Button';

import {
  ButtonStyled,
  CardStyled,
  TitleStyled,
} from './style';

const Escalation = () => (
  <Grid container>
    <Grid item xs={12}>
      <CardStyled>
          <header>
            <TitleStyled>
              <p>ESCALATION</p>
            </TitleStyled>
            
            <ButtonStyled>
              <Link to="/escalation/new">
                <Button>Criar novo grupo</Button>
              </Link>
            </ButtonStyled>
          </header>

        <EscalationTable />    
      </CardStyled>
    </Grid>
  </Grid>
);

export default Escalation;
