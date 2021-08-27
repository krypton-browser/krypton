import { ipcMain } from 'electron';

export default function ipcHandler(channel: string): any {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log(target, propertyKey, descriptor);
    if (target[propertyKey] && typeof target[propertyKey] === 'function')
      ipcMain?.on(channel, target[propertyKey]);
  };
}
