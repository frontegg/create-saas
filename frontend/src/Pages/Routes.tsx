import * as React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import Auth from './Auth';
import MainLayout from './MainLayout';
const history = createBrowserHistory();
const Routes: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Route path='/auth' component={Auth} />
      <Route path='/' component={MainLayout} />
    </Switch>
  </Router>
);

export default Routes;