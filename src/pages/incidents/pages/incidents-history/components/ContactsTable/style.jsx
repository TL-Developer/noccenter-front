import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';
import Button from '@commons/components/Button';
import TextField from '@material-ui/core/TextField';

export const ContactsTableStyled = styled.div`
  margin: ${({ theme }) => theme.spacing.lg} 0;
  position: relative;
`;

export const TableStyled = styled.div`
  
`;

export const TableCellStyled = styled(TableCell)`
  && {
    border-bottom: none;
  }
`;

export const ButtonStyled = styled(Button)`
  position: absolute;
  right: 0;
  top: -50px;
`;

export const ContainerStyled = styled.div`
  background: ${({ theme }) => theme.color.neutral.light.pure};
  padding: ${({ theme }) => theme.spacing.sm};
  width: 50%; 
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

export const TextFieldTdStyled = styled(TextField)`
`;

export const ButtonModalStyled = styled(Button)`
  /* position: absolute;
  right: 5%;
  bottom: -40px; */
  float: right;
  color: ${({ theme }) => theme.color.neutral.light.pure};
`;
