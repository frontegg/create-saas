import * as React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import Auth from './Auth';
import MainLayout from './MainLayout';
import { NotificationContextProvider } from './MainLayout/NotificationContext';
const history = createBrowserHistory();
const Routes: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route path='/auth' component={Auth} />
      <Route path='/' render={() =>
        <NotificationContextProvider>
          <MainLayout />
        </NotificationContextProvider>} />
    </Switch>
  </Router>
);

export default Routes;