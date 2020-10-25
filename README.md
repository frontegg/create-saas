# Open SAAS

### Create fully bundled SaaS application (Backend & Frontend) using an interactive CLI.

<br />

### The Monorepo project consists of two micro services with an api gateway in front of them and a dashboard.

### One service uses [PostgreSQL](https://www.postgresql.org/) and the other [MongoDB](https://www.mongodb.com/).

### The frontend is based on [React](https://reactjs.org/) framework and connected to the backend with [GraphQL](https://graphql.org/) data query.

### The project is written in [Typescript](https://www.typescriptlang.org/).

### Open SAAS works with [Docker](https://www.docker.com/).

<br />

## Pre-requisites

<br />

- node.js - [Download page](https://nodejs.org/en/download/)
- git - [Installation guide](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/)
- docker - [Download page](https://docs.docker.com/get-docker)

<br />

## Quick Start

<br />

```sh
npx opensaas my-app
cd my-app
npm run start
```

<br />

<p align='center'>
<img src='./npx-opensaas.gif' width='600' alt='npx opensaas my-project'>
</p>

<br />

### Port bindings

<br />

Api gateway default port is <b>5000</b>.

Metrics service default port is <b>5001</b>.

Config service default port is <b>5002</b>.

The dashboard can be opened on http://localhost:3000/.

<br />

## Project structure

<br />

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── frontend
│   ├── Dockerfile
│   ├── node_modules
│   ├── package.json
│   ├── .gitignore
│   ├── README.md
│   ├── src
│   |    └── Componentes
│   |          └── *
│   |    └── Pages
│   |          └── *
│   |    └── *
│   └── public
│        └── *
└── backend
    └── api-gw
    │   ├── README.md
    │   ├── node_modules
    │   ├── package.json
    │   └── src
    |       ├── server.ts
    |       ├── autenticated-data-source.ts
    |       └── lib
    |            └── config.ts
    └── services
        └── config-service
        |   ├── README.md
        |   ├── node_modules
        |   ├── package.json
        |   └── src
        |       ├── server.ts
        |       ├── db.ts
        |       ├── graphql
        |       |    └── *
        |       ├── models
        |       |    └── *
        |       └── lib
        |            └── *
        └── metrics-service
                ├── README.md
                ├── node_modules
                ├── package.json
                └── src
                    ├── server.ts
                    ├── db
                    |    └── *
                    ├── dto
                    |    └── *
                    ├── helpers
                    |    └── *
                    ├── lib
                    |    └── *
                    └── resolvers
                         └── *

```

<br />

<br />

## CLI

<br />

#### Add new service

`npm run cli add service-name`

#### Remove service

`npm run cli remove service-name`

#### Run application

`npm run cli run`

#### Init project

`npm run cli init`

<br />

## Example of requests to backend using GraphQL

<br />

    curl \
      -X POST \
      -H "Content-Type: application/json" \
      --data '{ "query": "{ features { name, id, tenantId } }" }' \
      http://localhost:5000/graphql

    curl \
      -X POST \
      -H "Content-Type: application/json" \
      --data '{ "query": "{ requests { url } }" }' \
      http://localhost:5000/graphql

<br />

### License

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
