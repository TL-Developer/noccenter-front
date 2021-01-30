import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FeatherIcon from '@commons/components/FeatherIcon';
import Bullet from '@commons/components/Bullet';
 
import {
  TableCellStyled,
  InfoStyled,
  IconStyled,
  ActionStyled,
  TableContainerStyled,
  SeverityStyled,
  TextSeverityStyled,
} from './style';

function createData(model, description, severity) {
  return {
    model,
    description,
    severity,
  };
}

const rows = [
  createData('Jornada para Prioridade 1', 'Appdynamics_PRD_RICO_BACK_END', 1),
  createData('Jornada para Prioridade 1', 'Appdynamics_PRD_RICO_BACK_END', 2),
  createData('Jornada para Prioridade 1', 'Appdynamics_PRD_RICO_BACK_END', 3),
  createData('Jornada para Prioridade 1', 'Appdynamics_PRD_RICO_BACK_END', 4),
  createData('Jornada para Prioridade 1', 'Appdynamics_PRD_RICO_BACK_END', 0),
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
          {row.severity !== 0 && (
            <SeverityStyled>
              <Bullet color={() => {
                switch (row.severity) {
                  case 1:
                    return '#E20000'
                  case 2:
                    return '#E28800'
                  case 3:
                    return '#00C7E2'
                  case 4:
                    return '#9A00E2'
                }
              }} />
              
              <TextSeverityStyled>
                P{row.severity}
              </TextSeverityStyled>
            </SeverityStyled>
          )}
          {row.severity === 0 && (
            'Nenhuma'
          )}
        </TableCellStyled>
        <TableCellStyled>
          <ActionStyled>
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

const TableIncidents = () => {
  return (
    <>
      <InfoStyled>
        <p><b>2</b> incidentes selecionados</p>
      </InfoStyled>

      <TableContainerStyled component={Paper}>
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
              <TableCell>Prioridade</TableCell>
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
      </TableContainerStyled>
    </>
  );
}

export default TableIncidents;
