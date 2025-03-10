import * as vscode from 'vscode';
import { extensionName } from './constants';

export class Config {
   private _onDidChange: vscode.EventEmitter<Config.ConfigItems> = new vscode.EventEmitter<Config.ConfigItems>();
   readonly onDidChange: vscode.Event<Config.ConfigItems> = this._onDidChange.event;

   private static instance: Config = new Config();
   private workspaceConfig: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration(extensionName);
   private disposables: vscode.Disposable[] = [this._onDidChange];

   private constructor() {
      this.disposables.push(
         vscode.workspace.onDidChangeConfiguration((e) => {
            this.loadWorkspaceConfig();
            const changedItems = Object.values(Config.ConfigItem).filter((item) => e.affectsConfiguration(`${extensionName}.${item}`));
            if (changedItems.length) this._onDidChange.fire(changedItems);
         }),
      );
   }

   static getInstance(): Config {
      return Config.instance;
   }

   loadWorkspaceConfig(): void {
      this.workspaceConfig = vscode.workspace.getConfiguration(extensionName);
   }

   dispose(): void {
      for (const disposable of this.disposables) {
         disposable.dispose();
      }
   }

   get useWarning(): boolean {
      return this.workspaceConfig.get(Config.ConfigItem.UseWarning) ?? false;
   }

   set useWarning(useWarning: boolean) {
      this.workspaceConfig.update(Config.ConfigItem.UseWarning, useWarning, vscode.ConfigurationTarget.Global);
      this._onDidChange.fire([Config.ConfigItem.UseWarning]);
   }
}

export namespace Config {
   export const ConfigItem = {
      UseWarning: 'useWarning',
   } as const;
   export type ConfigItem = (typeof ConfigItem)[keyof typeof ConfigItem];
   export type ConfigItems = ConfigItem[];
}
