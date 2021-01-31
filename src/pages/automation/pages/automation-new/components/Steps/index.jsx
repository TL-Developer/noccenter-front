import React, { useEffect } from 'react';
import MenuItem from '@material-ui/core/MenuItem';

import {
  StepsStyled,
  ListStepsStyled,
  ListStepsItemStyled,
  SelectStyled,
} from './style';

const Steps = ({
  steps,
  handleChangeInterval,
  handleChangeStep,
}) => {
  useEffect(() => {
    console.log(steps)
  }, [steps]);

  return (
    <StepsStyled>
      {(steps && steps.length) > 0 && (
        steps.map((step, index) => (
          <>
            <ListStepsStyled key={step.id}> 
              <ListStepsItemStyled>
                <p>Intervalo</p>
              </ListStepsItemStyled>
              <ListStepsItemStyled>
                <SelectStyled
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={(event) => handleChangeInterval(event, step, index)}
                >
                  {step && step.intervals.map((item) => (
                    <MenuItem value={item.value}>{item.label}</MenuItem>
                  ))}
                </SelectStyled>
              </ListStepsItemStyled>
            </ListStepsStyled>
            
            <ListStepsStyled> 
              <ListStepsItemStyled>
                <p><b>Etapa {index + 1}</b></p>
              </ListStepsItemStyled>
              <ListStepsItemStyled>
                <SelectStyled
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={(event) => handleChangeStep(event, step, index)}
                >
                  {step.options.map((item) => (
                    <MenuItem value={item.value}>{item.label}</MenuItem>
                  ))}
                </SelectStyled>
              </ListStepsItemStyled>

              {/* {(step) && (
                <>
                  <ListStepsItemStyled>
                    <p><b>Etapa {index + 1}</b></p>
                  </ListStepsItemStyled>
                  <ListStepsItemStyled>
                    <SelectStyled
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={step}
                      // onChange={handleChangeStep}
                    >
                      {step.options.map((item) => (
                        <MenuItem value={item.value}>{item.label}</MenuItem>
                      ))}
                    </SelectStyled>
                  </ListStepsItemStyled>
                </>
              )} */}
            </ListStepsStyled>
          </>
        ))
      )}
      {(steps && steps.length) === 0 && (
        <p>Adicione suas etapas</p>
      )}
    </StepsStyled>
  );
};

export default Steps;
