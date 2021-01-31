import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import Tag from '@commons/components/Tag';
import TableContainer from '@commons/components/TableContainer';

import {
  AlertsTableStyled,
  TableStyled,
  TableCellStyled,
} from './style';


const Row = ({ alert }) => (
  <>
    <TableRow>
      <TableCellStyled component="th" scope="row">
        {alert.date}
      </TableCellStyled>
      <TableCellStyled>
        {alert.recovery}
      </TableCellStyled>
      <TableCellStyled>
        <Tag width="79px" label={alert.status} color="#51951D" />
      </TableCellStyled>
      <TableCellStyled>
        {alert.duration}
      </TableCellStyled>
      <TableCellStyled>
        <Tag width="25px" label={alert.verified} color="#51951D" />
      </TableCellStyled>
      <TableCellStyled>
        <Tag width="123px" label={alert.tags} color="#444545" />
      </TableCellStyled>
    </TableRow>
  </>
);

const AlertsTable = ({
  alerts,
}) => {  
  return (
    <AlertsTableStyled>
      <TableStyled>
        <TableContainer component={Paper}>
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
              {alerts.map((alert) => (
                <Row key={alert.date} alert={alert} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableStyled>
    </AlertsTableStyled>
  );
};

export default AlertsTable;
