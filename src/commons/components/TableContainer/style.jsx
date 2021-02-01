import styled from 'styled-components';
import TableContainer from '@material-ui/core/TableContainer';

export const TableContainerStyled = styled(TableContainer)`
  && {
    box-shadow: none;
    /* max-height: 400px;
    overflow-y: scroll;
    overflow-x: hidden; */

    ::-webkit-scrollbar {
      width: 4px;
      height: 4px;
      background: transparent;
    }
    ::-moz-scrollbar {
      width: 4px;
      height: 4px;
      background: transparent;
    }
    ::-webkit-scrollbar-track {
      -webkit-border-radius: 4px;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 4px;
      border-radius: 4px;
      background: ${({ theme }) => theme.color.neutral.light[1]}; 
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    }
    ::-webkit-scrollbar-thumb:window-inactive {
      background: ${({ theme }) => theme.color.neutral.light[1]}; 
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: ${({ theme }) => theme.color.neutral.light[2]};
    }
    ::-moz-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.color.neutral.light[2]};
    }
  }
`;
