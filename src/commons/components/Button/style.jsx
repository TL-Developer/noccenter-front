import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border: 0;
  width: ${({ width }) => width};
  padding: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme, color }) => color === 'transparent' ? theme.color.neutral.dark.pure : theme.color.neutral.light.pure};
  font-size: ${({ theme }) => theme.font.size.xxxs};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  background: ${({ theme, color }) => color ? color : theme.color.brand.pure};
  border-radius: ${({ theme }) => theme.border.radius.small};
  cursor: pointer;
  user-select: none;

  &:focus {
    border: none;
    outline: none;
  }
`;
