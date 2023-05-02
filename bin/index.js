import { existsSync } from 'fs';
import path from "node:path";
import minimist from "minimist";
import { Plop, run } from "plop";

const args = process.argv.slice(2);
const argv = minimist(args);
const localBinPathSegments = [process.cwd(), 'node_modules', 'lukex'];

const localBinExists = existsSync(path.join(...localBinPathSegments));

const configPath = localBinExists ? path.join(...localBinPathSegments, 'src/plopfile.js') : path.join(process.cwd(), 'src/plopfile.js');

console.log('configPath', configPath);

Plop.prepare({
    cwd: argv.cwd,
    configPath,
    preload: argv.preload || [],
    completion: argv.completion
}, env => Plop.execute(env, run));