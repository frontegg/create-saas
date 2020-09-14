import { config } from 'dotenv';
import { resolve } from 'path';

const env = process.env.NODE_ENV || 'development';
config({ path: resolve(__dirname, `../../.env.${env}`) });

export const APP_PORT = process.env.APP_PORT;
export const METRICS_URL = process.env.METRICS_URL || '';
export const CONFIG_URL = process.env.CONFIG_URL || '';
export const LOG_LEVEL = process.env.LOG_LEVEL;
