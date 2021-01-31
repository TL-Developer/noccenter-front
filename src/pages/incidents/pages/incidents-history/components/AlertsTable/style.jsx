import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';

export const AlertsTableStyled = styled.div`
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

export const TableStyled = styled.div`
  
`;

export const TableCellStyled = styled(TableCell)`
  && {
    border-bottom: none;
  }
`;
