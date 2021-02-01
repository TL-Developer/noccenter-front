import styled, { createGlobalStyle, keyframes } from 'styled-components';

import GilroyBold from '../../assets/fonts/Gilroy-Bold.otf';
import GilroyRegular from '../../assets/fonts/Gilroy-Regular.otf';

const headShake = keyframes`
  @font-face {
    font-family: 'Gilroy-Bold';
    src: local('Gilroy-Bold'), local('FontName'),
    url(${GilroyBold}) format('otf'),
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy'), local('FontName'),
    url(${GilroyRegular}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  0% {
    transform: translateX(0);
  }
  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }
  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }
  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }
  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }
  50% {
    transform: translateX(0);
  }
`;

export const GlobalStyled = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.color.neutral.light['1']};
    font-family: 'Roboto';
  }

  a {
    color: inherit;
    text-decoration: inherit;
    cursor: pointer;
    font-family: ${({ theme }) => theme.font.family.base};
    color: ${({ theme }) => theme.color.neutral.dark.pure};
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-family: ${({ theme }) => theme.font.family.base};
    color: ${({ theme }) => theme.color.neutral.dark.pure};
    margin: 0;
    padding: 0;
  }

  canvas, div, header, section, footer, ul, li, h1, h2, h3, h4, h5, h6, p, span, img {
    /* outline: 1px solid red; */
  }

  .animate__animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  
  .animate__headShake {
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-name: ${headShake};
    animation-name: ${headShake};
  }
`;

export const Styled = styled.section`
  width: 100%;
`;
