#!/usr/bin/env node

import yargs from 'yargs';
import { startServices } from './run-services';
import { add } from './add';
import { remove } from './remove';
import { initRepo } from './init-repository';

const commands: any = {
  add,
  remove,
  init: initRepo,
  run: startServices,
};

const COMMANDS = ['run', 'add', 'remove'];

function getCommandAndArgs(argv: any) {
  const args = argv._;
  if (COMMANDS.includes(args[0])) {
    return { command: args[0], args: args.slice(1) };
  }

  const { name, clientId, apiKey } = argv;
  return {
    command: 'init',
    args: {
      clientId,
      apiKey,
      name: name || args[0],
    },
  };
}

function run() {
  const argv = yargs.options({
    name: { type: 'string' },
    clientId: { type: 'string' },
    apiKey: { type: 'string' },
  }).argv;

  const { command, args } = getCommandAndArgs(argv);

  commands[command](args);
}

run();
