import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SectionStyled = styled.section`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const TitleStyled = styled.h5`
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.size.sm};
`;

export const ColorStyled = styled.span`
  width: 16px;
  height: 16px;
  border-radius: ${({ theme }) => theme.border.radius.circular};
  background: ${({ color }) => color};
`;

export const SubTitleStyled = styled.p`
  font-size: ${({ theme }) => theme.font.size.xxs};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;

export const ValueStyled = styled.h1`
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const FooterStyled = styled.footer`
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;
