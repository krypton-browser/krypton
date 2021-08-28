export type ITab = {
  id: string;
  point: number;
  stack: string[];
};

export interface IHistory {
  id: string;
  url: string;
  title: string;
  datetime: string;
}
