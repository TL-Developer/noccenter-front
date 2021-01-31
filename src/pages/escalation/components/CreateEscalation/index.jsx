import React from 'react';
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

const CreateEscalation = ({
  isEditable,
  saveEscalation,
  onChange,
  escalations,
  squad,
  techLead,
  setSquad,
  setTechLead,
}) => {
  return (
    <CreateEscalationStyled>
      <FormStyled>
        <TextFieldStyled
          disabled={isEditable}
          value={squad}
          onChange={(e) => setSquad(e.target.value)} label="Nome da Equipe, Squad" variant="outlined"
        />
        
        <TextFieldStyled
          disabled={isEditable}
          value={techLead} 
          onChange={(e) => setTechLead(e.target.value)} label="Tech Lead" variant="outlined"
        />
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
              {escalations && escalations.map((escalation, index) => (
                <TableRow key={escalation.value}>
                  <TableCellStyled component="th" scope="row">
                    <p>{escalation.order}</p>
                  </TableCellStyled>
                  <TableCellStyled component="th" scope="row">
                    <TextFieldTdStyled
                      disabled={isEditable}
                      onChange={(e) => onChange(e, escalation, index, 'job')}
                      value={escalation.job}
                    />
                  </TableCellStyled>
                  <TableCellStyled component="th" scope="row">
                    <TextFieldTdStyled
                      disabled={isEditable}
                      onChange={(e) => onChange(e, escalation, index, 'name')}
                      value={escalation.name}
                    />
                  </TableCellStyled>
                  <TableCellStyled component="th" scope="row">
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <FeatherIcon size="18" icon="phone" />
                      </Grid>
                      <Grid item>
                        <TextFieldTdStyled
                          disabled={isEditable}
                          onChange={(e) => onChange(e, escalation, index, 'contact')}
                          value={escalation.contact}
                        />
                      </Grid>
                    </Grid>
                  </TableCellStyled>
                  <TableCellStyled component="th" scope="row">
                    <TextFieldTdStyled
                      disabled={isEditable}
                      onChange={(e) => onChange(e, escalation, index, 'email')}
                      value={escalation.email}
                    />
                  </TableCellStyled>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainerStyled>
      </TableStyled>
      
      {!isEditable && (
        <FooterStyled>
          <ButtonStyled onClick={() => saveEscalation()}>Criar grupo de escalation</ButtonStyled>
        </FooterStyled>
      )}
    </CreateEscalationStyled>
  );
};

export default CreateEscalation;
