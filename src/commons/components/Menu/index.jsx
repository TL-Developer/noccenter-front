import React, { useState, useEffect, useRef } from 'react';
import { Link  } from 'react-router-dom';
import Logo from '../../../commons/components/Logo';
import FeatherIcon from '../FeatherIcon';

import {
  MenyContainerStyled,
  MenuStyled,
  HeaderStyled,
  SectionStyled,
  FooterStyled,
  ListMenuStyled,
  ListMenuItemStyled,
  IconStyled,
  LabelStyled,
  SwitchStyled,
  OverLayStyled,
} from './style';


const Menu = ({
  handleTheme,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [overlay, setOverlay] = useState(true);
  const $listMenu = useRef(null);

  const activeItemMenu = () => {
    const { pathname } = window.location;
    const $listMenuElement = $listMenu.current;
    const $linkItemCurrent = pathname.match(/\//g).length > 1 ? $listMenuElement.querySelector(`[href="/${pathname.split('/')[1]}"]`) : $listMenuElement.querySelector(`[href="${pathname}"]`); 
    const $itemMenuCurrent = $linkItemCurrent.querySelector('li'); 

    $itemMenuCurrent.classList.add('active');

    setTimeout(() => {
      setOverlay(false);
    }, 1000);
  };

  useEffect(() => {
    activeItemMenu();
  }, []);

  return (
    <MenyContainerStyled>
      {overlay && <OverLayStyled />}
      <MenuStyled
        onMouseEnter={() => setIsMobile(true)}
        onMouseLeave={() => setIsMobile(false)}
      >
        <HeaderStyled>
          <Logo isMobile={isMobile} width="xxxl" />
        </HeaderStyled>
        
        <SectionStyled>
          <ListMenuStyled ref={$listMenu}>
            <Link to="/dashboard">
              <ListMenuItemStyled>
                <IconStyled>
                  <FeatherIcon icon="sidebar" />
                </IconStyled>
                <LabelStyled>Dashboard</LabelStyled>
              </ListMenuItemStyled>
            </Link>

            <Link to="/incidents">
              <ListMenuItemStyled>
                  <IconStyled>
                    <FeatherIcon icon="inbox" />
                  </IconStyled>
                <LabelStyled>Incidentes</LabelStyled>
              </ListMenuItemStyled>
            </Link>

            <Link to="/automation">
              <ListMenuItemStyled>
                <IconStyled>
                  <FeatherIcon icon="cpu" />
                </IconStyled>
                <LabelStyled>Automação</LabelStyled>
              </ListMenuItemStyled>
            </Link>

            <Link to="/escalation">
              <ListMenuItemStyled>
                <IconStyled>
                  <FeatherIcon icon="users" />
                </IconStyled>
                <LabelStyled>Escalation</LabelStyled>
              </ListMenuItemStyled>
            </Link>
          </ListMenuStyled>
        </SectionStyled>

        <FooterStyled>
          <p>Modo escuro</p>
          <SwitchStyled
            onChange={(e) => handleTheme(e.currentTarget.checked)}
            color="default"
            inputProps={{ 'aria-label': 'checkbox with default color' }}
          />
        </FooterStyled>
      </MenuStyled>
    </MenyContainerStyled>
  );
};

export default Menu;
