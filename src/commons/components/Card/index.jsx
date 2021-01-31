import React from 'react';

import {
  CardStyled,
  ContainerStyled,
} from './style';

const Card = ({
  children,
  ...otherProps
}) => (
  <CardStyled {...otherProps}>
    <ContainerStyled>
      {children}
    </ContainerStyled>
  </CardStyled>
);

export default Card;
