import chalk from 'chalk';
import { program } from 'commander';
import fs from 'fs';
import parseFile from './parseFile';

program
  .showHelpAfterError()
  .argument('<path>', 'path to css file')
  .option('-o, --outputFile <honorific>', 'output path')
  .action((filePath: string, options: any) => {
    const output = parseFile(filePath);

    // Write to file if output path is provided
    if (options.output) {
      fs.writeFileSync(options.output, JSON.stringify(output));
      console.log('Output written to', chalk.bold(`${options.output}.`));
    } else {
      console.log(output);
    }

    console.log(
      '\n',
      chalk.bold('✨', Object.values(output).length),
      chalk.green('CSS Variables Found'),
      '✨\n'
    );
  });

program.parse();
