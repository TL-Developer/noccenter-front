import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FeatherIcon from '../../../commons/components/FeatherIcon';
import Bullet from '../../../commons/components/Bullet';

import {
  TableCellStyled,
  BoxStyled,
  InfoStyled,
  IconStyled,
} from './style';

function createData(time, host, problem, severity) {
  return {
    time,
    host,
    problem,
    severity,
    description: { label: 'Amet minim mollit non deserunt' },
  };
}

const rows = [
  createData('16:04', 'Appdynamics_PRD_RICO_BACK_END', 'HR: Business_Transaction_error_rate | TIER: ', 'P1'),
  createData('16:04', 'Appdynamics_PRD_RICO_BACK_END', 'HR: Business_Transaction_error_rate | TIER: ', 'P1'),
  createData('16:04', 'Appdynamics_PRD_RICO_BACK_END', 'HR: Business_Transaction_error_rate | TIER: ', 'P1'),
  createData('16:04', 'Appdynamics_PRD_RICO_BACK_END', 'HR: Business_Transaction_error_rate | TIER: ', 'P1'),
  createData('16:04', 'Appdynamics_PRD_RICO_BACK_END', 'HR: Business_Transaction_error_rate | TIER: ', 'P1'),
];

const Row = (props) => {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCellStyled padding="checkbox">
          <Checkbox
            // checked={isItemSelected}
            // inputProps={{ 'aria-labelledby': labelId }}
          />
        </TableCellStyled>
        <TableCellStyled component="th" scope="row">
          {row.time}
        </TableCellStyled>
        <TableCellStyled>{row.host}</TableCellStyled>
        <TableCellStyled>{row.problem}</TableCellStyled>
        <TableCellStyled style={{ display: 'flex', alignItems: 'center' }}><Bullet color="#E20000" />&nbsp;{row.severity}</TableCellStyled>
        <TableCellStyled>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <FeatherIcon icon="chevron-up" /> : <FeatherIcon icon="chevron-down" />}
          </IconButton>
        </TableCellStyled>
      </TableRow>

      <TableRow>
        <TableCellStyled style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <BoxStyled>
              <header>
                <h1>Description</h1>
              </header>

              <section>
                <h2>Incidente</h2>
                <p>{row.description.label}</p>
              </section>

              <footer>
                <IconStyled>
                  <FeatherIcon icon="message-square" />
                  <p>Histórico</p>
                </IconStyled>
                <IconStyled>
                  <FeatherIcon icon="users" />
                  <p>Contato via Teams</p>
                </IconStyled>
                <IconStyled>
                  <FeatherIcon icon="users" />
                  <p>Ponto de contato</p>
                </IconStyled>
              </footer>
            </BoxStyled>
          </Collapse>
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
      <TableContainer style={{ boxShadow: 'none' }} component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  // indeterminate={numSelected > 0 && numSelected < rowCount}
                  // checked={rowCount > 0 && numSelected === rowCount}
                  // onChange={onSelectAllClick}
                  inputProps={{ 'aria-label': 'select all desserts' }}
                />
              </TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Info / Host</TableCell>
              <TableCell>Problem</TableCell>
              <TableCell>Severity</TableCell>
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

export default TableIncidents;
