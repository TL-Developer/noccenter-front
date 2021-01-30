import styled from 'styled-components';
import Card from '@commons/components/Card';

export const TitleStyled = styled.h1`
  font-size: ${({ theme }) => theme.font.size.xxs};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const SectionStyled = styled.section`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const CardStyled = styled(Card)`
  p {
    font-size: ${({ theme }) => theme.font.size.xxs};
    color: ${({ theme }) => theme.color.neutral.light.pure};
    margin-top: ${({ theme }) => theme.spacing.sm};
    text-align: center;
  }

  && {
    margin-right: ${({ theme }) => theme.spacing.sm};
    background: ${({ theme }) => theme.color.neutral.dark['1']};

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.color.neutral.light.pure};

  svg {
    color: ${({ theme }) => theme.color.neutral.light.pure};
  }
`;
