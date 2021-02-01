import styled from 'styled-components';
import Card from '@commons/components/Card';

export const CardStyled = styled(Card)`
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ButtonStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const TitleStyled = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  p {
    color: ${({ theme }) => theme.color.neutral.dark.pure};
    font-size: ${({ theme }) => theme.font.size.xxxs};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;
