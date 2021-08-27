import ipcHandler from '../ipcHandler';

/* eslint-disable  @typescript-eslint/no-explicit-any */
export default class {
  @ipcHandler('test')
  static test(event: Electron.IpcMainEvent, args: any) {
    // eslint-disable-next-line no-console
    console.log(args.ping);
    event.sender.send('test', { pong: 'world' });
  }
}
