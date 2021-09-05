import { DefaultSearchers } from '../../service/user/searcher';
import { ISettings } from '../../types/setting';

export const initialSetting: ISettings = {
  useADBlock: true,
  useCookieReset: false,
  useScanPhishingSite: true,
  SearchEngine: DefaultSearchers.DuckDuckGo,
};
