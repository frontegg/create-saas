#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const run_services_1 = require("./run-services");
const add_1 = require("./add");
const remove_1 = require("./remove");
const init_repository_1 = require("./init-repository");
const commands = {
    add: add_1.add,
    remove: remove_1.remove,
    init: init_repository_1.initRepo,
    run: run_services_1.startServices,
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
    const argv = yargs_1.default.options({
        name: { type: 'string' },
    }).argv;
    const { command, args } = getCommandAndArgs(argv);
    commands[command](args);
}
run();
