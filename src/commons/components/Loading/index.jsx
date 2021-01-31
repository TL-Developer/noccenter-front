import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

import {
  LoadingStyled,
} from './style';

const Loading = () => (
  <LoadingStyled>
    <CircularProgress size="100px" />
  </LoadingStyled>
);

export default Loading;
