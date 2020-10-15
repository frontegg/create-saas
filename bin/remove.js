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
exports.remove = void 0;
const chalk_1 = __importDefault(require("chalk"));
const remove_service_1 = require("./remove-service");
function remove(args) {
    return __awaiter(this, void 0, void 0, function* () {
        const [command, ...params] = args;
        switch (args[0]) {
            case 'service':
                remove_service_1.removeService(params);
                break;
            default:
                console.log(chalk_1.default.red('✖ ') + chalk_1.default.white.bold('command ') + chalk_1.default.blue.bold(command) + chalk_1.default.white.bold(' not found'));
        }
    });
}
exports.remove = remove;
