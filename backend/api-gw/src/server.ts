import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { ApolloGateway } from '@apollo/gateway';
import { APP_PORT, METRICS_URL, CONFIG_URL } from './lib/config';
import AuthenticatedDataSource from './autenticated-data-source';

const app: express.Application = express();
app.use(morgan('combined'));
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  }),
);

// TODO - remove this after adding frontEgg middleware
app.use('/*', (req, res, next) => {
  req.headers['frontegg-tenant-id'] = '90b02525-0d38-415e-8e23-dc4d8c1c4cb0';
  next();
});

const gateway = new ApolloGateway({
  debug: process.env.NODE_ENV !== 'production',
  serviceList: [
    { name: 'metrics', url: `http://${METRICS_URL}/graphql` },
    { name: 'config', url: `http://${CONFIG_URL}/graphql` },
  ],
  buildService({ url }) {
    return new AuthenticatedDataSource({ url });
  },
});

app.get('/', (req, res) => {
  res.send('I am up');
});

async function main() {
  const server = new ApolloServer({
    gateway,
    context: ({ req: { headers } }) => ({ headers }),
    subscriptions: false,
  });
  server.applyMiddleware({ app });
  app.listen({ port: APP_PORT });
}

main().then(() => console.log('Server has started!'));
