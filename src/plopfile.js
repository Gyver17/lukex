export default function PlopGenerator(
	/** @type {import('plop').NodePlopAPI} */
	plop,
	s,
	a
) {

	const rootPath = 'src';

	plop.setWelcomeMessage('Welcome to the Lukex generator!');

	// create your generators here
	plop.setGenerator('mo', {
		description: 'Generate a new module',
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
			templateFiles: "templates/module/**/*",
			destination: process.cwd() + `/${rootPath}` + '/{{path}}/{{name}}',
			base: 'templates/module'
		}]
	});

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
			templateFiles: "templates/module-crud/**/*",
			destination: process.cwd() + `/${rootPath}` + '/{{path}}/{{name}}',
			base: 'templates/module-crud'
		}]
	});

	plop.setGenerator('co-class', {
		description: 'Generate a new class controller',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'controller name please',
		}, {
			type: 'input',
			name: 'path',
			message: 'controller path please',
			default: '/',
		}],
		actions: [{
			type: 'addMany',
			templateFiles: "templates/controllers/class/**/*",
			destination: process.cwd() + `/${rootPath}` + '/{{path}}',
			base: 'templates/controllers/class'
		}]
	})

	plop.setGenerator('co-fn', {
		description: 'Generate a new function controller',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'controller name please',
		}, {
			type: 'input',
			name: 'path',
			message: 'controller path please',
			default: '/',
		}],
		actions: [{
			type: 'addMany',
			templateFiles: "templates/controllers/function/**/*",
			destination: process.cwd() + `/${rootPath}` + '/{{path}}',
			base: 'templates/controllers/function'
		}]
	})

	plop.setGenerator('se', {
		description: 'Generate a new service',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'service name please',
		}, {
			type: 'input',
			name: 'path',
			message: 'service path please',
			default: '/',
		}],
		actions: [{
			type: 'addMany',
			templateFiles: "templates/services/**/*",
			destination: process.cwd() + `/${rootPath}` + '/{{path}}',
			base: 'templates/services'
		}]
	})

	plop.setGenerator('model', {
		description: 'Generate a new model',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'model name please',
		}, {
			type: 'input',
			name: 'path',
			message: 'model path please',
			default: '/',
		}],
		actions: [{
			type: 'addMany',
			templateFiles: "templates/models/**/*",
			destination: process.cwd() + `/${rootPath}` + '/{{path}}',
			base: 'templates/models'
		}]
	})
}
