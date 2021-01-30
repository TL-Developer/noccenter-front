import React,  { useState } from 'react';
import Counter from '@commons/components/Counter';
import Button from '@commons/components/Button';

import {
  CreateStepsAutomationStyled,
  ModelNameStyled,
  ModelDescriptionStyled,
  CounterStyled,
  FooterStyled,
} from './style';

const CreateStepsAutomation = ({
  counter,
  handleRemove,
  handleAdd,
  eraseModels,
}) => (
  <CreateStepsAutomationStyled>
    <header>
      <h1>Criando modelo de automação</h1>
    </header>

    <section>
      <ModelNameStyled id="outlined-basic" label="Nome do modelo" variant="outlined" />
      <ModelDescriptionStyled id="outlined-basic" label="Descrição do modelo" variant="outlined" multiline rows={5} />

      <h2>Criar etapa:</h2>

      <CounterStyled>
        <Counter
          label="etapas criadas"
          counter={counter}
          qtdCounters={6}
          handleRemove={() => handleRemove()}
          handleAdd={() => handleAdd()}
        />
      </CounterStyled>
    </section>

    <FooterStyled>
      <Button width="154px" color="transparent" onClick={() => eraseModels()}>Limpar modelo</Button>
      <Button width="154px">Criar modelo</Button>
    </FooterStyled>
  </CreateStepsAutomationStyled>
);

export default CreateStepsAutomation;
