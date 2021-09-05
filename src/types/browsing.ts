export type ITab = {
  id: string;
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
