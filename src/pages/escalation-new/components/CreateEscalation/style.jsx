import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Button from '@commons/components/Button';

export const CreateEscalationStyled = styled.div`
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

export const FormStyled = styled.form`
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

export const TextFieldStyled = styled(TextField)`
  && {
    margin-right: ${({ theme }) => theme.spacing.xs};
  }
`;

export const TextFieldTdStyled = styled(TextField)`
`;

export const TableStyled = styled.div`
  
`;

export const TableCellStyled = styled(TableCell)`
  && {
    border-bottom: none;
  }
`;

export const TableContainerStyled = styled(TableContainer)`
  && {
    box-shadow: none;
  }
`;

export const FooterStyled = styled.footer`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing.lg};
  justify-content: flex-end;
`;

export const ButtonStyled = styled(Button)`
`;
