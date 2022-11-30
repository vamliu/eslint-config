# @vamliu/eslint-config
Settings of ESLint and Prettier for my projects
## Usage
### Install
```
pnpm add -D eslint @vamliu/eslint-config
```
### Config ```.eslintrc```
```
{
  "extends": "@vamliu"
}
```
### Config VS Code auto fix
Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create ```.vscode/settings.json```
```
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
### License
MIT License © 2022-PRESENT [Vam Liu](https://github.com/vamliu)
