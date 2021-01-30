import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FeatherIcon from '@commons/components/FeatherIcon';
 
import {
  TableCellStyled,
  IconStyled,
  ActionStyled,
} from './style';

function createData(model, description) {
  return {
    model,
    description,
  };
}

const rows = [
  createData('Jornada para Prioridade 1', 'Appdynamics_PRD_RICO_BACK_END'),
  createData('Jornada para Prioridade 1', 'Appdynamics_PRD_RICO_BACK_END'),
  createData('Jornada para Prioridade 1', 'Appdynamics_PRD_RICO_BACK_END'),
  createData('Jornada para Prioridade 1', 'Appdynamics_PRD_RICO_BACK_END'),
  createData('Jornada para Prioridade 1', 'Appdynamics_PRD_RICO_BACK_END'),
];

const Row = (props) => {
  const { row } = props;

  return (
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
          {row.model}
        </TableCellStyled>
        <TableCellStyled>{row.description}</TableCellStyled>
        <TableCellStyled>
          <ActionStyled>
            <IconStyled aria-label="expand row" size="small">
              <FeatherIcon icon="users" />
              <p>Visualizar</p>
            </IconStyled>

            <IconStyled aria-label="expand row" size="small">
              <FeatherIcon icon="edit-3" />
              <p>Editar</p>
            </IconStyled>

            <IconStyled aria-label="expand row" size="small">
              <FeatherIcon icon="trash-2" />
              <p>Excluir</p>
            </IconStyled>
          </ActionStyled>
        </TableCellStyled>
      </TableRow>
    </>
  );
};

const TableEscalation = () => {
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
              <TableCell>Modelo</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Ações</TableCell>
              <TableCell />
            </TableRow>
          </TableHead> 
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableEscalation;
