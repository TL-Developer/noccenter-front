import React, { useRef } from 'react';
import FeatherIcon from '@commons/components/FeatherIcon';

import {
  CounterStyled,
  RemoveStyled,
  CounterResultStyled,
  AddStyled,
} from './style';

const Counter = ({
  label,
  counter,
  handleRemove,
  handleAdd,
  qtdCounters,
  infinite,
}) => {
  const $counter = useRef(null);

  return (
    <CounterStyled>
      <RemoveStyled
        onClick={() => {
          handleRemove();
        }}
        counter={counter}
      >
        <FeatherIcon icon="minus-circle" size="38" />
      </RemoveStyled>

      <CounterResultStyled>
        <p>
          <span ref={$counter}>{counter}</span> 
          &nbsp;
          {label}
        </p>
      </CounterResultStyled>

      <AddStyled onClick={() => handleAdd()} counter={counter} qtdCounters={qtdCounters} infinite={infinite}>
        <FeatherIcon icon="plus-circle" size="38" />
      </AddStyled>
    </CounterStyled>
  );
};

export default Counter;
