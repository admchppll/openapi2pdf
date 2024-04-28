#!/usr/bin/env node
'use strict';

import * as core from '@actions/core';

import { checkDirectoryExists } from '../src/utils/filesystem.mjs';
import { generatePdf } from '../src/main.mjs';

/**
 * Gets the inputs for the pdf generation
 * @returns {object}  The argv object required for generatePdf
 */
function getInputs() {
  const spec = core.getInput('spec');
  const output = core.getInput('out');

  if(!spec)
    core.warning('spec param was not set');

  if(!output)
    core.warning('out param was not set')
  
  return {
    spec: spec,
    out: output
  }
}

/**
 * Guard the application against preventable errors
 * @param {*} argv 
 */
function validationGuard(argv) {
  if(argv.out == '' || argv.spec == '')
    throw new Error("Require arguements not set (spec, output")

  if(!checkDirectoryExists(argv.out))
    throw new Error("Output directory does not exist!");

}

try {
  const argv = getInputs();
  validationGuard(argv);
  generatePdf(argv);
  core.setOutput("output-file", argv.out);
}
catch(e) {
  core.setFailed(e.message);
  console.error(e.message);
}
