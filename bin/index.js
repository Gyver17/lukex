#!/usr/bin/env node
import { existsSync } from 'fs';
import path from "node:path";
import minimist from "minimist";
import { Plop, run } from "plop";

import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const args = process.argv.slice(2);
const argv = minimist(args);
const localBinPathSegments = [process.cwd(), 'node_modules', 'lukex'];

const localBinExists = existsSync(path.join(...localBinPathSegments));

const __dirname = dirname(fileURLToPath(import.meta.url));

const localPath = localBinExists ? path.join(...localBinPathSegments, 'src/plopfile.js') : path.join(process.cwd(), 'src/plopfile.js');

const localPathExists = existsSync(localPath);

const configPath = localPathExists ? localPath : path.join(__dirname, '../src/plopfile.js');

Plop.prepare({
    cwd: argv.cwd,
    configPath,
    preload: argv.preload || [],
    completion: argv.completion
}, env => Plop.execute(env, run));