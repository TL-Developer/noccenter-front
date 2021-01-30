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
import FeatherIcon from '@commons/components/FeatherIcon';
import Bullet from '@commons/components/Bullet';
import Tag from '@commons/components/Tag';
import { Link } from 'react-router-dom';

import {
  TableCellStyled,
  BoxStyled,
  InfoStyled,
  IconStyled,
  ContactAutomationStyled,
  DetailStyled,
  ActionsStyled,
  TitleStyled,
  TagsStyled,
  BadgeHistoryStyled,
} from './style';

function createData(time, host, problem, severity, duration, verified, notification) {
  return {
    time,
    host,
    problem,
    severity,
    duration,
    verified,
    notification,
    description: { label: 'Operation Data: OPEN (0)' },
  };
}

const rows = [
  createData('16:04', 'Appdynamics_PRD_RICO_BACK_END', 'HR: Business_Transaction_error_rate | TIER: ', 'P1', '5h 19m 42s', 'Sim', 2),
  createData('16:04', 'Appdynamics_PRD_RICO_BACK_END', 'HR: Business_Transaction_error_rate | TIER: ', 'P1', '5h 19m 42s', 'Sim', 2),
  createData('16:04', 'Appdynamics_PRD_RICO_BACK_END', 'HR: Business_Transaction_error_rate | TIER: ', 'P1', '5h 19m 42s', 'Sim', 2),
  createData('16:04', 'Appdynamics_PRD_RICO_BACK_END', 'HR: Business_Transaction_error_rate | TIER: ', 'P1', '5h 19m 42s', 'Sim', 2),
  createData('16:04', 'Appdynamics_PRD_RICO_BACK_END', 'HR: Business_Transaction_error_rate | TIER: ', 'P1', '5h 19m 42s', 'Sim', 2),
  createData('16:04', 'Appdynamics_PRD_RICO_BACK_END', 'HR: Business_Transaction_error_rate | TIER: ', 'P1', '5h 19m 42s', 'Sim', 2),
];

const Row = (props) => {
  const { row } = props;
  const [open, setOpen] = useState(false);

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
          {row.time}
        </TableCellStyled>
        <TableCellStyled>{row.host}</TableCellStyled>
        <TableCellStyled>{row.problem}</TableCellStyled>
        <TableCellStyled style={{ display: 'flex', alignItems: 'center' }}><Bullet color="#E20000" />&nbsp;{row.severity}</TableCellStyled>
        <TableCellStyled>{row.duration}</TableCellStyled>
        <TableCellStyled><Tag width="35px" color="#51951D" label={row.verified} /></TableCellStyled>
        <TableCellStyled><Tag width="20px" color="#004DE2" label={row.notification} /></TableCellStyled>
        <TableCellStyled>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <FeatherIcon icon="chevron-up" /> : <FeatherIcon icon="chevron-down" />}
          </IconButton>
        </TableCellStyled>
      </TableRow>

      <TableRow>
        <TableCellStyled style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <BoxStyled>
              <DetailStyled>
                <header>
                  <TitleStyled>
                    Detalhes do incidente
                  </TitleStyled>
                  
                  <TagsStyled>
                    <Tag label="#KB_N1: KB0015855" color="#444545" />
                      &nbsp;&nbsp;&nbsp;
                    <Tag label="NOTIFY" color="#444545" />
                  </TagsStyled>
                </header>

                <section>
                  <p>Grupo escalation: Assessoria web</p>
                  <p>{row.description.label}</p>
                </section>
                <footer>
                  <IconStyled>
                    <Link to="/incidents/history">
                      <BadgeHistoryStyled color="primary" badgeContent={2}>
                        <FeatherIcon icon="inbox" />
                        <p>Histórico de notificações</p>
                      </BadgeHistoryStyled>
                    </Link>
                  </IconStyled>
                </footer>
              </DetailStyled>

              <ActionsStyled>
                <p>Ações de contato:</p>

                <IconStyled>
                  <FeatherIcon icon="users" />
                  <p>Contato via Teams</p>
                </IconStyled>
                <IconStyled>
                  <FeatherIcon icon="sidebar" />
                  <p>Ponto de Contato</p>
                </IconStyled>
                <IconStyled>
                  <FeatherIcon icon="phone" />
                  <p>Notificação por voz</p>
                </IconStyled>
              </ActionsStyled>
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
        <ContactAutomationStyled>
          <FeatherIcon color="#5323CA" icon="message-square" />
          <p>Automatizar contato</p>
        </ContactAutomationStyled>
      </InfoStyled>

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
              <TableCell>Abertura</TableCell>
              <TableCell>Info / Host</TableCell>
              <TableCell>Problema</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Duração</TableCell>
              <TableCell>Verificado</TableCell>
              <TableCell>Notificação</TableCell>
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
