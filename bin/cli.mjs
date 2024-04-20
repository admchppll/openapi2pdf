#!/usr/bin/env node
'use strict';


import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { checkDirectoryExists } from '../src/utils/filesystem.mjs';
import { generatePdf } from '../src/main.mjs';

const argv = yargs(hideBin(process.argv))
  .option('spec', {
    alias: 's',
    type: 'string',
    description: 'openapi spec file to convert',
    requiresArg: true,
    demandOption: true,
  })
  .option('out', { alias: 'o', type: 'string', description: 'output file', requiresArg: true, demandOption: true })
  .option('primaryColor', { type: 'string', description: 'primary color to use in document', requiresArg: true })
  .help().argv;

/**
 * Guard the application against preventable errors
 * @param {*} argv 
 */
function validationGuard(argv) {
  if(!checkDirectoryExists(argv.out))
    throw new Error("Output directory does not exist!");
}

try {
  validationGuard(argv);
  generatePdf(argv);
}
catch(e) {
  console.error(e.message);
}
