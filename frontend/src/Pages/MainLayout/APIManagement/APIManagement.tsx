import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PageHeader, PageTabProps, PageTabs } from '@frontegg/react-core';
import { TenantApiTokens, UserApiTokens } from '@frontegg/react-auth';
import { routes } from '../../../routes';

import './APIManagement.scss';

const tabs: PageTabProps[] = [
  {
    Title: () => <>Account</>,
    route: `${routes.api.path}/account`,
    comp: () => <TenantApiTokens.Layout />,
  },
  {
    Title: () => <>Personal</>,
    route: `${routes.api.path}/personal`,
    comp: () => <UserApiTokens.Layout />,
  },
];

export const APIManagement: FC = () => (
  <>
    <PageHeader title='API management' className='api-management-header' />
    <PageTabs tabs={tabs} />
    <Switch>
      {tabs.map((tab: any) => (
        <Route exact key={tab.route} path={tab.route}>
          {tab.comp}
        </Route>
      ))}
      <Redirect from='*' to={tabs[0].route} />
    </Switch>
  </>
);
