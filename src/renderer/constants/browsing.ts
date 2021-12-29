import { v4 } from 'uuid';
import { IBookmark, IVisitHistory, ITab } from '../../types/browsing';

export const DEFAULT_FAVICON_URI = `${__dirname}/../assets/icon.ico`;

export const initialTab = (): ITab => ({
  id: v4(),
  url: '',
  title: '새 탭',
  favicon: DEFAULT_FAVICON_URI,
  canGoBack: false,
  canGoForward: false,
});

export const initialBookmark = (): IBookmark => ({
  id: v4(),
  url: '',
  title: '',
});

export const initialHistory = (): IVisitHistory => ({
  id: v4(),
  url: '',
  title: '',
  faviconPath: '',
  datetime: new Date().toString(),
});
