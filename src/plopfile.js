export default function PlopGenerator(
	/** @type {import('plop').NodePlopAPI} */
	plop
) {
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
