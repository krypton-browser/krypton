import { v4 } from 'uuid';
import { IBookmark, IVisitHistory, ITab } from '../../types/browsing';

export const defaultFavicon = 'http://images.sinopoda.com/favicon.svg';

export const initialTab = (): ITab => ({
  id: v4(),
  url: '',
  title: '새 탭',
  favicon: defaultFavicon,
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
  datetime: new Date().toString(),
});
