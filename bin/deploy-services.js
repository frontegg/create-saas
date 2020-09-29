#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployServices = void 0;
const child_process_1 = require("child_process");
const command_exists_1 = require("command-exists");
const chalk_1 = __importDefault(require("chalk"));
function deployServices() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!command_exists_1.sync('heroku')) {
            console.log(chalk_1.default.red('✖ ') + chalk_1.default.white.bold('Please install heroku client'));
            return;
        }
        if (herokuLogin() === 'failure') {
            console.log(chalk_1.default.red('✖ ') + chalk_1.default.white.bold('Command failed'));
            return;
        }
        if (!isAppCreated()) {
            runCommand('heroku', ['create']);
        }
        runCommand('git', ['push', 'heroku', 'master']);
    });
}
exports.deployServices = deployServices;
function runCommand(command, args) {
    return child_process_1.spawnSync(command, args, { encoding: 'utf8', stdio: 'inherit' });
}
function isAppCreated() {
    const child = child_process_1.spawnSync('git remote -v | grep heroku', { encoding: 'utf8', shell: true });
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
