#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const run_services_1 = require("./run-services");
const deploy_services_1 = require("./deploy-services");
const add_1 = require("./add");
const remove_1 = require("./remove");
const init_repository_1 = require("./init-repository");
const commands = {
    add: add_1.add,
    remove: remove_1.remove,
    init: init_repository_1.initRepo,
    run: run_services_1.startServices,
    deploy: deploy_services_1.deployServices,
};
const COMMANDS = ['run', 'add', 'remove', 'deploy'];
function getCommandAndArgs(argv) {
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
    const argv = yargs_1.default.options({
        name: { type: 'string' },
        clientId: { type: 'string' },
        apiKey: { type: 'string' },
    }).argv;
    const { command, args } = getCommandAndArgs(argv);
    commands[command](args);
}
run();
