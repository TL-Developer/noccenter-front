import styled from 'styled-components';
import heroImg from '../../../assets/hero.jpg';

export const HeroStyled = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.neutral.dark.pure};
  background-image: url(${heroImg});
  background-repeat:no-repeat;
  background-size:contain;
  background-position:center;
  max-width: 100%;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
`;

export const TextStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 477px;
  justify-content: flex-end;
  margin-left: ${({ theme }) => theme.spacing.xl};
  margin-bottom: 222px;
`;

export const TitleStyled = styled.h1`
  font-size: ${({ theme }) => theme.font.size.xxl};
  color: ${({ theme }) => theme.color.neutral.light.pure};
`;

export const SubtitleStyled = styled.p`
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.color.neutral.light.pure};
`;
