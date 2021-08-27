import { ipcMain } from 'electron';

export default function ipcHandler(channel: string): any {
  return (target: any, propertyKey: string) => {
    if (target[propertyKey] && typeof target[propertyKey] === 'function')
      ipcMain?.on(channel, target[propertyKey]);
  };
}
