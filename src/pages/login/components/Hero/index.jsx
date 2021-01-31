import React from 'react';
import {
  HeroStyled,
  TextStyled,
  TitleStyled,
  SubtitleStyled,
} from './style';


const Hero = () => (
  <HeroStyled>
    <TextStyled>
      <TitleStyled>
        Monitoramento em tempo real
      </TitleStyled>

      <SubtitleStyled>
        XP Inc
      </SubtitleStyled>
    </TextStyled>
  </HeroStyled>
);

export default Hero;
