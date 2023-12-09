const index = require('./index');

module.exports = {
	...index,
	root: true,
	env: {
		node: true,
	},
	parserOptions: {
		script: 'module',
		ecmaVersion: 'latest',
	},
};
