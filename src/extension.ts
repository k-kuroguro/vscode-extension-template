import * as vscode from 'vscode';
import { extensionDisplayName } from './constants';
import { Logger } from './logger';

export function activate(context: vscode.ExtensionContext) {
   const disposables: vscode.Disposable[] = [];

   const logger = new Logger();
   disposables.push(logger);
   logger.info(`"${extensionDisplayName}" is now active!`);

   disposables.push(
      vscode.commands.registerCommand('extension-name.helloWorld', () => {
         vscode.window.showInformationMessage('Hello World!');
      })
   );

   context.subscriptions.push(...disposables);
}

export function deactivate() { }
