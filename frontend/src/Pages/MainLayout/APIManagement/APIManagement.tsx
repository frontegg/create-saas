import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PageHeader, PageTabProps, PageTabs } from '@frontegg/react-core';
import { routes } from '../../../routes';

import './APIManagement.scss';

const tabs: PageTabProps[] = [
  {
    Title: () => <>Tab 1</>,
    route: `${routes.api.path}/tab1`,
    comp: () => <div>Tab 1</div>,
  },
  {
    Title: () => <>Tab 2</>,
    route: `${routes.api.path}/tab2`,
    comp: () => <div>Tba 2</div>,
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
