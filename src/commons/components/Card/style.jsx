import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const CardStyled = styled(Card)`
  && {
    background: ${({ theme }) => theme.color.neutral.light.pure};
    border-radius: ${({ theme }) => theme.border.radius.large};
    box-shadow: ${({ theme }) => theme.shadow.level['1']};
    width: 100%;
    height: 100%;
    display: flex;
  }
`;

export const ContainerStyled = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  flex-direction: column;
  flex: 1;
`;
