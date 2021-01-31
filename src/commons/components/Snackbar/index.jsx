import React from 'react';

import {
  SnackbarStyled,
  AlertStyled,
} from './style';

const Snack = ({
  anchorOrigin,
  open,
  handleClose,
  message,
  autoHideDuration,
  severity,
}) => (
  <SnackbarStyled
    anchorOrigin={anchorOrigin}
    open={open}
    onClose={handleClose}
    message={message}
    autoHideDuration={autoHideDuration}
  >
    <AlertStyled severity={severity}>{message}</AlertStyled>
  </SnackbarStyled>
);

export default Snack;
