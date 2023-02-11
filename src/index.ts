import fs from 'fs';
import parseCss from './parseCss';
// import chalk from 'chalk';

export default (filename: string) => {
  const fileContent = fs.readFileSync(filename).toString();

  const output: Record<string, string> = {};
  parseCss(fileContent).forEach(
    (keyVal: Record<string, string>) => (output[keyVal.key] = keyVal.value)
  );
  return output;
};
