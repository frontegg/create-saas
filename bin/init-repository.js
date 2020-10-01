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
exports.initRepo = void 0;
const prompts_1 = __importDefault(require("prompts"));
const ora_1 = __importDefault(require("ora"));
const chalk_1 = __importDefault(require("chalk"));
const child_process_1 = require("child_process");
const spinner = ora_1.default('');
const questions = [
    {
        type: 'select',
        name: 'sourceControl',
        message: 'Choose source control',
        choices: [
            { title: 'Decide later', value: null },
            { title: 'Github', value: 'github' },
            { title: 'Bitbucket', value: 'bitbucket' },
            { title: 'Gitlab', value: 'gitlab' },
        ],
    },
    {
        type: prev => (prev ? 'text' : null),
        name: 'user',
        message: prev => `Insert ${prev} user`,
    },
    {
        type: prev => (prev ? 'password' : null),
        name: 'password',
        message: 'Insert password',
    },
    {
        type: 'select',
        name: 'saasEssentials',
        message: 'Include SaaS essentials',
        choices: [
            { title: 'Decide later', value: 'later' },
            { title: 'Yes', value: 'yes' },
        ],
    }
];
const longCommand = (command, text, onSuccess) => {
    return new Promise((resolve, reject) => {
        const process = child_process_1.spawn(command, { shell: true });
        spinner.start(text);
        process.on('exit', () => {
            spinner.stop();
            onSuccess();
            resolve();
        });
    });
};
function initRepo(name) {
    return __awaiter(this, void 0, void 0, function* () {
        let projectName = name || '';
        while (!projectName.length) {
            const response = yield prompts_1.default({
                type: 'text',
                name: 'project',
                message: 'Choose project name',
            });
            projectName = response.project;
        }
        const { sourceControl, user, password } = yield prompts_1.default(questions);
        if (sourceControl && !(user && password)) {
            console.log(chalk_1.default.red('✖ ') + chalk_1.default.white.bold('User and password must be supplied'));
            return;
        }
        yield longCommand(`git clone https://github.com/frontegg/create-saas ${projectName}`, chalk_1.default.white.bold('Fetching data'), () => console.log(chalk_1.default.green('✔ ') + chalk_1.default.white.bold('Finished fetching data')));
        yield longCommand(`cd ${projectName} && npm i && npx lerna bootstrap`, chalk_1.default.white.bold('Installing packages'), () => console.log(chalk_1.default.green('✔ ') + chalk_1.default.white.bold('Finished installing packages')));
        yield longCommand(`make provision`, chalk_1.default.white.bold('Calling docker compose'), () => console.log(chalk_1.default.green('✔ ') + chalk_1.default.white.bold('Finished calling docker compose')));
    });
}
exports.initRepo = initRepo;
