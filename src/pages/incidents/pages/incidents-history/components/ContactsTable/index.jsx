import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import Modal from '@commons/components/Modal';
import TableContainer from '@commons/components/TableContainer';

import {
  ContactsTableStyled,
  TableStyled,
  TableCellStyled,
  ButtonStyled,
  ContainerStyled,
  TextFieldTdStyled,
  ButtonModalStyled,
} from './style';

const Row = ({ contact }) => {
  return (
    <>
      <TableRow>
        <TableCellStyled component="th" scope="row">
          {contact.date}
        </TableCellStyled>
        <TableCellStyled>
          {contact.user}
        </TableCellStyled>
        <TableCellStyled>
          {contact.message}
        </TableCellStyled>
      </TableRow>
    </>
  );
};

const ContactsTable = ({
  contacts,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createContact = () => {
    setOpen(false);
  };

  return (
    <ContactsTableStyled>
      <ButtonStyled onClick={handleOpen} color="#743CFF">
        Adicionar novo contato
      </ButtonStyled>

      <TableStyled>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Data</TableCell>
                <TableCell>Usuário</TableCell>
                <TableCell>Mensagem</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map((contact) => (
                <Row key={contact.date} contact={contact} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableStyled>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <ContainerStyled>
          <h2>Cadastrar contato</h2> <br />
          
          <TableStyled>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Data</TableCell>
                    <TableCell>Usuário</TableCell>
                    <TableCell>Mensagem</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCellStyled component="th" scope="row">
                      <p>10/04/2021 16:04</p>
                    </TableCellStyled>
                    <TableCellStyled component="th" scope="row">
                      <p>Felipe Vieira</p>
                    </TableCellStyled>
                    <TableCellStyled component="th" scope="row">
                      <TextFieldTdStyled />
                    </TableCellStyled>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </TableStyled>

          <ButtonModalStyled onClick={createContact} width="150px">
            Adicionar
          </ButtonModalStyled>
        </ContainerStyled>
      </Modal>
    </ContactsTableStyled>
  );
};

export default ContactsTable;
