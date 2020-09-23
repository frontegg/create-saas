import React from 'react';
import Routes from './Pages/Routes';
import './App.scss';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className='app'>
          <Routes />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
