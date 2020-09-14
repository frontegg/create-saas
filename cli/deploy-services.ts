#!/usr/bin/env node
// @ts-nocheck

import { spawnSync } from 'child_process';
const commandExists = require('command-exists').sync;

export async function deployServices(): Promise<void> {
  if (!commandExists('heroku')) {
    console.log('Please install heroku client');
    return;
  }
  runCommand('heroku', ['login'], { stdio: 'inherit' });
  if (!isAppCreated()) {
    runCommand('heroku', ['create'], { stdio: 'inherit' });
  }
  runCommand('git', ['push', 'heroku', 'master'], { stdio: 'inherit' });
}

function runCommand(command, args) {
  return spawnSync(command, args, { encoding : 'utf8', stdio: 'inherit' });
}

function isAppCreated() {
  const child = spawnSync('git remote -v | grep heroku', { encoding : 'utf8', shell: true });
  return child.stdout;
}
