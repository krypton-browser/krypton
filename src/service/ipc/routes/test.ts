import Channel from '../ipc';
import { test } from '../../../channels';

/* eslint-disable  @typescript-eslint/no-explicit-any */
export default class {
  @Channel(test.ping)
  static test(event: Electron.IpcMainEvent, args: any) {
    console.log(args.ping);
    event.sender.send(test.ping, { pong: 'world' });
  }
}
