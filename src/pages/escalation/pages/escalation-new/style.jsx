import styled from 'styled-components';
import Card from '@commons/components/Card';

export const CardStyled = styled(Card)`
  && {
    display: flex;
    flex-direction: row;
  }
`;

export const TitleStyled = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  p {
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.neutral.dark.pure};
    font-size: ${({ theme }) => theme.font.size.xxs};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;
