import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import avatarImg from '../../../assets/avatar.jpg';
import FeatherIcon from '../FeatherIcon';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import {
  ProfileStyled,
  WelcomeBackStyled,
  UserStyled,
  AvatarStyled,
} from './style';

const Profile = ({
  handleTheme,
}) => { 
  const [title, setTitle] = useState('Olá Fernando,');
  const [description, setDescription] = useState('Bem vindo de volta 👋');

  useEffect(() => {
    const { pathname } = window.location;
    const currentRoutePathname = pathname.split('/')[1];
    const currentRouteResource = pathname.split('/')[3] || pathname.split('/')[2];
    const verifyRoute = pathname.split('/').length === 2 ? currentRoutePathname : `${currentRoutePathname}-${currentRouteResource}`;

    switch (verifyRoute) {
      case 'incidents':
        setTitle('Monitoramento de');
        setDescription('Incidentes');
        break;
    
      case 'incidents-history':
        setTitle('NOC Center');
        setDescription('Histórico de incidentes');
        break;

      case 'automation':
        setTitle('NOC Center');
        setDescription('Modelos de automação');
        break;
    
      case 'automation-new':
        setTitle('NOC Center');
        setDescription('Modelos de automação');
        break;

      case 'escalation':
        setTitle('NOC Center');
        setDescription('Grupos de Escalation');
        break;

      case 'escalation-new':
        setTitle('NOC Center');
        setDescription('Cadastro de Escalation');
        break;

      case 'escalation-update':
        setTitle('NOC Center');
        setDescription('Atualização de Escalation');
        break;

      case 'escalation-view':
        setTitle('NOC Center');
        setDescription('Visualização de Escalation');
        break;
    }
  }, []);

  return (
    <ProfileStyled>
      <WelcomeBackStyled>
        <h3>{title}</h3>
        <h2>{description}</h2>
      </WelcomeBackStyled>

      <UserStyled>
        <ul>
          <li>
            <FeatherIcon icon="settings" />
          </li>
          <li>
            <FeatherIcon icon="bell" />
          </li>
          <li>
            <Select
              label="teste"
              value={1}
              style={{ padding: '0 10px' }}
            >
              <MenuItem value={1}>
                <p>Fernando Cesar</p>
              </MenuItem>
              <Link to="/"  onChange={() => handleTheme(false)}>
                <MenuItem>Logout</MenuItem>
              </Link>
            </Select>
          </li> 
          <li>
            <AvatarStyled>
              <img src={avatarImg} alt="Avatar"/>
            </AvatarStyled>
          </li>
        </ul>
      </UserStyled>
    </ProfileStyled>
  );
};

export default Profile;
