# @lmcd/eslint-config

[![npm version](https://badge.fury.io/js/@lmcd%2Feslint-config.svg)](https://badge.fury.io/js/@lmcd%2Feslint-config) ![License](https://img.shields.io/github/license/lachlanmcdonald/eslint-config)

> An opinionated [ESLint](https://eslint.org/) configuration.

Remove any old packages:

```sh
pnpm rm @lachlanmcdonald/eslint-config-eslint
```

Install latest version:

```sh
pnpm i -D @lmcd/eslint-config
```

Install [ESLint](https://eslint.org/) dependencies:

```
pnpm i -D eslint globals @eslint/js @stylistic/eslint-plugin
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
        plugins: {
            '@stylistic': stylistic,
        },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.node,
                ...globals.browser,
            },
        },
    },
];
```
