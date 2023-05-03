export default function PlopGenerator(
	/** @type {import('plop').NodePlopAPI} */
	plop,
	s,
	a
) {

	const rootPath = 'test';

	plop.setWelcomeMessage('Welcome to the Lukex generator!');

	// create your generators here
	plop.setGenerator('mo-crud', {
		description: 'Generate a new module with CRUD operations',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'module name please',
		}, {
			type: 'input',
			name: 'path',
			message: 'module path please',
			default: '/',
		}],
		actions: [{
			type: 'addMany',
			// templateFile: 'templates/module',
			templateFiles: "templates/module-crud/**/*",
			destination: process.cwd() + `/${rootPath}` + '/{{path}}/{{name}}',
			base: 'templates/module-crud'
		}]
	});

	plop.setGenerator('services', {
		description: 'application controller logic',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'module name please',
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
