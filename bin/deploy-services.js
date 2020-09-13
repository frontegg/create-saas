#!/usr/bin/env node
"use strict";
// @ts-nocheck
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployServices = void 0;
const child_process_1 = require("child_process");
const commandExists = require('command-exists').sync;
function deployServices() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!commandExists('heroku')) {
            console.log('Please install heroku client');
            return;
        }
        runCommand('heroku', ['login'], { stdio: 'inherit' });
        if (!isAppCreated()) {
            runCommand('heroku', ['create'], { stdio: 'inherit' });
        }
        runCommand('git', ['push', 'heroku', 'master'], { stdio: 'inherit' });
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
