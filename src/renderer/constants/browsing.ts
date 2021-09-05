import { v4 } from 'uuid';
import { IBookmark, IVisitHistory, ITab } from '../../types/browsing';

export function initialTab(): ITab {
  return {
    id: v4(),
    point: 0,
    stack: ['/'],
    title: '새 탭',
    favicon: 'http://images.sinopoda.com/favicon.svg',
  };
}

export function initialBookmark(): IBookmark {
  return {
    id: v4(),
    url: '',
    title: '',
  };
}

export function initialHistory(): IVisitHistory {
  return {
    id: v4(),
    url: '',
    title: '',
    datetime: new Date().toString(),
  };
}
