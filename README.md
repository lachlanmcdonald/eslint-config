# @lmcd/eslint-config

[![npm version](https://badge.fury.io/js/@lmcd%2Feslint-config.svg)](https://badge.fury.io/js/@lmcd%2Feslint-config)
![License](https://img.shields.io/github/license/lachlanmcdonald/eslint-config)

> Opinionated [ESLint](https://eslint.org/) configuration.

Remove any old package:

```sh
pnpm rm @lachlanmcdonald/eslint-config-eslint
```

Install latest version:

```sh
pnpm i -D @lmcd/eslint-config
pnpm i -D @stylistic/eslint-plugin
```

Add to `.eslintrc.json` or similar:

```json
{
	"extends": [
		"@lmcd/eslint-config"
	],
	"plugins": [
		"@stylistic"
	]
}
```

Additionally:

```json
{
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	}
}
```

In `.vscode/settings.json`:

```json
{
	"editor.formatOnSave": true
}
```
