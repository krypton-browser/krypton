import { ipcMain } from 'electron';

export function Route(channel: string): any {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    if (target[propertyKey] && typeof target[propertyKey] === 'function')
      ipcMain?.on(channel, target[propertyKey]);
    else if (target.descriptor && typeof target.descriptor.value === 'function')
      ipcMain?.on(channel, target.descriptor.value);
    else if (descriptor && typeof descriptor.value === 'function')
      ipcMain?.on(channel, descriptor.value);
  };
}

export function Channel(channel: string): any {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    if (target[propertyKey] && typeof target[propertyKey] === 'function')
      ipcMain?.on(channel, target[propertyKey]);
    else if (target.descriptor && typeof target.descriptor.value === 'function')
      ipcMain?.on(channel, target.descriptor.value);
    else if (descriptor && typeof descriptor.value === 'function')
      ipcMain?.on(channel, descriptor.value);
  };
}
