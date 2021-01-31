import React, { useState, useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FeatherIcon from '@commons/components/FeatherIcon';
import { Link } from 'react-router-dom';
import * as escalation from '@pages/escalation/services/escalation';
 
import {
  TableCellStyled,
  IconStyled,
  ActionStyled,
  NoContentStyled,
} from './style';

const Row = ({ escalatioId, escalation }) => (
  <>
    <TableRow>
      <TableCellStyled padding="checkbox">
        <Checkbox
          color="primary"
          // checked={isItemSelected}
          // inputProps={{ 'aria-labelledby': labelId }}
        />
      </TableCellStyled>
      <TableCellStyled component="th" scope="row">
        {escalation.squad}
      </TableCellStyled>
      <TableCellStyled>{escalation.techLead}</TableCellStyled>
      <TableCellStyled>
        <ActionStyled>
          <IconStyled aria-label="expand row" size="small">
            <FeatherIcon icon="users" />
            <p>Visualizar</p>
          </IconStyled>

          <Link to={`/escalation/${escalatioId}/update`}>
            <IconStyled aria-label="expand row" size="small">
              <FeatherIcon icon="edit-3" />
              <p>Editar</p>
            </IconStyled>
          </Link>
        </ActionStyled>
      </TableCellStyled>
    </TableRow>
  </>
);

const TableEscalation = ({
  setLoading,
}) => {
  const [escalations, setEscalations] = useState([]);

  const getEscalations = async () => {
    setLoading(true);

    try {
      const escalationsData = await escalation.get();

      setLoading(false);
      setEscalations(escalationsData);
    } catch (error) {
      setLoading(false);
      console.log(error);
    } 
  };

  useEffect(() => {
    getEscalations();
  }, []);

  return (
    <>
      <TableContainer style={{ boxShadow: 'none' }} component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  // indeterminate={numSelected > 0 && numSelected < rowCount}
                  // checked={rowCount > 0 && numSelected === rowCount}
                  // onChange={onSelectAllClick}
                  inputProps={{ 'aria-label': 'select all desserts' }}
                />
              </TableCell>
              <TableCell>Squad</TableCell>
              <TableCell>Tech lead</TableCell>
              <TableCell>Ações</TableCell>
              <TableCell />
            </TableRow>
          </TableHead> 
          <TableBody>
            {escalations.map((escalation) => (
              (escalation && escalation.orders) && escalation.orders.map((order) => (
                <Row key={order.squad} escalatioId={escalation.id} escalation={order} />
              ))
            ))}

            {(escalations && escalations.length === 0) && (
              <NoContentStyled><p>Sem conteúdo</p></NoContentStyled>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableEscalation;
