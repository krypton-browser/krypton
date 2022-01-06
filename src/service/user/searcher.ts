export const defaultSearchEngine = 'https://duckduckgo.com/';

export type UrlConstructor = (query: string) => string;

export interface ISearcher {
  name: string;
  keyword: Array<string>;
  urlConstructor: UrlConstructor;
}

export class Searcher {
  name: string;

  keyword: Array<string>;

  urlConstructor: UrlConstructor;

  constructor(
    name: string,
    keyword: Array<string>,
    urlConstructor: UrlConstructor
  ) {
    this.name = name;
    this.keyword = keyword;
    this.urlConstructor = urlConstructor;
  }
}

export interface DefaultSearchersType {
  DuckDuckGo: Searcher;
  Google: Searcher;
}

export const DefaultSearchers: DefaultSearchersType = {
  DuckDuckGo: new Searcher(
    'DuckDuckGo',
    ['duckduckgo.com', 'ddg.gg'],
    (query: string) => {
      return `https://duckduckgo.com/?q=${query}`;
    }
  ),
  Google: new Searcher('Google', ['google.com'], (query: string) => {
    return `https://www.google.com/search?q=${query}`;
  }),
};
