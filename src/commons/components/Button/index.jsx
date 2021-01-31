import React from 'react';

import {
  ButtonStyled,
} from './style';

const Button = ({
  color,
  width,
  children,
  ...otherProps
}) => (
  <ButtonStyled width={width} color={color} {...otherProps}>
    {children}
  </ButtonStyled>
);

export default Button;
