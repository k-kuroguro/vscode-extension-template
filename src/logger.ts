import * as util from 'util';
import { Disposable, LogOutputChannel } from 'vscode';

class OutputChannelLogger {
   constructor(private readonly channel: LogOutputChannel) { }

   public debug(...data: unknown[]): void {
      this.channel.debug(util.format(...data));
   }

   public info(...data: unknown[]): void {
      this.channel.info(util.format(...data));
   }

   public warn(...data: unknown[]): void {
      this.channel.warn(util.format(...data));
   }

   public error(...data: unknown[]): void {
      this.channel.error(util.format(...data));
   }
}

let logger: OutputChannelLogger | undefined;

export function initializeLogger(channel: LogOutputChannel): Disposable {
   logger = new OutputChannelLogger(channel);
   return {
      dispose: () => {
         logger = undefined;
      }
   };
}

export function getLogger(): OutputChannelLogger {
   if (!logger) {
      throw new ReferenceError('Logger has not been initialized.');
   }
   return logger;
}
