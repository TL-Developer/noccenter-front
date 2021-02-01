import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import AutomationModels from './components/AutomationModels';
import Button from '@commons/components/Button';

import {
  ButtonStyled,
  CardStyled,
  TitleStyled,
} from './style';

const Automation = () => (
  <Grid container>
    <Grid item xs={12}>
      <CardStyled>
          <header>
            <TitleStyled>
              <p>AUTOMATION</p>
            </TitleStyled>

            <ButtonStyled>
              <Link to="/automation/new">
                <Button>Criar novo modelo</Button>
              </Link>
            </ButtonStyled>
          </header>
          
        <AutomationModels />    
      </CardStyled>
    </Grid>
  </Grid>
);

export default Automation;
