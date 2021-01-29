import styled, { keyframes } from 'styled-components';
import Switch from '@material-ui/core/Switch';

export const MenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.neutral.light.pure};
  width: 80px;
  min-width: 80px;
  transition: all ${({ theme }) => theme.motion.velocity.superfast / 200}s ease;

  p {
    transition: all ${({ theme }) => theme.motion.velocity.superfast / 300}s ease;
    opacity: 0;
    width: 0;
    font-size: ${({ theme }) => theme.font.size.xxxs};
    color: ${({ theme }) => theme.color.neutral.dark.pure};
    font-family: ${({ theme }) => theme.font.family.base};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    margin: 0 0 0 ${({ theme }) => theme.spacing.xxs};
  }

  &:hover {
    width: 255px;
    min-width: 255px;

    li {
      justify-content: left;
      padding: ${({ theme }) => theme.spacing.xs} 0 ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.xs};
    }

    p {
      opacity: 1;
      width: auto;
    }
  }
`;

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const SectionStyled = styled.header`
  display: flex;
  flex: 4;
`;

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
`;

export const ListMenuStyled = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

const listMenuItemPipeAnimation = keyframes`
  from { height: 0; opacity: 0 }
  to { height: 100%; opacity: 1 }
`;

export const ListMenuItemStyled = styled.li`
  display: flex;
  align-items: center;
  transition: all ${({ theme }) => theme.motion.velocity.superfast / 200}s ease;
  cursor: pointer;
  position: relative;
  padding: ${({ theme }) => theme.spacing.xs} 0 ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  opacity: .8;

  &.active {
    opacity: 1;
    background: ${({ theme }) => theme.color.brand['1']};

    &:before {
      content: '';
      width: 4px;
      height: 100%;
      position: absolute;
      left: 0;
      background: ${({ theme }) => theme.color.brand.pure};
      animation-name: ${listMenuItemPipeAnimation};
      animation-duration: ${({ theme }) => theme.motion.velocity.superfast / 200}s;
    }
  }

  &:hover {
    background: ${({ theme }) => theme.color.brand['1']};
    opacity: 1;

    &:before {
      content: '';
      width: 4px;
      height: 100%;
      position: absolute;
      left: 0;
      background: ${({ theme }) => theme.color.brand.pure};
      animation-name: ${listMenuItemPipeAnimation};
      animation-duration: ${({ theme }) => theme.motion.velocity.superfast / 200}s;
    }
  }
`;

export const IconStyled = styled.div``;

export const LabelStyled = styled.p`
  font-size: ${({ theme }) => theme.font.size.xxxs};
  color: ${({ theme }) => theme.color.neutral.dark.pure};
  font-family: ${({ theme }) => theme.font.family.base};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin: 0 0 0 ${({ theme }) => theme.spacing.xxs};
`;

export const SwitchStyled = styled(Switch)`
  position: relative;
  z-index: 1;
`;
