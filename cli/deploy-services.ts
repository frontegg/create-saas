#!/usr/bin/env node

import { spawnSync } from 'child_process';
import { sync as commandExists } from 'command-exists';
import fs from 'fs';

export async function deployServices(): Promise<void> {
  if (!commandExists('heroku')) {
    console.log('Please install heroku client');
    return;
  }
  runCommand('heroku', ['login']);
  if (!isAppCreated()) {
    runCommand('heroku', ['create']);
  }
  const data = fs.readFileSync('frontend/.env', { encoding: 'utf8', flag: 'r' });
  const clientID = data.match(/FRONTEGG_CLIENT_ID=([^\n\r]*)/)?.[0];
  const apiKey = data.match(/FRONTEGG_API_KEY=([^\n\r]*)/)?.[0];
  if (clientID && apiKey) {
    runCommand('heroku', ['config:set', clientID, apiKey]);
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
