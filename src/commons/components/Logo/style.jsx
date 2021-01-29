import styled, { css } from 'styled-components';

export const TypographyStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing.xxxs};

  h1, h2 {
    opacity: 0;
    width: 0;
    transition: all ${({ theme }) => theme.motion.velocity.superfast / 300}s ease;
    color: ${({ theme }) => theme.color.neutral.dark.pure};
    font-size: ${({ theme }) => theme.font.size.sm};
  }

  h2 {
    font-weight: normal;
  }
`;

export const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  ${({ isMobile }) => isMobile && css`
    h1, h2 {
      opacity: 1;
      width: 100px;
    }
  `}
`;
