import styled from 'styled-components';

export const InfoNumberStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-basis: 160px;

  h1 {
    font-size: ${({ theme }) => theme.font.size.md};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  p {
    color: ${({ theme, color }) => theme.color.feedback[color]};
    font-size: ${({ theme }) => theme.font.size.xxs};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;
