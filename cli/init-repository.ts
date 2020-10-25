#!/usr/bin/env node

import prompts from 'prompts';
import ora from 'ora';
import chalk from 'chalk';
import { spawn } from 'child_process';
import { sync as commandExists } from 'command-exists';

type ArgsObject = {
  name?: string;
  apiKey?: string;
  clientId?: string;
};

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

export async function initRepo(args: ArgsObject): Promise<void> {
  const { name, clientId, apiKey } = args;
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

  await longCommand(
    `git clone --depth 1 https://github.com/frontegg/opensaas ${projectName}`,
    chalk.white.bold('Fetching data'),
    () => console.log(chalk.green('✔ ') + chalk.white.bold('Finished fetching data')),
  );

  if (clientId && apiKey) {
    await longCommand(`echo FRONTEGG_CLIENT_ID=${clientId} >> ${projectName}/backend/api-gw/.env.development`, '', () => {
      return;
    });
    await longCommand(`echo FRONTEGG_API_KEY=${apiKey} >> ${projectName}/backend/api-gw/.env.development`, '', () => {
      return;
    });
  }

  await longCommand(
    `cd ${projectName} && npm i && npx lerna bootstrap`,
    chalk.white.bold('Installing packages, this might take few minutes'),
    () => console.log(chalk.green('✔ ') + chalk.white.bold('Finished installing packages')),
  );

  if (commandExists('docker')) {
    await longCommand('make provision', chalk.white.bold('Calling docker compose'), () =>
      console.log(chalk.green('✔ ') + chalk.white.bold('Finished calling docker compose')),
    );
    await longCommand('make migrate', chalk.white.bold('Running migrations'), () =>
      console.log(chalk.green('✔ ') + chalk.white.bold('Finished running migrations')),
    );
  } else {
    console.log(chalk.red('✖ ') + chalk.white.bold('In order to get the most of Open SaaS, docker command is needed'));
  }

  console.log(chalk.white.bold('👏👏👏 project installed successfully 👏👏👏\n'));
  console.log(chalk.white.bold('To start follow this:'));
  console.log(chalk.white.blueBright(`  cd ${projectName}`));
  console.log(chalk.white.blueBright('  npm run start'));
}
