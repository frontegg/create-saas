require('dotenv').config()

const cors = require('cors');
const path = require('path');
const express = require('express');
const { frontegg, withAuthentication, FronteggPermissions } = require('@frontegg/client');

const app = express();
const bodyParser = require('body-parser');

const buildFolder = 'build';
const port = process.env.PORT || 8080;
const clientId = process.env.FRONTEGG_CLIENT_ID || 'YOUR-CLIENT-ID';
const apiKey = process.env.FRONTEGG_API_KEY || 'YOUR-API-KEY';

app.use(express.static(path.join(__dirname, buildFolder)));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use('/frontegg', frontegg({
  clientId,
  apiKey,
  authMiddleware: withAuthentication(),
  contextResolver: req => {
    return {
      tenantId: req.user ? req.user.tenantId : '',
      userId: req.user ? req.user.id : '',
      permissions: [FronteggPermissions.All],
    }
  }
}));

app.get('*', function (_req, res) {
  res.sendFile(path.join(__dirname, buildFolder, 'index.html'));
});

app.listen(port);
