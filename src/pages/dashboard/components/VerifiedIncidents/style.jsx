import styled from 'styled-components';

export const ChartStyled = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const TitleStyled = styled.h1`
  font-size: ${({ theme }) => theme.font.size.xxs};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const EmojiStyled = styled.div`
  font-size: ${({ theme }) => theme.font.size.md};
  background: ${({ theme }) => theme.color.neutral.light['1']};
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20%;
  border-radius: ${({ theme }) => theme.border.radius.circular};
`;

export const ChartInfoStyled = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  div:first-child {
    padding-left: 20px;
  }

  div:last-child {
    padding-right: 20px;
  }
`;
