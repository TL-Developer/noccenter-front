import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const CreateStepsAutomationStyled = styled.div`
  margin: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg};
  border-right: ${({ theme }) => theme.border.width.thin} ${({ theme }) => theme.border.style.default} ${({ theme }) => theme.color.neutral.light['2']};

  header {
    h1 {
      font-size: ${({ theme }) => theme.font.size.xxs};
      font-weight: ${({ theme }) => theme.font.weight.medium};
      text-transform: uppercase;
    }
  }

  section { 
    width: 90%;
    display: flex;
    flex-direction: column;

    h2 {
      text-transform: uppercase;
      margin-top: ${({ theme }) => theme.spacing.sm};
      font-size: ${({ theme }) => theme.font.size.xxs};
      font-weight: ${({ theme }) => theme.font.weight.medium};
    }
  }
`;

export const ModelNameStyled = styled(TextField)`
  && {
    margin-top: ${({ theme }) => theme.spacing.sm};
  }
`;

export const ModelDescriptionStyled = styled(TextField)`
  && {
    margin-top: ${({ theme }) => theme.spacing.sm};
  }
`;

export const CounterStyled = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const FooterStyled = styled.footer`
  margin-top: ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: flex-end;
  margin-right: ${({ theme }) => theme.spacing.lg};
`;

export const PriorityStyled = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};

  h1 {
    font-size: ${({ theme }) => theme.font.size.xxs};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    text-transform: uppercase;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`;
