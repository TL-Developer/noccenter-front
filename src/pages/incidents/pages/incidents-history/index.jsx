import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import AlertsTable from './components/AlertsTable';
import ContactsTable from './components/ContactsTable';
import MenuProduct from '@commons/components/MenuProduct';

import {
  CardStyled,
} from './style';

const IncidentsHistory = () => {
  const [menuActive, setMenuActive] = useState('alertas');

  const changeMenu = (item) => {
    if (item.label.toLowerCase() === 'alertas') {
      setMenuActive('alertas');
    } else {
      setMenuActive('contatos');
    }
  };

  return ( 
    <Grid container>
      <CardStyled>
        <MenuProduct onClick={(item) => changeMenu(item)} list={[
          {
            label: 'Alertas',
            actived: menuActive === 'alertas' ? true : false,
          },
          {
            label: 'Contatos',
            actived: menuActive === 'contatos' ? true : false,
          },
        ]} />

        {(menuActive && menuActive === 'alertas') && (
          <AlertsTable />
        )}
        
        {(menuActive && menuActive === 'contatos') && (
          <ContactsTable />
        )}
      </CardStyled>
    </Grid>
  ); 
}

export default IncidentsHistory;
