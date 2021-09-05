import electron from 'electron';
import path from 'path';
import StormDB from 'stormdb';
import { IBookmark, IVisitHistory } from '../../types/browsing';
import { Searcher } from './searcher';

export const userDataPath = (electron.app || electron.remote.app).getPath(
  'userData'
);

export const databasePath = path.resolve(userDataPath, 'database.stormdb');

export interface SearchHistory {
  text: string;
  link: string;
}

export interface Settings {
  SearchEngine: Searcher;
  HttpAlert: boolean;
}

export class Database {
  db: StormDB;

  constructor() {
    // eslint-disable-next-line new-cap
    const engine = new StormDB.localFileEngine(databasePath);
    this.db = new StormDB(engine);
    this.db.default({
      searchhistory: [],
      IHistory: [],
      settings: {},
    });
  }

  public Save(): boolean {
    try {
      this.db.save();
      return true;
    } catch {
      return false;
    }
  }

  public GetSettings(): Settings {
    return this.db.get('settings').value() as Settings;
  }

  public SetSettings(settings: Settings): boolean {
    try {
      this.db.set('settings', settings);
      return true;
    } catch {
      return false;
    }
  }

  // #region SearchHistory
  public GetSearchHistories(): Array<SearchHistory> {
    return this.db.get('search-history').value() as Array<SearchHistory>;
  }

  public AddSearchHistory(history: SearchHistory): boolean {
    try {
      this.db.get('search-history').push(history);
      return true;
    } catch {
      return false;
    }
  }

  public GetSearchHistory(index: number): SearchHistory {
    return this.db.get('search-history').get(index).value() as SearchHistory;
  }

  public SetSearchHistory(history: SearchHistory, index: number): boolean {
    try {
      this.db.get('search-history').set(index, history);
      return true;
    } catch {
      return false;
    }
  }

  public RemoveSearchHistory(index: number): boolean {
    try {
      this.db.get('search-history').get(index).delete(true);
      return true;
    } catch {
      return false;
    }
  }
  // #endregion

  // #region History
  public GetVisitHistories(): Array<IVisitHistory> {
    return this.db.get('visit-history').value() as Array<IVisitHistory>;
  }

  public AddVisitHistory(history: IVisitHistory): boolean {
    try {
      this.db.get('visit-history').push(history);
      return true;
    } catch {
      return false;
    }
  }

  public GetVisitHistory(id: string): IVisitHistory | undefined {
    return (this.db.get('visit-history').value() as Array<IVisitHistory>)
      .filter((x: IVisitHistory) => x.id === id)
      .shift();
  }

  public IndexVisitHistory(id: string): number {
    return (
      this.db.get('visit-history').value() as Array<IVisitHistory>
    ).findIndex((x: IVisitHistory) => x.id === id);
  }

  public SetVisitHistory(history: IVisitHistory, id: number): boolean {
    try {
      this.db.get('visit-history').set(id, history);
      return true;
    } catch {
      return false;
    }
  }

  public RemoveVisitHistory(id: string): boolean {
    try {
      this.db.get('visit-history').get(this.IndexVisitHistory(id)).delete(true);
      return true;
    } catch {
      return false;
    }
  }
  // #endregion

  // #region Bookmark
  public GetBookmarks(): Array<IBookmark> {
    return this.db.get('bookmark').value() as Array<IBookmark>;
  }

  public AddBookmark(history: IBookmark): boolean {
    try {
      this.db.get('bookmark').push(history);
      return true;
    } catch {
      return false;
    }
  }

  public GetBookmark(id: string): IBookmark | undefined {
    return (this.db.get('bookmark').value() as Array<IBookmark>)
      .filter((x: IBookmark) => x.id === id)
      .shift();
  }

  public IndexBookmark(id: string): number {
    return (this.db.get('bookmark').value() as Array<IBookmark>).findIndex(
      (x: IBookmark) => x.id === id
    );
  }

  public SetBookmark(history: IBookmark, id: number): boolean {
    try {
      this.db.get('bookmark').set(id, history);
      return true;
    } catch {
      return false;
    }
  }

  public RemoveBookmark(id: string): boolean {
    try {
      this.db.get('bookmark').get(this.IndexBookmark(id)).delete(true);
      return true;
    } catch {
      return false;
    }
  }
  // #endregion
}
