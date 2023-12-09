# @lmcd/eslint-config

[![npm version](https://badge.fury.io/js/@lmcd%2Feslint-config.svg)](https://badge.fury.io/js/@lmcd%2Feslint-config)
[![License](https://img.shields.io/npm/l/@lmcd/eslint-config)](https://github.com/lachlanmcdonald/eslint-config/blob/master/LICENSE)

> Opinionated [ESLint](https://eslint.org/) configuration.

Remove any old package:

```sh
pnpm rm @lachlanmcdonald/eslint-config-eslint
```

Install latest version:

```sh
pnpm i -D @lmcd/eslint-config
pnpm i -D @typescript-eslint
```

Add to `.eslintrc.json` or similar:

```json
{
    "extends": [
        "@lmcd/eslint-config",
    ],
    "plugins": [
        "@stylistic",
    ],
}
```
