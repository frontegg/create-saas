#!/usr/bin/env node

import * as shell from 'shelljs';

export async function startServices(): Promise<void> {
  shell.exec('npm run provision', { silent: true });
  shell.exec('npm run start');
}
