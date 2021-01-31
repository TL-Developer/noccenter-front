import React from 'react';
import Steps from '../Steps';

import {
  SequenceAutomationStyled,
} from './style';

const SequenceAutomation = ({
  steps,
  handleChangeInterval,
  handleChangeStep,
}) => {
  return (
    <SequenceAutomationStyled>
      <header>
        <h1>Sequência de automação</h1>
      </header>

      <section>
        <Steps
          steps={steps}
          handleChangeInterval={(event, step, index) => handleChangeInterval(event, step, index)}
          handleChangeStep={(event, step, index) => handleChangeStep(event, step, index)}
        />
      </section>
    </SequenceAutomationStyled>
  );
};

export default SequenceAutomation;
