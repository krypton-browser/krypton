import { ITab } from '../types/browsing';
import { initialTab } from '../constants/browsing';

const ADD_TAB = 'browsing/ADD_TAB' as const;
const REMOVE_TAB = 'browsing/REMOVE_TAB' as const;
const ADD_URL = 'browsing/ADD_URL' as const;
const FORWARD_SPACE_URL = 'browsing/FORWARD_SPACE_URL' as const;
const BACK_SPACE_URL = 'browsing/BACK_SPACE_URL' as const;
const SAVE_HISTORY = 'browsing/SAVE_HISTORY' as const;
const LOAD_PHISHING_SITE_CHECK = 'browsing/LOAD_PHISHING_SITE_CHECK' as const;

export const addTab = () => ({ type: ADD_TAB });
export const removeTab = (payload: { id: string }) => ({
  type: REMOVE_TAB,
  payload,
});
export const addURL = (payload: { id: string; url: string }) => ({
  type: ADD_URL,
  payload,
});
export const forwardSpaceURL = (payload: { id: string }) => ({
  type: FORWARD_SPACE_URL,
  payload,
});
export const backSpaceURL = (payload: { id: string }) => ({
  type: BACK_SPACE_URL,
  payload,
});
export const saveHistory = (payload: { url: string }) => ({
  type: SAVE_HISTORY,
  payload,
});
export const loadPhishingSiteCheck = (payload: { url: string }) => ({
  type: LOAD_PHISHING_SITE_CHECK,
  payload,
});

type BrowsingAction =
  | ReturnType<typeof addTab>
  | ReturnType<typeof removeTab>
  | ReturnType<typeof addURL>
  | ReturnType<typeof forwardSpaceURL>
  | ReturnType<typeof backSpaceURL>
  | ReturnType<typeof saveHistory>
  | ReturnType<typeof loadPhishingSiteCheck>;

type BrowsingState = {
  tabs: ITab[];
  currentTab: string;
  isPhishingSite: boolean;
};

const initialState: BrowsingState = {
  tabs: [initialTab],
  currentTab: '',
  isPhishingSite: false,
};

function browsing(
  state: BrowsingState = initialState,
  action: BrowsingAction
): BrowsingState {
  switch (action.type) {
    case ADD_TAB:
      // eslint-disable-next-line no-case-declarations
      const newTab = initialTab;
      return {
        ...state,
        tabs: [...state.tabs, newTab],
        currentTab: newTab.id,
      };
    case REMOVE_TAB:
      // eslint-disable-next-line no-case-declarations
      const tabs = state.tabs.filter(({ id }) => id !== action.payload.id);
      return {
        ...state,
        tabs,
        currentTab: tabs[tabs.length - 1].id,
      };
    default:
      return state;
  }
}

export default browsing;
