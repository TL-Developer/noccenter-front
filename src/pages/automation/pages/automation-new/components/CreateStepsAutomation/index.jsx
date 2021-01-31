import React, { useState } from 'react';
import Counter from '@commons/components/Counter';
import Button from '@commons/components/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

import {
  CreateStepsAutomationStyled,
  ModelNameStyled,
  ModelDescriptionStyled,
  CounterStyled,
  FooterStyled,
  PriorityStyled,
} from './style';

const CreateStepsAutomation = ({
  counter,
  handleRemove,
  handleAdd,
  eraseModels,
  saveAutomation,
  changeModelName,
  changeModelDescription,
  changePriorityAssociate,
  modelName,
  modelDescription,
}) => {
  return (
    <CreateStepsAutomationStyled>
      <header>
        <h1>Criando modelo de automação</h1>
      </header>

      <section>
        <ModelNameStyled
          onChange={(e) => changeModelName(e)} 
          label="Nome do modelo"
          variant="outlined"
          value={modelName}
        />
        <ModelDescriptionStyled
          onChange={(e) => changeModelDescription(e)}
          label="Descrição do modelo"
          variant="outlined"
          value={modelDescription}
          multiline
          rows={5} 
        />

        <PriorityStyled>
          <h1>Associar Prioridade:</h1>

          <RadioGroup onChange={(e) => changePriorityAssociate(e)} row aria-label="position" name="position" defaultValue="1">
            <FormControlLabel
              value="1"
              control={<Radio color="primary" />}
              label="P1"
              labelPlacement="right"
            />
            <FormControlLabel
              value="2"
              control={<Radio color="primary" />}
              label="P2"
              labelPlacement="right"
            />
            <FormControlLabel
              value="3"
              control={<Radio color="primary" />}
              label="P3"
              labelPlacement="right"
            />
            <FormControlLabel
              value="4"
              control={<Radio color="primary" />}
              label="P4"
              labelPlacement="right"
            />
            <FormControlLabel
              value="0"
              control={<Radio color="primary" />}
              label="NENHUMA"
              labelPlacement="right"
            />
          </RadioGroup>
        </PriorityStyled>

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
        <Button width="154px" onClick={saveAutomation}>Criar modelo</Button>
      </FooterStyled>
    </CreateStepsAutomationStyled>
  );
};

export default CreateStepsAutomation;
