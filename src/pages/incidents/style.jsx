import styled from 'styled-components';
import Card from '../commons/components/Card';

export const CardStyled = styled(Card)`
  display: flex;
  flex-direction: column;
`;

export const TitleStyled = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  p {
    color: ${({ theme }) => theme.color.neutral.dark.pure};
    font-size: ${({ theme }) => theme.font.size.xxxs};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;
