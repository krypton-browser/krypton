import { IpcMainEvent } from 'electron';
import Channel from '../ipc';
import { data } from '../../../channels';
import { Database } from '../../user/data';
import { IBookmark, IVisitHistory } from '../../../types/browsing';
import { response } from '../response';

export default class {
  private static database: Database = new Database();

  @Channel(data.history.load)
  static history_load(event: IpcMainEvent) {
    if (!this.database) this.database = new Database();
    event.reply(data.history.load, this.database.GetVisitHistories());
  }

  @Channel(data.history.add)
  static history_add(event: IpcMainEvent, args: IVisitHistory) {
    if (!this.database) this.database = new Database();
    const result = this.database.AddVisitHistory(args)
      ? this.database.Save()
      : false;
    event.reply(data.history.add, response(result));
  }

  @Channel(data.history.remove)
  static history_remove(event: IpcMainEvent, args: string) {
    if (!this.database) this.database = new Database();
    const result = this.database.RemoveVisitHistory(args)
      ? this.database.Save()
      : false;
    event.reply(data.history.add, response(result));
  }
  // #endregion

  // #region bookmarks
  @Channel(data.bookmarks.load)
  static bookmarks_load(event: Electron.IpcMainEvent) {
    if (!this.database) this.database = new Database();
    event.reply(data.bookmarks.load, this.database.GetBookmarks());
  }

  @Channel(data.bookmarks.add)
  static bookmarks_add(event: IpcMainEvent, args: IBookmark) {
    if (!this.database) this.database = new Database();
    const result = this.database.AddBookmark(args)
      ? this.database.Save()
      : false;
    event.reply(data.bookmarks.add, response(result));
  }

  @Channel(data.bookmarks.remove)
  static bookmarks_remove(event: IpcMainEvent, args: string) {
    if (!this.database) this.database = new Database();
    const result = this.database.RemoveBookmark(args)
      ? this.database.Save()
      : false;
    event.reply(data.bookmarks.add, response(result));
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
