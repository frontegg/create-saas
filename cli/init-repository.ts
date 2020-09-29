#!/usr/bin/env node

import prompts from 'prompts';
import ora from 'ora';
import chalk from 'chalk';
import { spawn } from 'child_process';
const spinner = ora('');

const questions: prompts.PromptObject[] = [
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
  },
  {
    type: 'select',
    name: 'template',
    message: 'Choose dashboard template',
    choices: [
      { title: 'Airframe', value: 'airframe' },
      { title: 'Lean', value: 'lean' },
    ],
  },
];

const longCommand = (command: string, text: string, onSuccess: () => void) => {
  return new Promise((resolve, reject) => {
    const process = spawn(command, { shell: true });
    spinner.start(text);
    process.on('exit', () => {
      spinner.stop();
      onSuccess();
      resolve();
    });
  });
};

export async function initRepo(name: string): Promise<void> {
  let projectName = name || '';
  while (!projectName.length) {
    const response = await prompts({
      type: 'text',
      name: 'project',
      message: 'Choose project name',
    });
    projectName = response.project;
  }

  const { sourceControl, user, password, template } = await prompts(questions);

  if (sourceControl && !(user && password)) {
    console.log(chalk.red('✖ ') + chalk.white.bold('User and password must be supplied'));
    return;
  }

  await longCommand(`git clone https://github.com/frontegg/create-saas ${projectName}`, chalk.white.bold('Fetching data'), () =>
    console.log(chalk.green('✔ ') + chalk.white.bold('Finished fetching data')),
  );

  await longCommand(`cd ${projectName} && mv -v frontend/templates/${template} . && rm -rf frontend/templates && mv -v ${template}/* frontend && rmdir ${template}`, chalk.white.bold('Copy template'), () =>
    console.log(chalk.green('✔ ') + chalk.white.bold('Finished copying template')),
  );

  await longCommand(`cd ${projectName} && npm i && npx lerna bootstrap`, chalk.white.bold('Installing packages'), () =>
    console.log(chalk.green('✔ ') + chalk.white.bold('Finished installing packages')),
  );

  await longCommand(`make provision`, chalk.white.bold('Calling docker compose'), () =>
    console.log(chalk.green('✔ ') + chalk.white.bold('Finished calling docker compose')),
  );
}
