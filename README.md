# qUid Frontend

qUid Frontend App is built with Next.js + TypeScript + ESLint.

# Get started

```
# Install dependencies
yarn

# Start dev server
yarn dev

# Start tests (or yarn test --watch for watch mode)
yarn test

# Lint (the dot is important)
yarn lint .

# If we want to build
yarn build
```

# Technical choices

- ESLint and Prettier are integrated with VSCode out of the box (you just need VSCode's ESLint plugin).
- Prettier is integrated with ESLint, so you do not need the Prettier plugin.
- Improved lint-staged configuration: linting will only happen on staged files, not all files.
- Because of Husky settings, Typescript types and linting are checked before each commit. If for some reason you want to ignore and commit anyway you can use the `--no-verify` flag. (ex.: `git commit --no-verify -m "Updated README.md"`)

For automatic ES-Lint corrections on VSCode you can add this setting on you environment:

```
// .vscode/settings.json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

For the same in Webstorm follow these instructions:
`https://www.jetbrains.com/help/webstorm/eslint.html#ws_eslint_configure_run_eslint_on_save`
