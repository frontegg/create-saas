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
exports.addService = void 0;
const shell = require("shelljs");
const prompts = require("prompts");
function addService(args) {
    return __awaiter(this, void 0, void 0, function* () {
        const [name] = args;
        const question = {
            type: 'select',
            name: 'service',
            message: 'Choose db',
            choices: [
                { title: 'PostgreSQL', value: 'config-service' },
                { title: 'MongoDB', value: 'metrics-service' },
            ],
        };
        const { service } = yield prompts(question);
        shell.exec(`cp -r ./backend/services/${service} ./backend/services/${name}`, { silent: true });
    });
}
exports.addService = addService;
