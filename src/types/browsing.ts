export type ITab = {
  id: string;
  url: string;
  title: string;
  favicon: string;
  point: number;
  stack: string[];
};

export interface IBookmark {
  id: string;
  url: string;
  title: string;
}

export interface IVisitHistory extends IBookmark {
  datetime: string;
}

export interface ISearchHistory {
  text: string;
  link: string;
}
