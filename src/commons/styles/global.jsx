import styled, { createGlobalStyle } from 'styled-components';

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
`;

export const Styled = styled.section`
  width: 100%;
`;
