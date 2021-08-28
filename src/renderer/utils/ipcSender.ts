/* eslint-disable  @typescript-eslint/no-explicit-any */

const { ipcRenderer } = window;

const ipcSender = (channel: string, data: any = {}): Promise<any> =>
  new Promise((resolve) => {
    ipcRenderer.send(channel, data);
    resolve(ipcRenderer.on(channel, (_event, arg) => arg));
  });

export default ipcSender;
