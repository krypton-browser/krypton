import ipcHandler from './ipc';

export default class {
  @ipcHandler('test')
  static test(event: Electron.IpcMainEvent, args: any) {
    console.log(args.ping);
    event.sender.send('test', { pong: 'world' });
  }
}
