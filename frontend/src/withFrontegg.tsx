import React, { ComponentType } from 'react';
import { ContextOptions, PluginConfig, FronteggProvider } from '@frontegg/react-core';
import { uiLibrary } from '@frontegg/react-elements-material-ui';
import { AuthPlugin } from '@frontegg/react-auth';

/**
 * use this object to config Frontegg global context object
 */
const contextOptions: ContextOptions = {
  // NOTE: After registering with Frontegg and setting the client ID and api key on the API gateway update this base URL
  baseUrl: 'https://demo-saas-api.frontegg.com', // 'http://localhost:5000',
  requestCredentials: 'include',
};

const plugins: PluginConfig[] = [
  // add frontegg plugin here
  AuthPlugin({
    header: <img alt='logo' src='http://acmelogos.com/images/logo-1.svg' />
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
      <AppComponent {...props} />
    </FronteggProvider>
  );
};
