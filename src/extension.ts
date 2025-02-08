import * as vscode from 'vscode';
import { extensionDisplayName } from './constants';
import { getLogger, initializeLogger } from './logger';

export function activate(context: vscode.ExtensionContext) {
   const disposables: vscode.Disposable[] = [];

   const channel = vscode.window.createOutputChannel(extensionDisplayName, { log: true });
   disposables.push(initializeLogger(channel));

   const logger = getLogger();
   logger.info(`"${extensionDisplayName}" is now active!`);

   disposables.push(
      vscode.commands.registerCommand('extension-name.helloWorld', () => {
         vscode.window.showInformationMessage('Hello World!');
      })
   );

   context.subscriptions.push(...disposables);
}

export function deactivate() { }
