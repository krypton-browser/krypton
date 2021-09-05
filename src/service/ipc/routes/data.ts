import { ipcMain } from 'electron';
import Channel from '../ipc';
import { data } from '../../../channels';
import { Database } from '../../user/data';
import { IBookmark, IVisitHistory } from '../../../types/browsing';

export default class {
  private static database: Database = new Database();

  // #region history
  @Channel(data.history.load)
  static history_load(_event: Electron.IpcMainEvent) {
    ipcMain.emit(data.history.load, this.database.GetVisitHistories());
  }

  @Channel(data.history.add)
  static history_add(_event: Electron.IpcMainEvent, args: IVisitHistory) {
    const result = this.database.AddVisitHistory(args);
    ipcMain.emit(data.history.add, result ? 'complete' : 'failure');
  }

  @Channel(data.history.remove)
  static history_remove(_event: Electron.IpcMainEvent, args: string) {
    const result = this.database.RemoveVisitHistory(args);
    ipcMain.emit(data.history.add, result ? 'complete' : 'failure');
  }
  // #endregion

  // #region bookmarks
  @Channel(data.bookmarks.load)
  static bookmarks_load(_event: Electron.IpcMainEvent) {
    ipcMain.emit(data.bookmarks.load, this.database.GetBookmarks());
  }

  @Channel(data.bookmarks.add)
  static bookmarks_add(_event: Electron.IpcMainEvent, args: IBookmark) {
    const result = this.database.AddBookmark(args);
    ipcMain.emit(data.bookmarks.add, result ? 'complete' : 'failure');
  }

  @Channel(data.bookmarks.remove)
  static bookmarks_remove(_event: Electron.IpcMainEvent, args: string) {
    const result = this.database.RemoveBookmark(args);
    ipcMain.emit(data.bookmarks.add, result ? 'complete' : 'failure');
  }
  // #endregion

  // #region ThemeImage
  @Channel(data.themeImage.load)
  static theme_image_load(_event: Electron.IpcMainEvent) {
    // TODO
  }

  @Channel(data.themeImage.set)
  static theme_image_set(_event: Electron.IpcMainEvent, args: string) {
    // TODO
  }
  // #endregion
}
