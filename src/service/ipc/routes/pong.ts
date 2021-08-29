import Channel from '../ipc';
import channels from '../../../channels';

/* eslint-disable  @typescript-eslint/no-explicit-any */
export default class {
  @Channel(channels.pong.test)
  static test(event: Electron.IpcMainEvent, args: any) {
    // eslint-disable-next-line no-console
    console.log(args.ping);
    event.sender.send(channels.pong.test, { pong: 'world' });
  }
}
