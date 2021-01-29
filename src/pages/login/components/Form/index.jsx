import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Logo from '../../../commons/components/Logo';

import {
  FormStyled,
  ContainerStyled,
  HeaderStyled,
  TitleStyled,
  SubTitleStyled,
  InputEmailStyled,
  InputPasswordStyled,
  SectionStyled,
  FooterStyled,
  ButtonStyled,
} from './style';

const Form = () => (
  <ContainerStyled>
    <HeaderStyled>
      <Logo />

      <TitleStyled>
        Bem vindo ao NOC Center
      </TitleStyled>
    </HeaderStyled>

    <SectionStyled>
      <SubTitleStyled>
        Entre com seu usuário e senha
      </SubTitleStyled>

      <FormStyled noValidate autoComplete="off">
        <InputEmailStyled id="outlined-basic" label="E-mail" variant="outlined" />
        <InputPasswordStyled id="outlined-basic" label="Senha" type="password" variant="outlined" />
      </FormStyled> 
    </SectionStyled>

    <FooterStyled>
      <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Salvar login e senha"
      />

      <ButtonStyled component={ Link } to="/dashboard" size="large" variant="contained" color="primary">
        Entrar
      </ButtonStyled>
    </FooterStyled>
  </ContainerStyled>
);

export default Form;
