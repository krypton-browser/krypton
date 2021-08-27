import ipcHandler from '../ipcHandler';
import channels from '../../../channels';

export default class {
  @ipcHandler(channels.pong.test)
  static test(event: Electron.IpcMainEvent, args: any) {
    console.log(args.ping);
    event.sender.send(channels.pong.test, { pong: 'world' });
  }
}
