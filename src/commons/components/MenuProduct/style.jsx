import styled, { css } from 'styled-components';

export const MenuProductStyled = styled.ul`
  display: flex;
`;

export const MenuProductItemStyled = styled.li`
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme, actived }) => actived ? theme.font.weight.bold : theme.font.weight.regular};
  margin-right: ${({ theme }) => theme.spacing.md};
  position: relative;
  cursor: pointer;

  ${({ actived }) => actived && css`
    &:after {
      content: '';
      height: 2px;
      background: ${({ theme }) => theme.color.neutral.dark.pure};
      position: absolute;
      width: 60%;
      bottom: -8px;
      left: 20%;
    }
  `}
`;

