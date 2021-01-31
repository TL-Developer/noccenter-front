import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import Modal from '@commons/components/Modal';

import {
  ContactsTableStyled,
  TableStyled,
  TableCellStyled,
  TableContainerStyled,
  ButtonStyled,
  ContainerStyled,
  TextFieldTdStyled,
  ButtonModalStyled,
} from './style';

function createData(date, user, message) {
  return {
    date,
    user,
    message,
  };
}

const rows = [
  createData('10/04/2021   16:04', 'Felipe Vieira', 'Contato realizado com equipe responsável via Teams '),
  createData('10/04/2021   16:04', 'Felipe Vieira', 'Contato realizado com equipe responsável via Teams '),
  createData('10/04/2021   16:04', 'Felipe Vieira', 'Contato realizado com equipe responsável via Teams '),
];

// const object = {
//   date: '10/04/2021 16:04',
//   user: 'Felipe Vieira',
//   message: 'Resolvido',
// };

const Row = (props) => {
  const { row } = props;

  return (
    <>
      <TableRow>
        <TableCellStyled component="th" scope="row">
          {row.date}
        </TableCellStyled>
        <TableCellStyled>
          {row.user}
        </TableCellStyled>
        <TableCellStyled>
          {row.message}
        </TableCellStyled>
      </TableRow>
    </>
  );
};

const ContactsTable = () => {
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
        <TableContainerStyled component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Data</TableCell>
                <TableCell>Usuário</TableCell>
                <TableCell>Mensagem</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.date} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainerStyled>
      </TableStyled>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <ContainerStyled>
          <h2>Cadastrar contato</h2> <br />
          
          <TableStyled>
            <TableContainerStyled component={Paper}>
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
            </TableContainerStyled>
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
