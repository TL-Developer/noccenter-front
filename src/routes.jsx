import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Profile from '@commons/components/Profile';
import Menu from '@commons/components/Menu';
import Fade from '@material-ui/core/Fade';
import Loading from '@commons/components/Loading';
import Snackbar from '@commons/components/Snackbar';

import Login from '@pages/login';
import Dashboard from '@pages/dashboard';
import Incidents from '@pages/incidents';
import Automation from '@pages/automation';
import AutomationNew from '@pages/automation/pages/automation-new';
import Escalation from '@pages/escalation';
import EscalationNew from '@pages/escalation/pages/escalation-new';
import EscalationUpdate from '@pages/escalation/pages/escalation-update';
import EscalationView from '@pages/escalation/pages/escalation-view';
import IncidentsHistory from '@pages/incidents/pages/incidents-history';

const RouteStyled = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const ContainerStyled = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  margin: 0 ${({ margin, theme }) => margin ? theme.spacing.md : 0} 0 ${({ margin, theme }) => margin ? '110px' : 0};
  /* margin: 0 ${({ margin, theme }) => margin ? theme.spacing.md : 0} 0 110px; */
  height: 100%;
`;

export const routes = [
  { label: '', path: '/', Component: Login }, 
  { label: '', path: '/dashboard', Component: Dashboard },
  { label: '', path: '/incidents', Component: Incidents },
  { label: '', path: '/automation', Component: Automation },
  { label: '', path: '/automation/new', Component: AutomationNew },
  { label: '', path: '/escalation', Component: Escalation },
  { label: '', path: '/escalation/new', Component: EscalationNew },
  { label: '', path: '/escalation/:escalationId/update', Component: EscalationUpdate },
  { label: '', path: '/escalation/:escalationId/view', Component: EscalationView },
  { label: '', path: '/incidents/:incidentId/history', Component: IncidentsHistory },
];

export default function Routes({
  handleTheme,
  whatTheme,
}) {
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [messageSnackbar, setMessageSnackbar] = useState('');
  const [severitySnackbar, setSeveritySnackbar] = useState('success');

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    window.setState = {
      setLoading,
      setOpenSnackbar,
      setMessageSnackbar,
      setSeveritySnackbar,
    };
  }, []);

  return (
    <Switch>
      {routes.map(({ path, Component }) => (
        <Route
          exact
          key={path}
          path={path}
        >
          <RouteStyled>
            {(loading && loading === true) && <Loading />}
            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              autoHideDuration={6000}
              open={openSnackbar}
              onClose={handleCloseSnackbar}
              message={messageSnackbar}
              severity={severitySnackbar}
            />
            {path !== '/' && <Menu whatTheme={whatTheme} handleTheme={(e) => handleTheme(e)} />}
            
            <Fade in timeout={300}>
              <ContainerStyled margin={path !== '/'}>
                {path !== '/' && <Profile handleTheme={(e) => handleTheme(e)} />}
                <Component />
              </ContainerStyled>
            </Fade>
          </RouteStyled>
        </Route>
      ))}
    </Switch>
  );
}
