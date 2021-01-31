import styled from 'styled-components';
import FeatherIcon from 'feather-icons-react';

export const FeatherIconStyled = styled(FeatherIcon)`
  color: ${({ color, theme }) => color ? color : theme.color.neutral.dark.pure};
`;
