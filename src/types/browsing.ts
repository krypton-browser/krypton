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

export interface IHistory extends IBookmark {
  datetime: string;
}
