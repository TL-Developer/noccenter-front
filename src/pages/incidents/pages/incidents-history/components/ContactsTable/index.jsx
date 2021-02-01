import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import Modal from '@commons/components/Modal';
import TableContainer from '@commons/components/TableContainer';
import * as incidents from '@pages/incidents/services/incidents';

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
  createContact,
}) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [user, setUser] = useState('Tiago Lima');
  const [message, setMessage] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
                      <p>{new Date().toISOString().split('T')[0]}</p>
                    </TableCellStyled>
                    <TableCellStyled component="th" scope="row">
                      <p>Tiago Lima</p>
                    </TableCellStyled>
                    <TableCellStyled component="th" scope="row">
                      <TextFieldTdStyled
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                      />
                    </TableCellStyled>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </TableStyled>

          <ButtonModalStyled onClick={() => createContact(date, user, message, setOpen)} width="150px">
            Adicionar
          </ButtonModalStyled>
        </ContainerStyled>
      </Modal>
    </ContactsTableStyled>
  );
};

export default ContactsTable;
