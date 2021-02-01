import React from 'react';
import Card from '@commons/components/Card';
import FeatherIcon from '@commons/components/FeatherIcon';
import { Link } from 'react-router-dom';

import {
  TitleStyled,
  SectionStyled,
  CardStyled,
  ContainerStyled,
} from './style';

const Automation = () => (
  <Card>
    <TitleStyled>
      Operações
    </TitleStyled>

    <SectionStyled>
      <CardStyled>
        <Link to="/incidents">
          <ContainerStyled>
            <FeatherIcon icon="inbox" size="30" />
            <p>
              Gestão de <br /> incidentes
            </p>
          </ContainerStyled>
        </Link>
      </CardStyled>

      <CardStyled>
        <Link to="/automation">
          <ContainerStyled>
            <FeatherIcon icon="cpu" size="30" />
            <p>
              Modelos de <br />automação
            </p>
          </ContainerStyled>
        </Link>
      </CardStyled>

      <CardStyled>
        <Link to="/escalation">
          <ContainerStyled>
            <FeatherIcon icon="users" size="30" />
            <p>
              Visualizar <br />Escalation
            </p>
          </ContainerStyled>
        </Link>
      </CardStyled>
    </SectionStyled>
  </Card>
);

export default Automation;
