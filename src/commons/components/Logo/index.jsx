import React from 'react';
import logoSvg from '../../../assets/logo-mobile.svg';

import {
  LogoStyled,
  TypographyStyled,
} from './style';

const Logo = ({
  isMobile,
}) => (
  <LogoStyled isMobile={isMobile}>
    <img src={logoSvg} />
    <TypographyStyled>
      <h1>
        NOC
      </h1>
      <h2>Center</h2>
    </TypographyStyled>
  </LogoStyled>
);

export default Logo;
 