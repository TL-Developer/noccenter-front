import styled from 'styled-components';
import Card from '@commons/components/Card';

export const CardStyled = styled(Card)`
  display: flex;
  flex-direction: column;
`;

export const ButtonStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;
