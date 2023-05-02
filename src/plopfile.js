import path from 'path';
import { fileURLToPath } from 'url';
// eslint-disable-next-line no-unused-vars
// import { NodePlopAPI } from "plop";

/**
 * 
 * @param {NodePlopAPI} plop 
 */

export default function PlopGenerator(plop) {
	// create your generators here
	plop.setGenerator('controller', {
		description: 'application controller logic',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'module name please'
		}],
		actions: [{
			type: 'addMany',
			// templateFile: 'templates/module',
			templateFiles: "templates/module/**/*",
			destination: process.cwd() + '/test/{{name}}',
			base: 'templates/module'
		}]
	});
}
