#!/usr/bin/env node

import prompts from 'prompts';
import ora from 'ora';
import chalk from 'chalk';
import { spawn } from 'child_process';
import { sync as commandExists } from 'command-exists';

const spinner = ora('');

const questions: prompts.PromptObject[] = [
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

  await prompts(questions);

  await longCommand(`git clone https://github.com/frontegg/create-saas ${projectName}`, chalk.white.bold('Fetching data'), () =>
    console.log(chalk.green('✔ ') + chalk.white.bold('Finished fetching data')),
  );

  await longCommand(
    `cd ${projectName} && npm i && npx lerna bootstrap`,
    chalk.white.bold('Installing packages, this might take few minutes'),
    () => console.log(chalk.green('✔ ') + chalk.white.bold('Finished installing packages')),
  );

  if (commandExists('docker')) {
    await longCommand('make provision', chalk.white.bold('Calling docker compose'), () =>
      console.log(chalk.green('✔ ') + chalk.white.bold('Finished calling docker compose')),
    );
  } else {
    console.log(chalk.red('✖ ') + chalk.white.bold('In order to get the most of Create SaaS, docker command is needed'));
  }

  console.log(chalk.white.bold('👏👏👏 project installed successfully 👏👏👏\n'));
  console.log(chalk.white.bold('To start follow this:'));
  console.log(chalk.white.blueBright(`  cd ${projectName}`));
  console.log(chalk.white.blueBright('  npm run start'));
}
