import Channel from '../ipc';
import { setting } from '../../../channels';
import { Database } from '../../user/data';
import { ISettings } from '../../../types/setting';

export default class {
  private static database: Database = new Database();

  @Channel(setting.load)
  static load(event: Electron.IpcMainEvent) {
    event.reply(setting.load, this.database.GetSettings());
  }

  @Channel(setting.set)
  static set(event: Electron.IpcMainEvent, args: ISettings) {
    const result = this.database.SetSettings(args);
    event.reply(setting.set, result ? 'complete' : 'failure');
  }
}
