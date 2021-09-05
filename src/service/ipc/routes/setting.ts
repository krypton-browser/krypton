import { ipcMain } from 'electron';
import Channel from '../ipc';
import { setting } from '../../../channels';
import { Database } from '../../user/data';
import { ISettings } from '../../../types/setting';

export default class {
  private static database: Database = new Database();

  @Channel(setting.load)
  static load(_event: Electron.IpcMainEvent) {
    ipcMain.emit(setting.load, this.database.GetSettings());
  }

  @Channel(setting.set)
  static set(_event: Electron.IpcMainEvent, args: ISettings) {
    const result = this.database.SetSettings(args);
    ipcMain.emit(setting.set, result ? 'complete' : 'failure');
  }
}
