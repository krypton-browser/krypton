import { ISearcher } from '../service/user/searcher';

export interface ISettings {
  useADBlock: boolean;
  useCookieReset: boolean;
  useScanPhishingSite: boolean;
  SearchEngine: ISearcher;
}
