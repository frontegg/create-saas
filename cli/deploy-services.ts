#!/usr/bin/env node

import { spawnSync } from 'child_process';
import { sync as commandExists } from 'command-exists';
import chalk from 'chalk';

export async function deployServices(): Promise<void> {
  if (!commandExists('heroku')) {
    console.log(chalk.red('✖ ') + chalk.white.bold('Please install heroku client'));
    return;
  }
  if (herokuLogin() === 'failure') {
    console.log(chalk.red('✖ ') + chalk.white.bold('Command failed'));
    return;
  }
  if (!isAppCreated()) {
    runCommand('heroku', ['create']);
  }
  runCommand('git', ['push', 'heroku', 'master']);
}

function runCommand(command: string, args: string[]) {
  return spawnSync(command, args, { encoding: 'utf8', stdio: 'inherit' });
}

function isAppCreated() {
  const child = spawnSync('git remote -v | grep heroku', { encoding: 'utf8', shell: true });
  return child.stdout;
}

function isHerokuLoggedIn() {
  const { status } = runCommand('heroku', ['auth:whoami']);
  return status === 0;
}

function herokuLogin() {
  if (isHerokuLoggedIn()) {
    return 'success';
  }
  const { status } = runCommand('heroku', ['login']);
  return status !== 0 ? 'failure' : 'success';
}
