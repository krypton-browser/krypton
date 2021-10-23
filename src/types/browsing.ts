export type WebviewTable = { [id: string]: string };

export interface ITab {
  id: string;
  url: string;
  title: string;
  favicon: string;
  canGoBack: boolean;
  canGoForward: boolean;
  isDefault: boolean;
}

export interface IBookmark {
  id: string;
  url: string;
  title: string;
}

export interface IVisitHistory extends IBookmark {
  datetime: string;
  faviconPath: string; // SaveVisitHistoryFavicon 함수의 반환값
}

export interface ISearchHistory {
  text: string;
  link: string;
}
