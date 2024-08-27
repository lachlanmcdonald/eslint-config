import globals from 'globals';
import pluginJs from '@eslint/js';
import { rules } from './index.js';
import stylistic from '@stylistic/eslint-plugin';

export default [
	pluginJs.configs.recommended,
	{
		rules,
		plugins: {
			'@stylistic': stylistic,
		},
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.node,
			},
		},
	},
];
