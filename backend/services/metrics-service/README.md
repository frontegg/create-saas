# Metrics Service

Metrics service uses `TypeORM` with `PostgreSQL`.


We use `Apollo Server` to work with `GraphQL`.

The service uses `Request` model as an example.

## Migrations && Seed - we use `TypeORM` migrations


### Migrate
   * `npm run migrate`

   * `npm run migration:revert`

### Seed
   * `npm run seed`

   * `npm run seed:revert`


## Development

   * `npm run debug`


## Deployment

   * `npm run provision`

   * `npm run start`

### Requests Examples

    curl \
      -X POST \
      -H "Content-Type: application/json" \
      -H "frontegg-tenant-id: 90b02525-0d38-415e-8e23-dc4d8c1c4cb0" \
      --data '{ "query": "{ requests { url } }" }' \
      http://localhost:5001/graphql

     curl \
       -H "Content-Type: application/json" \
       -H "frontegg-tenant-id: 90b02525-0d38-415e-8e23-dc4d8c1c4cb0" \
       -d '{ "query": "mutation { addRequest(newRequestData: { url: \"http://localhost:5000/metrics/graphql\", statusCode: 500, ip: \"127.0.0.1\", userAgent: \"chrome\" }) { id } }" }' \
       http://localhost:5001/graphql


### License
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


