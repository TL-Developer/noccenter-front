import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import CreateStepsAutomation from './components/CreateStepsAutomation';
import SequenceAutomation from './components/SequenceAutomation';
import { useHistory } from 'react-router-dom';
import * as automation from '@pages/automation/services/automation'; 

import {
  ContainerStyled,
  CardStyled,
  CreateStepsAutomationStyled,
  SequenceAutomationStyled,
} from './style';

const step = {
  intervals: [
    { label: '1 min', value: 1, selected: false },
    { label: '3 min', value: 2, selected: false },
    { label: '5 min', value: 3, selected: false },
    { label: '10 min', value: 4, selected: false },
    { label: '15 min', value: 5, selected: false },
    { label: '20 min', value: 6, selected: false },
    { label: '25 min', value: 7, selected: false },
    { label: '30 min', value: 8, selected: false },
  ],
  options: [
    { label: 'Contato via Teams', value: 1, selected: false },
    { label: 'Notificação por voz', value: 2, selected: false },
    { label: 'Envio por e-mail', value: 3, selected: false },
    { label: 'FUP', value: 4, selected: false },
    { label: 'Notificação por voz', value: 5, selected: false },
  ],
};

const AutomationNew = () => {
  const [steps, setSteps] = useState([]);
  const [counter, setCounter] = useState(0);
  const [modelName, setModelName] = useState('');
  const [modelDescription, setModelDescription] = useState('');
  const [priorityAssociate, setPriorityAssociate] = useState('');
  const history = useHistory();
  const timeoutSnackbar = 5000;

  const changeModelName = (e) => {
    const { target: { value } } = e;

    setModelName(value);
  };

  const changeModelDescription = (e) => {
    const { target: { value } } = e;

    setModelDescription(value);
  };

  const changePriorityAssociate = (e) => {
    const { target: { value } } = e;

    setPriorityAssociate(value);
  };

  const saveAutomation = async () => {
    const body = {
      name: modelName,
      description: modelDescription,
      severity: `P${priorityAssociate}`,
      steps,
    };

    if (window.setState && window.setState.setLoading) {
      window.setState.setLoading(true);
    }

    try {
      await automation.post(body);

      if (window.setState && window.setState.setLoading) {
        window.setState.setLoading(false);
      }

      window.setState.setOpenSnackbar(true);
      window.setState.setSeveritySnackbar('success');
      window.setState.setMessageSnackbar('Salvo com sucesso');
      history('/automation');
      setTimeout(() => {
        window.setState.setOpenSnackbar(false);
      }, timeoutSnackbar)
    } catch (error) {
      console.log(error);
      window.setState.setOpenSnackbar(true);

      window.setState.setSeveritySnackbar('error');
      window.setState.setMessageSnackbar('Ops! Ocorreu um erro');
      if (window.setState && window.setState.setLoading) {
        window.setState.setLoading(false);
      }

      setTimeout(() => {
        window.setState.setOpenSnackbar(false);
      }, timeoutSnackbar)
    }
  };

  const handleRemove = () => {
    if (counter !== 0) {
      const newStep = steps;

      setCounter(counter - 1);
      newStep.pop();
      setSteps(newStep);
    }
  };

  const handleAdd = () => {
    if (counter < 6) {
      const newStep = steps;

      setCounter(counter + 1);
      newStep.push(step);
      setSteps(newStep);
    }
  };

  const eraseModels = () => {
    setCounter(0);
    setSteps([]);
    setModelName('');
    setModelDescription('');
    setPriorityAssociate('');
  };

  const handleChangeInterval = (event, step, index) => {
    const { target } = event;
    let newSteps = steps;   
    let interval = step.intervals.find((item) => item.value === target.value);

    newSteps[index].intervals.map((interval) => {
      interval.selected = false;
    });
    
    interval.selected = true;
    newSteps[index].intervals = [
      ...newSteps[index].intervals,
    ];

    setSteps(newSteps);

    console.log(steps)
  };

  const handleChangeStep = (event, step, index) => {
    const { target } = event;
    let newSteps = steps;   
    let interval = step.options.find((item) => item.value === target.value);

    newSteps[index].options.map((interval) => {
      interval.selected = false;
    });
    
    interval.selected = true;
    newSteps[index].options = [
      ...newSteps[index].options,
    ];

    setSteps(newSteps);
  };

  return (
    <Grid container>
      <CardStyled>
        <ContainerStyled>
          <CreateStepsAutomationStyled>
            <CreateStepsAutomation
              handleRemove={handleRemove}
              handleAdd={handleAdd}
              counter={counter}
              eraseModels={eraseModels}
              saveAutomation={saveAutomation}
              modelName={modelName}
              modelDescription={modelDescription}
              changeModelName={changeModelName}
              changeModelDescription={changeModelDescription}
              changePriorityAssociate={changePriorityAssociate}
            />
          </CreateStepsAutomationStyled>
          
          <SequenceAutomationStyled>
            <SequenceAutomation
              steps={steps}
              handleChangeInterval={(event, step, index) => handleChangeInterval(event, step, index)}
              handleChangeStep={(event, step, index) => handleChangeStep(event, step, index)}
            />
          </SequenceAutomationStyled>
        </ContainerStyled>
      </CardStyled>
    </Grid>
  );
}

export default AutomationNew;
