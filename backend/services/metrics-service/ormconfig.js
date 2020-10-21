const rootDir = process.env.NODE_ENV === 'production' ? 'dist' : 'src';
const { DB_PORT, DB_DB, DB_HOST, DB_PASSWORD, DB_USER } = require(`./${rootDir}/lib/config`);

module.exports = [
  {
    type: 'postgres',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DB,
    synchronize: true,
    logging: false,
    keepConnectionAlive: true,
    entities: [`${rootDir}/db/entity/**/*.{js,ts}`],
    migrations: [`${rootDir}/db/migration/**/*.{js,ts}`],
    subscribers: [`${rootDir}/db/subscriber/**/*.{js,ts}`],
    cli: {
      entitiesDir: `${rootDir}/db/entity`,
      migrationsDir: `${rootDir}/db/migration`,
      subscribersDir: `${rootDir}/db/subscriber`,
    },
  },
  {
    name: 'seed',
    type: 'postgres',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DB,
    synchronize: true,
    logging: false,
    keepConnectionAlive: true,
    entities: [`${rootDir}/db/entity/**/*.{js,ts}`],
    migrations: [`${rootDir}/db/seed/**/*.{js,ts}`],
    subscribers: [`${rootDir}/db/subscriber/**/*.{js,ts}`],
    cli: {
      entitiesDir: `${rootDir}/db/entity`,
      migrationsDir: `${rootDir}/db/seed`,
      subscribersDir: `${rootDir}/db/subscriber`,
    },
  },
];
