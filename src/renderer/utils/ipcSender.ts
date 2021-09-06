/* eslint-disable  @typescript-eslint/no-explicit-any */

const { ipcRenderer } = window;

export const ipcSender = (channel: string, data: any = {}): Promise<any> =>
  new Promise((resolve) => {
    ipcRenderer.send(channel, data);
    ipcRenderer.on(channel, (_event, arg) => {
      resolve(arg);
    });
  });

export const ipcSenderNonBlock = (channel: string, data: any = {}): string => {
  ipcRenderer.send(channel, data);
  return 'complete';
};
