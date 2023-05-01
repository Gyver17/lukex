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
			message: 'controller name please'
		}],
		actions: [{
			type: 'addMany',
			// templateFile: 'templates/module',
			templateFiles: "templates/module/**/*",
			destination: 'src/{{name}}',
			base: 'templates/module'
		}]
	});
}
