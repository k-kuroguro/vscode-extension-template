import * as vscode from 'vscode';
import { extensionDisplayName } from './constants';
import { OutputChannelLogger } from './logger';

export function activate(context: vscode.ExtensionContext) {
   const disposables: vscode.Disposable[] = [];

   const logger = new OutputChannelLogger();
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
