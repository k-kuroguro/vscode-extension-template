# VSCode Extension Template

[![CI](https://github.com/k-kuroguro/vscode-extension-template/actions/workflows/test.yaml/badge.svg)](https://github.com/k-kuroguro/vscode-extension-template/actions/workflows/test.yaml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Setup

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
      - extensionDisplayName

2. Execute `npm i` for installing node modules and remake `package-lock.json`.

## Publish

To publish to Open VSX Registry and VS Code Marketplace, create a GitHub release.

Make sure to add the following secrets to the repository:
- `VS_MARKETPLACE_TOKEN`
- `OPEN_VSX_TOKEN`
