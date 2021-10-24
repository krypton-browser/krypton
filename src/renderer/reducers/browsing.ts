import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WebviewTag } from 'electron';
import { IBrowsingState } from '../types/reducers';
import { initialTab } from '../constants/browsing';
import { loadPhishingSiteCheck } from '../actions/browsing';
import { ITab } from '../../types/browsing';

const initialState: IBrowsingState = {
  tabs: [],
  webviewTable: {},
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
      const tab = initialTab();
      state.tabs = [tab];
      state.currentTab = tab.id;
      state.webviewTable = { [tab.id]: '' };
    },
    moveTab: (state, { payload: { id } }: PayloadAction<{ id: string }>) => {
      state.currentTab = id;
    },
    addTab: (state) => {
      const newTab = initialTab();
      state.tabs = [...state.tabs, newTab];
      state.currentTab = newTab.id;
      state.webviewTable = { ...state.webviewTable, [newTab.id]: '' };
    },
    removeTab: (state, { payload }: PayloadAction<{ id: string }>) => {
      const tabs = state.tabs.filter(({ id }) => id !== payload.id);
      state.tabs = tabs;
      if (payload.id === state.currentTab) {
        state.currentTab = tabs[tabs.length - 1].id;
      }
      const webview = state.webviewTable;
      if (webview[payload.id]) {
        delete webview[payload.id];
        state.webviewTable = webview;
      }
    },
    updateTab: (
      state,
      { payload: { id: tabId, ...data } }: PayloadAction<Partial<ITab>>
    ) => {
      const newTabs = state.tabs;
      state.tabs.forEach(({ id, ...tab }, i): boolean => {
        if (id !== tabId) return true;
        newTabs[i] = { id, ...tab, ...data };
        return false;
      });
      state.tabs = newTabs;
    },
    go: (state, { payload: { url } }: PayloadAction<{ url: string }>) => {
      state.webviewTable = { ...state.webviewTable, [state.currentTab]: url };
    },
    goBack: (state) => {
      console.log('webview goBack!');
      const webview: WebviewTag | null = document?.querySelector(
        `#custom_webview_${state.currentTab}`
      );
      console.log(webview);
      webview?.goBack();
    },
    goForward: (state) => {
      console.log('webview goForward!');
      const webview: WebviewTag | null = document?.querySelector(
        `#custom_webview_${state.currentTab}`
      );
      webview?.goForward();
    },
    reload: (state) => {
      const webview: WebviewTag | null = document?.querySelector(
        `#webview_${state.currentTab}`
      );
      webview?.reload();
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
