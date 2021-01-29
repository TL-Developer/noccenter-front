import styled from 'styled-components';

export const BulletStyled = styled.div`
  width: 10px;
  height: 10px;
  border-radius: ${({ theme }) => theme.border.radius.circular};
  background: ${({ color }) => color};
`;
