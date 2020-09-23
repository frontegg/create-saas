#!/usr/bin/env node

import shell from 'shelljs';
import prompts from 'prompts';

export async function addService(args: string[]): Promise<void> {
  const [name] = args;
  const question: prompts.PromptObject = {
    type: 'select',
    name: 'service',
    message: 'Choose db',
    choices: [
      { title: 'PostgreSQL', value: 'config-service' },
      { title: 'MongoDB', value: 'metrics-service' },
    ],
  };
  const { service } = await prompts(question);
  shell.exec(`cp -r ./backend/services/${service} ./backend/services/${name}`, { silent: true });
}
