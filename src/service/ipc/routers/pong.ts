import Channel from '../ipc';
import channels from '../../../channels';

export default class {
  @Channel(channels.pong.test)
  static test(event: Electron.IpcMainEvent, args: any) {
    console.log(args.ping);
    event.sender.send(channels.pong.test, { pong: 'world' });
  }
}
