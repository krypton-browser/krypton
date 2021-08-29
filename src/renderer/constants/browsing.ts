import { v4 } from 'uuid';
import { IBookmark, IHistory, ITab } from '../../types/browsing';

export const initialTab: ITab = {
  id: v4(),
  point: 0,
  stack: ['/'],
};

export const initialBookmark: IBookmark = {
  id: v4(),
  url: '',
  title: '',
};

export const initialHistory: IHistory = {
  id: v4(),
  url: '',
  title: '',
  datetime: new Date().toString(),
};
