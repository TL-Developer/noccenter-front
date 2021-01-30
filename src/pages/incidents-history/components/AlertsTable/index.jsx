import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import Tag from '@commons/components/Tag';

import {
  AlertsTableStyled,
  TableStyled,
  TableCellStyled,
  TableContainerStyled,
} from './style';

function createData(data, recovery, status, duration, verified, tags) {
  return {
    data,
    recovery,
    status,
    duration,
    verified,
    tags,
  };
}

const rows = [
  createData('10/04/2021   16:04', '10/04/2021   16:04', 'Resolvido', '5h 19m 42s', 'Sim', '#KB_N1: KB0015855'),
  createData('10/04/2021   16:04', '10/04/2021   16:04', 'Resolvido', '5h 19m 42s', 'Sim', '#KB_N1: KB0015855'),
  createData('10/04/2021   16:04', '10/04/2021   16:04', 'Resolvido', '5h 19m 42s', 'Sim', '#KB_N1: KB0015855'),
];

const Row = (props) => {
  const { row } = props;

  return (
    <>
      <TableRow>
        <TableCellStyled component="th" scope="row">
          {row.data}
        </TableCellStyled>
        <TableCellStyled>
          {row.recovery}
        </TableCellStyled>
        <TableCellStyled>
          <Tag width="79px" label={row.status} color="#51951D" />
        </TableCellStyled>
        <TableCellStyled>
          {row.duration}
        </TableCellStyled>
        <TableCellStyled>
          <Tag width="25px" label={row.verified} color="#51951D" />
        </TableCellStyled>
        <TableCellStyled>
          <Tag width="123px" label={row.tags} color="#444545" />
        </TableCellStyled>
      </TableRow>
    </>
  );
};

const AlertsTable = () => (
  <AlertsTableStyled>
    <TableStyled>
      <TableContainerStyled component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Recovery</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Verificado</TableCell>
              <TableCell>Tags</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainerStyled>
    </TableStyled>
  </AlertsTableStyled>
);

export default AlertsTable;
