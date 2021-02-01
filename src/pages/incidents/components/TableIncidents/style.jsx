import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';

export const TableCellStyled = styled(TableCell)`
  && {
    border-bottom: none;
  }
`;

export const BoxStyled = styled(Box)`
  display: flex;
  flex: 1;

  section {
    margin-top: ${({ theme }) => theme.spacing.md};
    
    p {
      margin-bottom: ${({ theme }) => theme.spacing.xxs};
      font-size: ${({ theme }) => theme.font.size.xxs};
      color: ${({ theme }) => theme.color.neutral.dark.pure};
      font-weight: ${({ theme }) => theme.font.weight.regular};
    }
  }

  footer {
    margin-top: ${({ theme }) => theme.spacing.md};
  }

  && {
    padding: ${({ theme }) => theme.spacing.xs};
    background: ${({ theme }) => theme.color.neutral.light.pure};
    border-radius: ${({ theme }) => theme.border.radius.large};
    box-shadow: ${({ theme }) => theme.shadow.level['1']};
  }
`;

export const InfoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xs};
  background: ${({ theme }) => theme.color.brand['1']};
  border-radius: ${({ theme }) => theme.border.radius.medium};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  p {
    font-size: ${({ theme }) => theme.font.size.xxxs};
    color: ${({ theme }) => theme.color.brand.pure};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

export const IconStyled = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.xs};
  margin-right: ${({ theme }) => theme.spacing.lg};
  opacity: .8;
  cursor: pointer;
  transition: opacity ${({ theme }) => theme.motion.velocity.superfast / 400}s ease;

  &:hover {
    opacity: 1;
  }

  p {
    margin-left: ${({ theme }) => theme.spacing.xxs};
    font-size: ${({ theme }) => theme.font.size.us};
    color: ${({ theme }) => theme.color.neutral.dark.pure};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`;

export const ContactAutomationStyled = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;

  p {
    margin-left: ${({ theme }) => theme.spacing.xxs};
    font-size: ${({ theme }) => theme.font.size.xxxs};
    color: ${({ theme }) => theme.color.brand.pure};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

export const DetailStyled = styled.div`
  flex: 1;  
`;

export const ActionsStyled = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  margin-right: ${({ theme }) => theme.spacing.lg};
  justify-content: flex-end;
`;

export const TitleStyled = styled.h1`
  font-size: ${({ theme }) => theme.font.size.xxs};
  color: ${({ theme }) => theme.color.neutral.dark.pure};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const TagsStyled = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const BadgeHistoryStyled = styled(Badge)`
  && {
    span {
      right: -${({ theme }) => theme.spacing.xs};
    }
  }
`;

export const TableRowStyled = styled(TableRow)`
  && {
    background: ${({ newincident }) => newincident ? '#fdf4e4' : '#fff'};
  }
`;

export const TableBodyStyled = styled(TableBody)`

`;
