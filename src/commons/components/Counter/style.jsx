import styled from 'styled-components';

export const CounterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RemoveStyled = styled.div`
  cursor: ${({ counter }) => counter === 0 ? 'default' : 'pointer'};
  opacity: ${({ counter }) => counter === 0 ? .5 : 1};
  user-select: none;
`;

export const CounterResultStyled = styled.div`
  margin: 0 ${({ theme }) => theme.spacing.xs};
  user-select: none;

  p {
    font-size: ${({ theme }) => theme.font.size.xs};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`;

export const AddStyled = styled.div`
  user-select: none;
  cursor: ${({ counter, qtdCounters }) => counter === qtdCounters ? 'default' : 'pointer'};
  opacity: ${({ counter, qtdCounters }) => counter === qtdCounters ? .5 : 1};
`;
