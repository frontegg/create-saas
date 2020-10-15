import { config } from 'dotenv';
import { resolve } from 'path';

const env = process.env.NODE_ENV || 'development';
config({ path: resolve(__dirname, `../../.env.${env}`) });

export const APP_PORT = process.env.APP_PORT;
export const DB_URI = process.env.MONGO_URI;
export const LOG_LEVEL = process.env.LOG_LEVEL;
