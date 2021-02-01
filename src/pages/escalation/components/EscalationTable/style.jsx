import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';
import Box from '@material-ui/core/Box';

export const TableCellStyled = styled(TableCell)`
  && {
    border-bottom: none;
  }
`;

export const BoxStyled = styled(Box)`
  header {
    h1 {
      font-size: ${({ theme }) => theme.font.size.xxs};
      color: ${({ theme }) => theme.color.neutral.dark.pure};
      font-weight: ${({ theme }) => theme.font.weight.medium};
    }
  }

  section {
    h2 {
      margin-top: ${({ theme }) => theme.spacing.md};
      font-size: ${({ theme }) => theme.font.size.xxxs};
      color: ${({ theme }) => theme.color.neutral.dark.pure};
      font-weight: ${({ theme }) => theme.font.weight.medium};
    }

    p {
      font-size: ${({ theme }) => theme.font.size.xxs};
      color: ${({ theme }) => theme.color.neutral.dark.pure};
      font-weight: ${({ theme }) => theme.font.weight.regular};
    }
  }

  footer {
    display: flex;
    justify-content: flex-end;
  }

  && {
    border: ${({ theme }) => theme.border.width.thin} ${({ theme }) => theme.border.style.default} ${({ theme }) => theme.color.neutral.dark['1']};
    border-radius: ${({ theme }) => theme.border.radius.medium};
    padding: ${({ theme }) => theme.spacing.xs};
  }
`;

export const ActionStyled = styled.div`
  display: flex;
  width: 0;
`;

export const IconStyled = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing.md};
  opacity: .8;
  cursor: pointer;
  transition: opacity ${({ theme }) => theme.motion.velocity.superfast / 400}s ease;

  &:hover {
    opacity: 1;
  }

  p {
    margin-left: ${({ theme }) => theme.spacing.xxs};
    font-size: ${({ theme }) => theme.font.size.xxxs};
    color: ${({ theme }) => theme.color.neutral.dark.pure};
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

export const NoContentStyled = styled.div`
  padding: ${({ theme }) => theme.spacing.xxs};
  text-align: center;
  width: 100%;
`;
