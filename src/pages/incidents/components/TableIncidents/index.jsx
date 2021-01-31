import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FeatherIcon from '@commons/components/FeatherIcon';
import Bullet from '@commons/components/Bullet';
import Tag from '@commons/components/Tag';
import { Link } from 'react-router-dom';
import TableContainer from '@commons/components/TableContainer';

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
  TableRowStyled,
  TableBodyStyled,
} from './style';

const Row = ({ row, newIncident }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRowStyled newIncident={newIncident}>
        <TableCellStyled padding="checkbox">
          <Checkbox
            color="primary"
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
      </TableRowStyled>

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

const TableIncidents = ({
  incidents,
  newIncident,
}) => {
  return (
    <>
      <InfoStyled>
        <p><b>2</b> incidentes selecionados</p>
        <ContactAutomationStyled>
          <FeatherIcon color="#5323CA" icon="message-square" />
          <p>Automatizar contato</p>
        </ContactAutomationStyled>
      </InfoStyled>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
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
          <TableBodyStyled>
            {incidents.map((row) => (
              <Row newIncident={newIncident} key={row.id} row={row} />
            ))}
          </TableBodyStyled>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableIncidents;
