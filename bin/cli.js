#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const run_services_1 = require("./run-services");
const init_repository_1 = require("./init-repository");
const commands = {
    run: run_services_1.startServices,
    init: init_repository_1.initRepo,
};
const COMMANDS = ['run', 'add', 'remove'];
function getCommandAndArgs(argv) {
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
