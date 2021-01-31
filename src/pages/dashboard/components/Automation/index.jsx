import React from 'react';
import Card from '@commons/components/Card';
import FeatherIcon from '@commons/components/FeatherIcon';

import {
  TitleStyled,
  SectionStyled,
  CardStyled,
  FeatherIconStyled,
  ContainerStyled,
} from './style';

const Automation = () => (
  <Card>
    <TitleStyled>
      Automação
    </TitleStyled>

    <SectionStyled>
      <CardStyled>
        <ContainerStyled>
          <FeatherIcon icon="message-square" size="48" />
          <p>
            Criar modelo <br /> de <br /> automação
          </p>
        </ContainerStyled>
      </CardStyled>

      <CardStyled>
        <ContainerStyled>
          <FeatherIcon icon="sliders" size="48" />
          <p>
            Visualizar <br /> Escalation
          </p>
        </ContainerStyled>
      </CardStyled>

      <CardStyled /> 
    </SectionStyled>
  </Card>
);

export default Automation;
