import React, { ComponentType } from 'react';
import { AuthPlugin } from '@frontegg/react-auth';
import { AuditsPlugin } from '@frontegg/react-audits';
import { ConnectivityPlugin } from '@frontegg/react-connectivity';
import { ContextHolder } from '@frontegg/rest-api';
import { FronteggProvider as LoginBoxProvider } from '@frontegg/react-hooks';
import { ContextOptions, PluginConfig, FronteggProvider } from '@frontegg/react-core';
import { FronteggProvider as LegacyProvider, ContextOptions as LegacyOptions } from '@frontegg/react';
import { initialize } from '@frontegg/admin-portal';
import { FronteggProvider as FronteggAdminPortalProvider } from '@frontegg/react-hooks';

const { REACT_APP_API_GW_URL } = process.env;
console.log(`Initialized with ${REACT_APP_API_GW_URL} as gw url`);

const app = initialize({
  version: 'next',
  contextOptions: {
    baseUrl: REACT_APP_API_GW_URL || 'http://localhost:8080',
    requestCredentials: 'include',
  },
  headerImage: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
  themeOptions: {},
});

/**
 * use this object to config Frontegg global context object
 */
const contextOptions: ContextOptions = {
  baseUrl: REACT_APP_API_GW_URL || 'http://localhost:8080',
  requestCredentials: 'include',
  tokenResolver: () => {
    return ContextHolder.getAccessToken() || '';
  },
};

const legacyContextOptions: LegacyOptions = {
  baseUrl: REACT_APP_API_GW_URL || 'http://localhost:8080',
  requestCredentials: 'include',
  tokenResolver: () => {
    return ContextHolder.getAccessToken() || '';
  },
};

const plugins: PluginConfig[] = [
  // add frontegg plugin here
  AuthPlugin({
    header: <img alt='logo' src='images/logo.png' />,
    /* auth options, find more information at https://github.com/frontegg/frontegg-react/tree/master/packages/auth */
  }),
  ConnectivityPlugin(),
  AuditsPlugin(),
];

/**
 *  Wrap you entire application with this HOC.
 *  NOTE: Make sure to remove any BrowserRouter in your application if you use ```withRouter``` option
 */
export const withFrontegg = <P extends {}>(AppComponent: ComponentType<P>) => (props: P) => {
  return (
    <LoginBoxProvider app={app}>
      <FronteggProvider plugins={plugins} context={contextOptions}>
        <LegacyProvider contextOptions={legacyContextOptions}>
          <FronteggAdminPortalProvider app={app}>
            <AppComponent {...props} />
          </FronteggAdminPortalProvider>
        </LegacyProvider>
      </FronteggProvider>
    </LoginBoxProvider>
  );
};
