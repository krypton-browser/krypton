import Channel from '../ipc';
import { browsing } from '../../../channels';

export default class {
  @Channel(browsing.load_phishing_site_check)
  static _(_event: Electron.IpcMainEvent, args: any) {
    // TODO
  }
}
