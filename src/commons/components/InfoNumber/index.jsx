import React from 'react';

import {
  InfoNumberStyled,
} from './style';

const InfoNumber = ({
  value,
  label,
  color,
}) => (
  <InfoNumberStyled color={color}>
    <h1>{value}</h1>
    <p>{label}</p>
  </InfoNumberStyled>
);

export default InfoNumber;
