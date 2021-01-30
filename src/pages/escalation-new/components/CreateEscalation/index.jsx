import React,  { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import FeatherIcon from '@commons/components/FeatherIcon';
import Grid from '@material-ui/core/Grid';

import {
  CreateEscalationStyled,
  FormStyled,
  TextFieldStyled,
  TableStyled,
  TableCellStyled,
  TableContainerStyled,
  FooterStyled,
  ButtonStyled,
  TextFieldTdStyled,
} from './style';

const escalations = [
  {
    label: '1º Escalation',
    value: 1,
  },
  {
    label: '2º Escalation',
    value: 2,
  },
  {
    label: '3º Escalation',
    value: 3,
  },
  {
    label: '4º Escalation',
    value: 4,
  },
  {
    label: '5º Escalation',
    value: 5,
  },
];

const CreateEscalation = () => (
  <CreateEscalationStyled>
    <FormStyled>
      <TextFieldStyled label="Nome da Equipe, Squad" variant="outlined" />
      <TextFieldStyled label="Tech Lead" variant="outlined" />
    </FormStyled>

    <TableStyled>
      <TableContainerStyled component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ordem Escalation</TableCell>
              <TableCell>Cargo</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Contato</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {escalations && escalations.map(escalation => (
              <TableRow key={escalation.value}>
                <TableCellStyled component="th" scope="row">
                  <p>{escalation.value}º Escalation</p>
                </TableCellStyled>
                <TableCellStyled component="th" scope="row">
                  <TextFieldTdStyled />
                </TableCellStyled>
                <TableCellStyled component="th" scope="row">
                  <TextFieldTdStyled />
                </TableCellStyled>
                <TableCellStyled component="th" scope="row">
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <FeatherIcon size="18" icon="phone" />
                    </Grid>
                    <Grid item>
                      <TextFieldTdStyled />
                    </Grid>
                  </Grid>
                </TableCellStyled>
                <TableCellStyled component="th" scope="row">
                  <TextFieldTdStyled />
                </TableCellStyled>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainerStyled>
    </TableStyled>

    <FooterStyled>
      <ButtonStyled>Criar grupo de escalation</ButtonStyled>
    </FooterStyled>
  </CreateEscalationStyled>
);

export default CreateEscalation;
