#!/usr/bin/env node

import prompts from 'prompts';
import ora from 'ora';
import chalk from 'chalk';
import fs from 'fs';
import request from 'request';
import { spawn } from 'child_process';
import { sync as commandExists } from 'command-exists';

type ArgsObject = {
  name?: string;
  apiKey?: string;
  clientId?: string;
};

const REQUIRED_COMMANDS = ['git', 'make'];

const spinner = ora('');

const longCommand = (command: string, text: string, onSuccess?: () => void, onData?: (text: string) => void) => {
  return new Promise((resolve, reject) => {
    const process = spawn(command, { shell: true });
    spinner.start(text);
    process.stdout.on('data', data => {
      if (onData) {
        onData(Buffer.from(data).toString());
      }
    });
    process.on('exit', () => {
      spinner.stop();
      onSuccess?.();
      resolve({});
    });
  });
};

function download(uri, filename, callback) {
  request.head(uri, (err, res, body) => {
    if (!err) {
      console.log('content-type:', res.headers['content-type']);
      console.log('content-length:', res.headers['content-length']);

      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    }
  });
}

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

  for (const command of REQUIRED_COMMANDS) {
    if (!commandExists(command)) {
      console.log(chalk.red('✖ ') + chalk.white.bold(`please install command: "${command}" to continue`));
      return;
    }
  }

  await longCommand(
    `git clone --depth 1 https://github.com/frontegg/opensaas ${projectName}`,
    chalk.white.bold('Fetching data'),
    () => console.log(chalk.green('✔ ') + chalk.white.bold('Finished fetching data')),
    console.log,
  );

  if (clientId && apiKey) {
    await longCommand(`echo #Don't include this file in the source control >> ${projectName}/frontend/.env`, '');
    await longCommand(`echo FRONTEGG_CLIENT_ID=${clientId} >> ${projectName}/frontend/.env`, '');
    await longCommand(`echo FRONTEGG_API_KEY=${apiKey} >> ${projectName}/frontend/.env`, '');

    download(
      `https://assets.frontegg.com/public-vendor-assets/${clientId}/assets/logo.png`,
      `${projectName}/frontend/public/images/logo.png`,
      () => console.log('done downloading logo'),
    );
  }

  await longCommand(
    `cd ${projectName} && npm i && npx lerna bootstrap`,
    chalk.white.bold('Installing packages, this might take few minutes'),
    () => console.log(chalk.green('✔ ') + chalk.white.bold('Finished installing packages')),
    console.info,
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
