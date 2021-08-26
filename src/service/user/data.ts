import electron from 'electron';
import path from 'path';
import StormDB from 'stormdb';
import { Searcher } from './searcher';

export const userDataPath = (electron.app || electron.remote.app).getPath(
  'userData'
);

export const databasePath = path.resolve(userDataPath, 'database.stormdb');

export interface VisitHistory {
  url: string;
  title: string;
}

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
      visithistory: [],
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

  public GetSearchHistory(id: number): SearchHistory {
    return this.db.get('search-history').get(id).value() as SearchHistory;
  }

  public SetSearchHistory(history: SearchHistory, id: number): boolean {
    try {
      this.db.get('search-history').set(id, history);
      return true;
    } catch {
      return false;
    }
  }

  public GetVisitHistories(): Array<VisitHistory> {
    return this.db.get('visit-history').value() as Array<VisitHistory>;
  }

  public AddVisitHistory(history: VisitHistory): boolean {
    try {
      this.db.get('visit-history').push(history);
      return true;
    } catch {
      return false;
    }
  }

  public GetVisitHistory(id: number): VisitHistory {
    return this.db.get('visit-history').get(id).value() as VisitHistory;
  }

  public SetVisitHistory(history: VisitHistory, id: number): boolean {
    try {
      this.db.get('visit-history').set(id, history);
      return true;
    } catch {
      return false;
    }
  }
}
