import styled, { keyframes } from 'styled-components';

const IconSettingsAnimation = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(180deg) }
`;

const IconBellAnimation = keyframes`
  0 { transform: translateX(-10px) skewX(-10deg) }
  25% { transform: translateX(10px) skewX(10deg) }
  50% { transform: translateX(-5px) skewX(-5deg) }
  75% { transform: translateX(5px) skewX(5deg) }
  100% { transform: translateX(0px) skewX(0deg) }
`;

export const ProfileStyled = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacing.md} 0 ${({ theme }) => theme.spacing.lg} 0;
`;

export const WelcomeBackStyled = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.font.size.sm};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.color.neutral.dark.pure};
    font-family: ${({ theme }) => theme.font.family.base};
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.md};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.color.neutral.dark.pure};
    font-family: ${({ theme }) => theme.font.family.base};
  }
`;

export const UserStyled = styled.div`
  ul {
    display: flex;
    height: 100%;
  }

  li {
    display: flex;
    padding: ${({ theme }) => theme.spacing.xxxs} ${({ theme }) => theme.spacing.sm};
    align-items: center;

    svg {
      cursor: pointer;
    }

    p {
      font-size: ${({ theme }) => theme.font.size.xs};
      font-weight: ${({ theme }) => theme.font.weight.medium};
      color: ${({ theme }) => theme.color.neutral.dark.pure};
      font-family: ${({ theme }) => theme.font.family.base};
    }
  }

  li:nth-child(1) {
    border-right: ${({ theme }) => theme.border.width.thin} ${({ theme }) => theme.border.style.default} ${({ theme }) => theme.color.neutral.light['1']};
    cursor: pointer;

    &:hover {
      svg {
        animation-name: ${IconSettingsAnimation};
        animation-duration: ${({ theme }) => theme.motion.velocity.superfast / 150}s;
      }
    }
  }

  li:nth-child(2) {
    border-right: ${({ theme }) => theme.border.width.thin} ${({ theme }) => theme.border.style.default} ${({ theme }) => theme.color.neutral.light['1']};
    cursor: pointer;

    &:hover {
      svg {
        animation-name: ${IconBellAnimation};
        animation-duration: ${({ theme }) => theme.motion.velocity.superfast / 150}s;
      }
    }
  }
`;

export const AvatarStyled = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.border.radius.circular};
  overflow: hidden;

  img {
    width: 100%;
  }
`;
