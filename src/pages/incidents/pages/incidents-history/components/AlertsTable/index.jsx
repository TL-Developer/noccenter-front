import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import Tag from '@commons/components/Tag';
import * as incidents from '@pages/incidents/services/incidents';

import {
  AlertsTableStyled,
  TableStyled,
  TableCellStyled,
  TableContainerStyled,
} from './style';

// function createData(date, recovery, status, duration, verified, tags) {
//   return {
//     date,
//     recovery,
//     status,
//     duration,
//     verified,
//     tags,
//   };
// }

// const rows = [
//   createData('10/04/2021   16:04', '10/04/2021   16:04', 'Resolvido', '5h 19m 42s', 'Sim', '#KB_N1: KB0015855'),
//   createData('10/04/2021   16:04', '10/04/2021   16:04', 'Resolvido', '5h 19m 42s', 'Sim', '#KB_N1: KB0015855'),
//   createData('10/04/2021   16:04', '10/04/2021   16:04', 'Resolvido', '5h 19m 42s', 'Sim', '#KB_N1: KB0015855'),
// ];

// const object = {
//   data: '10/04/2021   16:04',
//   recovery: '10/04/2021   16:04',
//   status: 'Resolvido',
//   duration: '5h 19m 42s',
//   verified: 'Sim',
//   tags: '#KB_N1: KB0015855',
// };

const Row = ({ alert }) => (
  <>
    <TableRow>
      <TableCellStyled component="th" scope="row">
        {alert.data}
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

const AlertsTable = () => {
  const [alerts, setAlerts] = useState([]); 
  const timeoutSnackbar = 5000;

  
  const getAlerts = async () => {
    if (window.setState && window.setState.setLoading) {
      window.setState.setLoading(true);
    }
    
    try {
      const alertsData = await incidents.getAlerts();

      if (window.setState && window.setState.setLoading) {
        window.setState.setLoading(false);
      }
      
      setAlerts(alertsData);
    } catch (error) {
      console.log(error);
      window.setState.setOpenSnackbar(true);

      window.setState.setSeveritySnackbar('error');
      window.setState.setMessageSnackbar('Ops! Ocorreu um erro');
      if (window.setState && window.setState.setLoading) {
        window.setState.setLoading(false);
      }

      setTimeout(() => {
        window.setState.setOpenSnackbar(false);
      }, timeoutSnackbar)
    }
  };

  useEffect(() => {
    getAlerts();
  }, [])

  return (
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
              {alerts.map((alert) => (
                <Row key={alert.date} alert={alert} />
              ))}
            </TableBody>
          </Table>
        </TableContainerStyled>
      </TableStyled>
    </AlertsTableStyled>
  );
};

export default AlertsTable;
