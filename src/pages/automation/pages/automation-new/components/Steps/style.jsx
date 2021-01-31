import styled from 'styled-components';
import Select from '@material-ui/core/Select';

export const StepsStyled = styled.div`
  
`;

export const ListStepsStyled = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const ListStepsItemStyled = styled.li`
  margin-right: ${({ theme }) => theme.spacing.sm};  
  min-width: 70px;

  select {
    min-width: 270px;
  }

  p {
    font-size: ${({ theme }) => theme.font.size.xxs};
    font-weight: normal;
  }
`;

export const SelectStyled = styled(Select)`
  && {
    width: 170px;
  }
`;
