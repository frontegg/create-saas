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
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeService = void 0;
const shell = require("shelljs");
const fs = require("fs");
const prompts = require("prompts");
function removeService(args) {
    return __awaiter(this, void 0, void 0, function* () {
        const [name] = args;
        if (fs.existsSync(name)) {
            const question = {
                type: 'select',
                name: 'shouldDelete',
                message: `are you sure you want to remove ${name}?`,
                choices: [
                    { title: 'No', value: null },
                    { title: 'Yes', value: 'yes' },
                ],
            };
            const { shouldDelete } = yield prompts(question);
            if (shouldDelete === 'yes') {
                shell.exec(`rm -rf ${name}`, { silent: true });
            }
        }
        else {
            console.error(`dir: [${name}] does not exists`);
        }
    });
}
exports.removeService = removeService;
