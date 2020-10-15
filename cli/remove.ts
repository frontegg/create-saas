#!/usr/bin/env node

import chalk from 'chalk';
import { removeService } from './remove-service';

export async function remove(args: string[]): Promise<void> {
  const [command, ...params] = args;
  switch (args[0]) {
    case 'service':
      removeService(params);
      break;
    default:
      console.log(chalk.red('✖ ') + chalk.white.bold('command ') + chalk.blue.bold(command) + chalk.white.bold(' not found'));
  }
}
