#!/usr/bin/env node

import yargs from 'yargs';
import { startServices } from './run-services';
import { deployServices } from './deploy-services';
import { add } from './add';
import { remove } from './remove';
import { initRepo } from './init-repository';

const commands: any = {
  add,
  remove,
  init: initRepo,
  run: startServices,
  deploy: deployServices,
};

const COMMANDS = ['run', 'add', 'remove', 'deploy'];

function getCommandAndArgs(argv: any) {
  const args = argv._;
  if (COMMANDS.includes(args[0])) {
    return { command: args[0], args: args.slice(1) };
  }

  const { name, clientId, apiKey, host } = argv;
  return {
    command: 'init',
    args: {
      clientId,
      apiKey,
      host,
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
