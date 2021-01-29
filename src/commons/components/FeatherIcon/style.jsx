import styled from 'styled-components';
import FeatherIcon from 'feather-icons-react';

export const FeatherIconStyled = styled(FeatherIcon)`
  color: ${({ theme }) => theme.color.neutral.dark.pure};
`;
