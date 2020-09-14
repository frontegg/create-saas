# Config Service

Config service uses `Mongoose` with `MongoDB`.

We use `Apollo Server` to work with `GraphQL`.

The service uses `Feature` model as an example.


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
      --data '{ "query": "{ feature(id: \"5f4f93bf18022e3ac727c1c1\") { name, id, tenantId } }" }' \
      http://localhost:3002/graphql

    curl \
      -X POST \
      -H "Content-Type: application/json" \
      -H "frontegg-tenant-id: 90b02525-0d38-415e-8e23-dc4d8c1c4cb0" \
      --data '{ "query": "{ features { name, id, tenantId } }" }' \
      http://localhost:3002/graphql
      
    curl \
      -H "Content-Type: application/json" \
      -H "frontegg-tenant-id: 90b02525-0d38-415e-8e23-dc4d8c1c4cb0" \
      -d '{ "query": "mutation { addFeature(name: \"feature\", enabled: true) { id } }" }' \
      http://localhost:3002/graphql


### License 
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


