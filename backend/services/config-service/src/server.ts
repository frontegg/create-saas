import * as express from 'express';
import { APP_PORT, DB_URI } from './lib/config';
import connectDB from './db';
import schema from './schema/schema';
import { ApolloServer } from 'apollo-server-express';

const app: express.Application = express();

interface Context {
  req: express.Request;
}

app.get('/', (req, res) => {
  res.send('I am up');
});

async function main() {
  await connectDB(DB_URI);
  const context = ({ req }: Context) => {
    const tenantId = req.headers['frontegg-tenant-id'] || '';
    return { tenantId };
  };
  const server = new ApolloServer({ schema, context });
  server.applyMiddleware({ app });
  app.listen({ port: APP_PORT });
}

main().then(() => console.log('Server has started!'));
