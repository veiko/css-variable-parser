import chalk from 'chalk';
import minimist from 'minimist';
import cssVariableParser from './index';

const { program } = require('commander');

program
  .showHelpAfterError()
  .argument('<path>', 'path to css file')
  .option('-o, --output <honorific>', 'output path')
  .action((filePath: string, options: any, command: any) => {
    if (options.debug) {
      console.error('Called %s with options %o', command.name(), options);
    }
    const title = options.title ? `${options.title} ` : '';
    console.log('key', cssVariableParser(filePath));
  });

program.parse();
