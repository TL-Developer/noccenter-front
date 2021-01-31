import React, { useEffect, useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FeatherIcon from '@commons/components/FeatherIcon';
import Bullet from '@commons/components/Bullet';
import * as model from '@pages/automation/services/model';
 
import {
  TableCellStyled,
  InfoStyled,
  IconStyled,
  ActionStyled,
  TableContainerStyled,
  SeverityStyled,
  TextSeverityStyled,
} from './style';

const Row = ({ automation }) => (
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
        {automation.model}
      </TableCellStyled>
      <TableCellStyled>{automation.description}</TableCellStyled>
      <TableCellStyled>
        {automation.priority !== 'P0' && (
          <SeverityStyled>
            <Bullet color={() => {
              switch (automation.priority) {
                case 'P1':
                  return '#E20000'
                case 'P2':
                  return '#E28800'
                case 'P3':
                  return '#00C7E2'
                case 'P4':
                  return '#9A00E2'
              }
            }} />
            
            <TextSeverityStyled>
              {automation.priority}
            </TextSeverityStyled>
          </SeverityStyled>
        )}
        {automation.priority === 'P0' && (
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

const TableIncidents = () => {
  const [automations, setAutomations] = useState([]);
  const timeoutSnackbar = 5000;

  const getAutomations = async () => {
    if (window.setState && window.setState.setLoading) {
      window.setState.setLoading(true);
    }
    
    try {
      const automationsData = await model.get();
      
      if (window.setState && window.setState.setLoading) {
        window.setState.setLoading(false);
      }

      setAutomations(automationsData);
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
    getAutomations();
  }, [])

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
            {automations.map((automation) => (
              <Row key={automation.model} automation={automation} />
            ))}
          </TableBody>
        </Table>
      </TableContainerStyled>
    </>
  );
}

export default TableIncidents;
