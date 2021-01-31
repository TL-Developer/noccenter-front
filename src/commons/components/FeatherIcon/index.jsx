import React from 'react';

import {
  FeatherIconStyled,
} from './style';

const FeatherIcon = ({
  color,
  icon,
  size,
}) => (
  <FeatherIconStyled color={color} icon={icon} size={size} />
);

export default FeatherIcon;
