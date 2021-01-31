import styled, { css } from 'styled-components';

export const SequenceAutomationStyled = styled.div`
  margin: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};

  header {
    h1 {
      font-size: ${({ theme }) => theme.font.size.xs};
      font-weight: ${({ theme }) => theme.font.weight.bold};
    }
  }

  section {
    margin-top: ${({ theme }) => theme.spacing.md};
  }
`;
