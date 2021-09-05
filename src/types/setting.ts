import { Searcher } from '../service/user/searcher';

export interface ISettings {
  useADBlock: boolean;
  useCookieReset: boolean;
  useScanPhishingSite: boolean;
  SearchEngine: Searcher;
}
