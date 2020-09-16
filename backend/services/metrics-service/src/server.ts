import 'reflect-metadata';
import * as express from 'express';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { RequestResolver } from './resolvers/Request';
import { APP_PORT } from './lib/config';

const app: express.Application = express();

interface Context {
  req: express.Request;
}

app.get('/', (req, res) => {
  res.send('I am up');
});

async function main() {
  await createConnection();
  const schema = await buildSchema({ resolvers: [RequestResolver], validate: false });
  const context = ({ req }: Context) => {
    const tenantId = req.headers['frontegg-tenant-id'] || '';
    return { tenantId };
  };
  const server = new ApolloServer({ schema, context });
  server.applyMiddleware({ app });
  app.listen({ port: APP_PORT });
}

main().then(() => console.log('Server has started!'));
