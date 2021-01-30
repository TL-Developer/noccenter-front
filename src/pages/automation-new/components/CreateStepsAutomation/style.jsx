import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const CreateStepsAutomationStyled = styled.div`
  margin: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};

  header {
    h1 {
      font-size: ${({ theme }) => theme.font.size.xxs};
      font-weight: ${({ theme }) => theme.font.weight.medium};
    }
  }

  section {
    width: 80%;
    display: flex;
    flex-direction: column;

    h2 {
      margin-top: ${({ theme }) => theme.spacing.lg};
      font-size: ${({ theme }) => theme.font.size.xxs};
      font-weight: ${({ theme }) => theme.font.weight.medium};
    }
  }
`;

export const ModelNameStyled = styled(TextField)`
  && {
    margin-top: ${({ theme }) => theme.spacing.lg};
  }
`;

export const ModelDescriptionStyled = styled(TextField)`
  && {
    margin-top: ${({ theme }) => theme.spacing.lg};
  }
`;

export const CounterStyled = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const FooterStyled = styled.footer`
  width: 60%;
  margin: ${({ theme }) => theme.spacing.xxxl} auto 0 10%;
  display: flex;
  justify-content: space-around;
`;
