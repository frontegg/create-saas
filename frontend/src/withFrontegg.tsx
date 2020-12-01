import React, { ComponentType } from 'react';
import { ContextHolder } from '@frontegg/rest-api';
import { ContextOptions, PluginConfig, FronteggProvider } from '@frontegg/react-core';
import { uiLibrary } from '@frontegg/react-elements-material-ui';
import { AuthPlugin } from '@frontegg/react-auth';
import { FronteggProvider as LegacyProvider, ContextOptions as LegacyOptions } from '@frontegg/react';

/**
 * use this object to config Frontegg global context object
 */
const contextOptions: ContextOptions = {
  baseUrl: 'http://localhost:8080',
  requestCredentials: 'include',
};

const legacyContextOptions: LegacyOptions = {
  baseUrl: 'http://localhost:8080',
  requestCredentials: 'include',
  tokenResolver: () => {
    return ContextHolder.getAccessToken() || '';
  },
};

const plugins: PluginConfig[] = [
  // add frontegg plugin here
  AuthPlugin({
    header: <img alt='logo' src='https://assets.frontegg.com/public-frontegg-assets/acme-logo.svg' />,
    /* auth options, find more information at https://github.com/frontegg/frontegg-react/tree/master/packages/auth */
  }),
];

/**
 *  Wrap you entire application with this HOC.
 *  NOTE: Make sure to remove any BrowserRouter in your application if you use ```withRouter``` option
 */
export const withFrontegg = <P extends {}>(AppComponent: ComponentType<P>) => (props: P) => {
  return (
    <FronteggProvider plugins={plugins} context={contextOptions} uiLibrary={uiLibrary}>
      <LegacyProvider contextOptions={legacyContextOptions}>
        <AppComponent {...props} />
      </LegacyProvider>
    </FronteggProvider>
  );
};
