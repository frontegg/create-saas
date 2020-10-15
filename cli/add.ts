#!/usr/bin/env node

import chalk from 'chalk';
import { addService } from './add-service';

export async function add(args: string[]): Promise<void> {
  const [command, ...params] = args;
  switch (args[0]) {
    case 'service':
      addService(params);
      break;
    default:
      console.log(chalk.red('✖ ') + chalk.white.bold('command ') + chalk.blue.bold(command) + chalk.white.bold(' not found'));
  }
}
