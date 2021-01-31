import React from 'react';

import {
  TagStyled,
} from './style';

const Tag = ({
  color,
  label,
  width,
}) => (
  <TagStyled color={color} width={width}>
    {label}
  </TagStyled>
);

export default Tag;
