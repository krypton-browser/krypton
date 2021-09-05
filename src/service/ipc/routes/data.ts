import { ipcMain } from 'electron';
import Channel from '../ipc';
import { data } from '../../../channels';
import { Database } from '../../user/data';
import { IBookmark } from '../../../types/browsing';

export default class {
  private static database: Database = new Database();

  // #region bookmarks
  @Channel(data.bookmarks.add)
  static bookmarks_add(_event: Electron.IpcMainEvent, args: IBookmark) {
    const result = this.database.AddBookmark(args);
    ipcMain.emit(data.bookmarks.add, result ? 'complete' : 'failure');
  }

  @Channel(data.bookmarks.load)
  static bookmarks_load(_event: Electron.IpcMainEvent) {
    ipcMain.emit(data.bookmarks.load, this.database.GetBookmarks());
  }

  @Channel(data.bookmarks.remove)
  static bookmarks_remove(_event: Electron.IpcMainEvent, args: string) {
    const result = this.database.RemoveBookmark(args);
    ipcMain.emit(data.bookmarks.add, result ? 'complete' : 'failure');
  }
  // #endregion
}
