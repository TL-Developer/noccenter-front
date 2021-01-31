import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import {
  ModalStyled,
} from './style';

const Modal = ({
  open,
  onClose,
  children,
}) => (
  <ModalStyled
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={open}
    onClose={onClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={open}>
      {children}
    </Fade>
  </ModalStyled>
);

export default Modal;
