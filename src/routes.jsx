import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Profile from '@commons/components/Profile';
import Menu from '@commons/components/Menu';

const Login = lazy(() => import('@pages/login'));
const Dashboard = lazy(() => import('@pages/dashboard'));
const Incidents = lazy(() => import('@pages/incidents'));
const Automation = lazy(() => import('@pages/automation'));
const AutomationNew = lazy(() => import('@pages/automation-new'));
const Escalation = lazy(() => import('@pages/escalation'));
const EscalationNew = lazy(() => import('@pages/escalation-new'));
const IncidentsHistory = lazy(() => import('@pages/incidents-history'));

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
  margin: 0 ${({ margin, theme }) => margin ? theme.spacing.md : 0} 0 ${({ margin, theme }) => margin ? theme.spacing.md : 0};
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
  { label: '', path: '/incidents/history', Component: IncidentsHistory },
];

const LoadingRoute = () => <div>loading</div>;

export default function Routes({
  handleTheme,
}) {
  return (
    <Suspense fallback={<LoadingRoute />}>
      <>
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route
              exact
              key={path}
              path={path}
            >
              <RouteStyled>
                {path !== '/' && <Menu handleTheme={(e) => handleTheme(e)} />}
                
                <ContainerStyled margin={path !== '/'}>
                  {path !== '/' && <Profile />}
                  <Component />
                </ContainerStyled>
              </RouteStyled>
            </Route>
          ))}
        </Switch>
      </>
    </Suspense>
  );
}
