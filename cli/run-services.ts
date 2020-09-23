#!/usr/bin/env node

import shell from 'shelljs';

export async function startServices(): Promise<void> {
  shell.exec('npm run provision', { silent: true });
  shell.exec('npm run start');
}
