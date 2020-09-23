import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainLayout from './MainLayout';
import { NotificationContextProvider } from './MainLayout/NotificationContext';

const Routes: React.FC = () => (
  <Switch>
    <Route
      path='/'
      render={() => (
        <NotificationContextProvider>
          <MainLayout />
        </NotificationContextProvider>
      )}
    />
  </Switch>
);

export default Routes;
