# Create SAAS

Create fully bundled SaaS application (Backend & Frontend) using an interactive CLI.

## Quick Start

```sh
npx create-saas my-app
cd my-app
npm start
```

## Project structure

The project consists of two micro services with an api gateway in front of them and a dashboard.


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

## CLI

#### Add new service

`npm run cli add service-name`

#### Remove service

`npm run cli remove service-name`

#### Run application

`npm run cli run`

#### Init project

`npm run cli init`

<br/>

### License
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
