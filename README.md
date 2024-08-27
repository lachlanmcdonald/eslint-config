# @lmcd/eslint-config

[![npm version](https://badge.fury.io/js/@lmcd%2Feslint-config.svg)](https://badge.fury.io/js/@lmcd%2Feslint-config)
![License](https://img.shields.io/github/license/lachlanmcdonald/eslint-config)

> Opinionated [ESLint](https://eslint.org/) configuration.

Remove any old packages:

```sh
pnpm rm @lachlanmcdonald/eslint-config-eslint
```

Install latest version:

```sh
pnpm i -D eslint
pnpm i -D globals
pnpm i -D @eslint/js
pnpm i -D @stylistic/eslint-plugin
pnpm i -D @lmcd/eslint-config
```

Add to `eslint.config.js` or similar:

```js
import globals from 'globals';
import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { rules } from '@lmcd/eslint-config';

export default [
	pluginJs.configs.recommended,
	{
		rules,
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.node,
				...globals.browser,
			},
		},
        ignores: ['dist/*'],
        plugins: {
            '@stylistic': stylistic,
        },
	},
];
```
