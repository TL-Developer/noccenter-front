import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: fit-content;
`;

export const LogoStyled = styled.div`
  margin: 0 auto;
`;

export const HeaderStyled = styled.header`
  margin: ${({ theme }) => theme.spacing.xxl} 0 0;
  display: flex;
  flex-direction: column;
`;

export const TitleStyled = styled.h6`
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin: ${({ theme }) => theme.spacing.xl} 0 0 0;

`;

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
`;

export const SubTitleStyled = styled.p`
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  margin: ${({ theme }) => theme.spacing.lg} 0  ${({ theme }) => theme.spacing.md} 0;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputEmailStyled = styled(TextField)`
  && {
    margin: ${({ theme }) => theme.spacing.xs} 0;
  }
`;

export const InputPasswordStyled = styled(TextField)``;

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const ButtonStyled = styled(Button)`
  && {
    margin-top: ${({ theme }) => theme.spacing.xs};
    background: ${({ theme }) => theme.color.brand.pure};
    padding: ${({ theme }) => theme.spacing.xs} 0;
    font-size: ${({ theme }) => theme.font.size.xs};
    text-transform: none;
  }
`;
