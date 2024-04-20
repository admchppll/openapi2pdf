'use strict';

import { existsSync } from 'fs';
import { dirname } from 'path';

/**
 * Check whether a specific directory exists
 * @param {string} path 
 * @returns {boolean}
 */
export function checkDirectoryExists(path){
    const dir = dirname(path);
    return existsSync(dir);
}