import React from 'react';
import { Link } from 'react-router-dom';
import avatarImg from '../../../assets/liminha.jpg';
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
}) => (
  <ProfileStyled>
    <WelcomeBackStyled>
      <h3>Olá Tiago, </h3>
      <h2>Bem vindo(a) de volta 👋</h2>
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
              <p>Tiago Lima</p>
            </MenuItem>
            <Link to="/"  onChange={() => handleTheme(false)}>
              <MenuItem>Logout</MenuItem>
            </Link>
          </Select>
        </li> 
        <li>
          <AvatarStyled>
            <img src={avatarImg} alt="Liminha"/>
          </AvatarStyled>
        </li>
      </ul>
    </UserStyled>
  </ProfileStyled>
);

export default Profile;
