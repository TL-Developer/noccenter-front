import styled from 'styled-components';
import Card from '@commons/components/Card';

export const CardStyled = styled(Card)`
  && {
    display: flex;
    flex-direction: row;
  }
`;

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CreateStepsAutomationStyled = styled.div`
  margin: -${({ theme }) => theme.spacing.sm};
  flex: 1;
`;

export const SequenceAutomationStyled = styled.div`
  margin: -${({ theme }) => theme.spacing.sm};
  flex: 1;
  background: ${({ theme }) => theme.color.neutral.light.pure};
`;
