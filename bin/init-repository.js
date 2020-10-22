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
const command_exists_1 = require("command-exists");
const spinner = ora_1.default('');
const questions = [
    {
        type: 'select',
        name: 'saasEssentials',
        message: 'Include SaaS essentials',
        choices: [
            { title: 'Yes', value: 'yes' },
            { title: 'Decide later', value: 'later' },
        ],
    },
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
        yield prompts_1.default(questions);
        yield longCommand(`git clone --depth 1 https://github.com/frontegg/opensaas ${projectName}`, chalk_1.default.white.bold('Fetching data'), () => console.log(chalk_1.default.green('✔ ') + chalk_1.default.white.bold('Finished fetching data')));
        yield longCommand(`cd ${projectName} && npm i && npx lerna bootstrap`, chalk_1.default.white.bold('Installing packages, this might take few minutes'), () => console.log(chalk_1.default.green('✔ ') + chalk_1.default.white.bold('Finished installing packages')));
        if (command_exists_1.sync('docker')) {
            yield longCommand('make provision', chalk_1.default.white.bold('Calling docker compose'), () => console.log(chalk_1.default.green('✔ ') + chalk_1.default.white.bold('Finished calling docker compose')));
            yield longCommand('make migrate', chalk_1.default.white.bold('Running migrations'), () => console.log(chalk_1.default.green('✔ ') + chalk_1.default.white.bold('Finished running migrations')));
        }
        else {
            console.log(chalk_1.default.red('✖ ') + chalk_1.default.white.bold('In order to get the most of Open SaaS, docker command is needed'));
        }
        console.log(chalk_1.default.white.bold('👏👏👏 project installed successfully 👏👏👏\n'));
        console.log(chalk_1.default.white.bold('To start follow this:'));
        console.log(chalk_1.default.white.blueBright(`  cd ${projectName}`));
        console.log(chalk_1.default.white.blueBright('  npm run start'));
    });
}
exports.initRepo = initRepo;
