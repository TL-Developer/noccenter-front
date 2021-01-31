import React from 'react';
import Card from '../Card';

import {
  HeaderStyled,
  SectionStyled,
  TitleStyled,
  ColorStyled,
  SubTitleStyled,
  ValueStyled,
  FooterStyled,
} from './style';

const BigNumber = ({
  title,
  subtitle,
  value,
  color,
}) => (
  <Card>
    <HeaderStyled>
      <TitleStyled>
        {title}
      </TitleStyled>

      <ColorStyled color={color} />
    </HeaderStyled>

    <SectionStyled>
      <SubTitleStyled>{subtitle}</SubTitleStyled>
    </SectionStyled>

    <FooterStyled>
      <ValueStyled>{value}</ValueStyled>
    </FooterStyled>
  </Card>
);

export default BigNumber;
