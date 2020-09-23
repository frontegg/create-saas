import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { withFrontegg } from './withFrontegg';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './tailwind.output.css';
import { BrowserRouter } from 'react-router-dom';

const AppWithFrontegg = withFrontegg(App);
ReactDOM.render(
  <BrowserRouter>
    <AppWithFrontegg />
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
