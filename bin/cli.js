#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const run_services_1 = require("./run-services");
const deploy_services_1 = require("./deploy-services");
const add_service_1 = require("./add-service");
const remove_service_1 = require("./remove-service");
const init_repository_1 = require("./init-repository");
const commands = {
    run: run_services_1.startServices,
    deploy: deploy_services_1.deployServices,
    init: init_repository_1.initRepo,
    add: add_service_1.addService,
    remove: remove_service_1.removeService,
};
const COMMANDS = ['run', 'add', 'remove', 'deploy'];
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
