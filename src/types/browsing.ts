export type ITab = {
  id: string;
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

export interface IHistory extends IBookmark {
  datetime: string;
}
