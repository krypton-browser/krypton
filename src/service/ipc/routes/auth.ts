import Channel from '../ipc';
import channels from '../../../channels';

export default class {
  @Channel(channels.auth.login)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static test(_event: Electron.IpcMainEvent, args: any) {
    // eslint-disable-next-line no-console
    console.log(args);
  }
}
