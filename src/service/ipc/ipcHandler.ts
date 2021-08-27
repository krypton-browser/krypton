import { ipcMain } from 'electron';

export default function ipcHandler(channel: string): any {
  return (target: any, propertyKey: string) => {
    if (
      target &&
      target.descriptor &&
      target.descriptor.value &&
      typeof target.descriptor.value === 'function'
    )
      ipcMain?.on(channel, target.descriptor.value);
    if (target[propertyKey] && typeof target[propertyKey] === 'function')
      ipcMain?.on(channel, target[propertyKey]);
  };
}
