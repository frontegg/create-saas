#!/usr/bin/env node

import { spawnSync } from 'child_process';
import { sync as commandExists } from 'command-exists';

export async function deployServices(): Promise<void> {
  if (!commandExists('heroku')) {
    console.log('Please install heroku client');
    return;
  }
  runCommand('heroku', ['login']);
  if (!isAppCreated()) {
    runCommand('heroku', ['create']);
  }
  runCommand('git', ['subtree', 'push', '--prefix', 'frontend', 'heroku', 'master']);
}

function runCommand(command: string, args: string[]) {
  return spawnSync(command, args, { encoding: 'utf8', stdio: 'inherit' });
}

function isAppCreated() {
  const child = spawnSync('git remote -v | grep heroku', { encoding: 'utf8', shell: true });
  return child.stdout;
}
