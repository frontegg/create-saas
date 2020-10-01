#!/usr/bin/env node

import yargs from 'yargs';
import { startServices } from './run-services';
import { addService } from './add-service';
import { removeService } from './remove-service';
import { initRepo } from './init-repository';

const commands: any = {
  run: startServices,
  init: initRepo,
  add: addService,
  remove: removeService,
};

const COMMANDS = ['run', 'add', 'remove'];

function getCommandAndArgs(argv: any) {
  const args = argv._;
  if (COMMANDS.includes(args[0])) {
    return { command: args[0], args: args.slice(1) };
  }

  return { command: 'init', args: argv.name || args[0] };
}

function run() {
  const argv = yargs.options({
    name: { type: 'string' },
  }).argv;

  const { command, args } = getCommandAndArgs(argv);

  commands[command](args);
}

run();
