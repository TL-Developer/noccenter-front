import React from 'react';
import Grid from '@material-ui/core/Grid';
import Form from './components/Form';
import Hero from './components/Hero';

import {
  FormStyled,
  HeroStyled,
} from './style';

const Login = () => (
  <Grid style={{ height: '100vh' }} container>
    <FormStyled item xs={6}>
      <Form />
    </FormStyled>
    
    <HeroStyled item xs={6}>
      <Hero />
    </HeroStyled>
  </Grid>
);

export default Login;
