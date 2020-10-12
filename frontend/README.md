## Frontend App

<br/>

The project contains a [React](https://reactjs.org/) dashboard using [Typescript](https://www.typescriptlang.org/).<br/>
The connection to the backend is done with  [ApolloClient](https://www.apollographql.com/docs/react/api/core/ApolloClient/) and [GraphQL](https://graphql.org/).<br/>
[Frontegg](https://docs.frontegg.com/) components already embedded.

<br/>

### Scripts

<br />


    npm start

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<br />


    npm test

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

<br />



    npm run build

Builds the app for production to the `build` folder.

<br />
<br />

### Requests to server

<br />

```
import { useQuery, gql } from '@apollo/client';

const REQUESTS = gql`
  query {
    requests {
      id
      userAgent
      statusCode
    }
  }
`;

const { loading, error, data } = useQuery(REQUESTS);

```

<br />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
