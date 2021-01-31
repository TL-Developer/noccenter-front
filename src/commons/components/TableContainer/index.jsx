import React from 'react';

import {
  TableContainerStyled,
} from './style';

const TableContainer = ({
  children,
}) => (
  <TableContainerStyled>
    {children}
  </TableContainerStyled>
);

export default TableContainer;
