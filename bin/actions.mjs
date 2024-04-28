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
 return {
  spec: core.getInput('spec-file'),
  out: core.getInput('out')
 }
}

/**
 * Guard the application against preventable errors
 * @param {*} argv 
 */
function validationGuard(argv) {
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
  console.error(e.message);
  core.setFailed(e.message)
}
