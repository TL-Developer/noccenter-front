import React from 'react';

import {
  MenuProductStyled,
  MenuProductItemStyled,
} from './style';

const Menu = ({
  list,
  onClick,
}) => (
  <MenuProductStyled>
    {list && list.map(menu => (
      <MenuProductItemStyled key={menu.label} onClick={() => onClick(menu)} actived={menu.actived}>
        {menu.label}
      </MenuProductItemStyled>
    ))}
  </MenuProductStyled> 
);

export default Menu;
