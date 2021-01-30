import React from 'react';
import { Link } from 'react-router-dom';
import avatarImg from '../../../assets/liminha.jpg';
import FeatherIcon from '../FeatherIcon';

import {
  ProfileStyled,
  WelcomeBackStyled,
  UserStyled,
  AvatarStyled,
} from './style';


const Profile = () => (
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
          <p>Tiago Lima</p>
        </li> 
        <li>
          <Link to="/">
            <AvatarStyled>
              <img src={avatarImg} alt="Liminha"/>
            </AvatarStyled>
          </Link> 
        </li>
      </ul>
    </UserStyled>
  </ProfileStyled>
);

export default Profile;
