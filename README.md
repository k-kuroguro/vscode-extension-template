# VSCode Extension Template

[![CI](https://github.com/k-kuroguro/vscode-extension-template/actions/workflows/main.yaml/badge.svg)](https://github.com/k-kuroguro/vscode-extension-template/actions/workflows/main.yaml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Setup

1. Change extension name in below files.
   - `package.json`
      - name
      - displayName
      - homepage
      - repository
      - bugs
   - `README.md`
      - title
      - badge of github actions
   - `src/constants.ts`
      - extensionName

2. Execute `npm i` for installing node modules and remake `package-lock.json`.

# Publish

Create new release on GitHub and publish to VSCode Marketplace automatically.
