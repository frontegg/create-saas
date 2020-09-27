import '@babel/polyfill';

import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import { withFrontegg } from './withFrontegg';
const AppWithFrontegg = withFrontegg(App);

render(
    <AppWithFrontegg />,
    document.querySelector('#root')
);
