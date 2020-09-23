#!/usr/bin/env node

import shell from 'shelljs';
import fs from 'fs';
import prompts from 'prompts';

export async function removeService(args: string[]): Promise<void> {
  const [name] = args;
  if (fs.existsSync(name)) {
    const question: prompts.PromptObject = {
      type: 'select',
      name: 'shouldDelete',
      message: `are you sure you want to remove ${name}?`,
      choices: [
        { title: 'No', value: null },
        { title: 'Yes', value: 'yes' },
      ],
    };
    const { shouldDelete } = await prompts(question);

    if (shouldDelete === 'yes') {
      shell.exec(`rm -rf ${name}`, { silent: true });
    }
  } else {
    console.error(`dir: [${name}] does not exists`);
  }
}
