import Channel from '../ipc';
import { data } from '../../../channels';
import { Database } from '../../user/data';
import { IBookmark, IVisitHistory } from '../../../types/browsing';

export default class {
  private static database: Database = new Database();

  // #region history
  @Channel(data.history.load)
  static history_load(event: Electron.IpcMainEvent) {
    event.reply(data.history.load, this.database.GetVisitHistories());
  }

  @Channel(data.history.add)
  static history_add(event: Electron.IpcMainEvent, args: IVisitHistory) {
    const result = this.database.AddVisitHistory(args);
    event.reply(data.history.add, result ? 'complete' : 'failure');
  }

  @Channel(data.history.remove)
  static history_remove(event: Electron.IpcMainEvent, args: string) {
    const result = this.database.RemoveVisitHistory(args);
    event.reply(data.history.add, result ? 'complete' : 'failure');
  }
  // #endregion

  // #region bookmarks
  @Channel(data.bookmarks.load)
  static bookmarks_load(event: Electron.IpcMainEvent) {
    event.reply(data.bookmarks.load, this.database.GetBookmarks());
  }

  @Channel(data.bookmarks.add)
  static bookmarks_add(event: Electron.IpcMainEvent, args: IBookmark) {
    const result = this.database.AddBookmark(args);
    event.reply(data.bookmarks.add, result ? 'complete' : 'failure');
  }

  @Channel(data.bookmarks.remove)
  static bookmarks_remove(event: Electron.IpcMainEvent, args: string) {
    const result = this.database.RemoveBookmark(args);
    event.reply(data.bookmarks.add, result ? 'complete' : 'failure');
  }
  // #endregion

  // #region ThemeImage
  @Channel(data.themeImage.load)
  static theme_image_load(/* _event: Electron.IpcMainEvent */) {
    // TODO
  }

  @Channel(data.themeImage.set)
  static theme_image_set(/* _event: Electron.IpcMainEvent, args: string */) {
    // TODO
  }
  // #endregion
}
