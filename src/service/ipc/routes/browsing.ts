import Channel from '../ipc';
import { browsing } from '../../../channels';

export default class {
  @Channel(browsing.load_phishing_site_check)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static _(_event: Electron.IpcMainEvent, args: any) {
    // eslint-disable-next-line no-console
    console.log(args);
  }
}
