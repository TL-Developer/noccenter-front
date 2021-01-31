import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import AlertsTable from './components/AlertsTable';
import ContactsTable from './components/ContactsTable';
import MenuProduct from '@commons/components/MenuProduct';
import * as incidents from '@pages/incidents/services/incidents';

import {
  CardStyled,
} from './style';

const IncidentsHistory = () => {
  const [menuActive, setMenuActive] = useState('alertas');
  const [alerts, setAlerts] = useState([]);
  const [contacts, setContacts] = useState([]);
  const timeoutSnackbar = 5000;

  const changeMenu = (item) => {
    if (item.label.toLowerCase() === 'alertas') {
      setMenuActive('alertas');
    } else {
      setMenuActive('contatos');
    }
  };

  const getIncidents = async () => {
    if (window.setState && window.setState.setLoading) {
      window.setState.setLoading(true);
    }
    
    try {
      const incidentsData = await incidents.get();

      if (window.setState && window.setState.setLoading) {
        window.setState.setLoading(false);
      }
      
      setAlerts(incidentsData[0].alert);
      setContacts(incidentsData[0].contacts);
    } catch (error) {
      console.log(error);
      window.setState.setOpenSnackbar(true);

      window.setState.setSeveritySnackbar('error');
      window.setState.setMessageSnackbar('Ops! Ocorreu um erro');
      if (window.setState && window.setState.setLoading) {
        window.setState.setLoading(false);
      }

      setTimeout(() => {
        window.setState.setOpenSnackbar(false);
      }, timeoutSnackbar)
    }
  };

  useEffect(() => {
    getIncidents();
  }, [])

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
          <AlertsTable alerts={alerts} />
        )}
        
        {(menuActive && menuActive === 'contatos') && (
          <ContactsTable contacts={contacts} />
        )}
      </CardStyled>
    </Grid>
  ); 
}

export default IncidentsHistory;
