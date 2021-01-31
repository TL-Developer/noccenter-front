import styled from 'styled-components';

export const TagStyled = styled.div`
  padding: ${({ theme }) => theme.spacing.xxxs};
  background: ${({ color, theme }) => color ? color : theme.color.neutral.dark['1']};
  color: ${({ theme }) => theme.color.neutral.light.pure};
  border-radius: ${({ theme }) => theme.border.radius.small};
  font-size: ${({ theme }) => theme.font.size.us};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  width: ${({ width }) => width ? width : 'auto'};
  text-align: center;
`;
