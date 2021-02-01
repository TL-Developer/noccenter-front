import React from 'react';
import logoSvg from '../../../assets/logo-mobile.svg';
import logoSvgWhite from '../../../assets/logo-white.svg';

import {
  LogoStyled,
  TypographyStyled,
} from './style';

const Logo = ({
  isMobile,
  whatTheme,
}) => (
  <LogoStyled isMobile={isMobile}>
    <img src={whatTheme === 'dark' ? logoSvgWhite : logoSvg} />
    <TypographyStyled>
      <h1>
        NOC
      </h1>
      <h2>Center</h2>
    </TypographyStyled>
  </LogoStyled>
);

export default Logo;
 