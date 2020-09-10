import * as express from 'express';
import * as proxy from 'express-http-proxy';
import { APP_PORT, METRICS_URL, CONFIG_URL } from './lib/config';

const app: express.Application = express();

// TODO - replace this with frontEgg middleware
app.use('/*', (req, res, next) => {
  req.headers['frontegg-tenant-id'] = '90b02525-0d38-415e-8e23-dc4d8c1c4cb0';
  next();
});
app.use('/metrics', proxy(METRICS_URL));
app.use('/config', proxy(CONFIG_URL));

app.get('/', (req, res) => {
  res.send('I am up');
});

async function main() {
  app.listen({ port: APP_PORT });
}

main().then(() => console.log('Server has started!'));
