import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBrowsingState } from '../types/reducers';
import { initialTab } from '../constants/browsing';
import { loadPhishingSiteCheck } from '../actions/browsing';

const initialState: IBrowsingState = {
  tabs: [initialTab()],
  currentTab: '',
  isPhishingSite: false,
  loadPhishingSiteCheckDone: false,
  loadPhishingSiteCheckLoading: false,
  loadPhishingSiteCheckError: null,
};

export const browsingSlice = createSlice({
  name: 'browsing',
  initialState,
  reducers: {
    initialize: (state) => {
      state.currentTab = state.tabs[0].id;
    },
    moveTab: (state, { payload }: PayloadAction<{ id: string }>) => {
      state.currentTab = payload.id;
    },
    addTab: (state) => {
      const newTab = initialTab();
      state.tabs = [...state.tabs, newTab];
      state.currentTab = newTab.id;
    },
    removeTab: (state, { payload }: PayloadAction<{ id: string }>) => {
      const tabs = state.tabs.filter(({ id }) => id !== payload.id);
      state.tabs = tabs;
      if (payload.id === state.currentTab) {
        state.currentTab = tabs[tabs.length - 1].id;
      }
    },
    addUrl: (state, { payload: { url } }: PayloadAction<{ url: string }>) => {
      const newTabs = state.tabs;
      // eslint-disable-next-line no-restricted-syntax
      for (const tab of newTabs) {
        if (tab.id === state.currentTab) {
          const { id, point, stack } = tab;
          newTabs[newTabs.indexOf(tab)] = {
            ...tab,
            id,
            point: 0,
            stack: [url, ...stack.slice(point)],
          };
          break;
        }
      }
      state.tabs = newTabs;
    },
    moveSpace: (
      state,
      { payload: { mode } }: PayloadAction<{ mode: 'back' | 'forward' }>
    ) => {
      const newTabs = state.tabs;
      // eslint-disable-next-line no-restricted-syntax
      for (const tab of newTabs) {
        if (tab.id === state.currentTab) {
          newTabs[newTabs.indexOf(tab)] = {
            ...tab,
            point: tab.point + (mode === 'back' ? 1 : -1),
          };
          break;
        }
      }
      state.tabs = newTabs;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(loadPhishingSiteCheck.pending, (state) => {
        state.loadPhishingSiteCheckDone = false;
        state.loadPhishingSiteCheckLoading = true;
        state.loadPhishingSiteCheckError = null;
      })
      .addCase(
        loadPhishingSiteCheck.fulfilled,
        (state, { payload }: PayloadAction<boolean>) => {
          state.loadPhishingSiteCheckDone = true;
          state.loadPhishingSiteCheckLoading = false;
          state.isPhishingSite = payload;
        }
      )
      .addCase(loadPhishingSiteCheck.rejected, (state, { payload }) => {
        state.loadPhishingSiteCheckLoading = false;
        state.loadPhishingSiteCheckError = payload;
      }),
});

export default browsingSlice.reducer;
