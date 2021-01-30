import styled from 'styled-components';
import Card from '@commons/components/Card';

export const CardStyled = styled(Card)`
  && {
    background: ${({ theme }) => theme.color.brand.pure};
    width: 100%;
    padding: 0;
  }
`;

export const ChartStyled = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  height: 0;
`;

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleStyled = styled.div`
  h1 { 
    font-size: ${({ theme }) => theme.font.size.sm};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.color.neutral.light.pure};
  }

  p { 
    margin-top: ${({ theme }) => theme.spacing.xxs};
    font-size: ${({ theme }) => theme.font.size.xxxs};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    color: ${({ theme }) => theme.color.neutral.light.pure};
  }
`;

export const SettingsStyled = styled.div`
  background: ${({ theme }) => theme.color.neutral.light.pure};
  border-radius: ${({ theme }) => theme.border.radius.medium};

  p {
    padding: ${({ theme }) => theme.spacing.xxs};
    font-size: ${({ theme }) => theme.font.size.xxxs};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.color.neutral.dark.pure};
  }
`;
