import { createSlice } from '@reduxjs/toolkit';
import { IBrowsingState } from '../types/reducers';
import { initialTab } from '../constants/browsing';
import { addHistory, loadPhishingSiteCheck } from '../actions/browsing';

export const initialState: IBrowsingState = {
  tabs: [initialTab],
  currentTab: '',
  isPhishingSite: false,
  addHistoryDone: false,
  addHistoryLoading: false,
  addHistoryError: null,
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
    addTab: (state) => {
      const newTab = initialTab;
      state.tabs = [...state.tabs, newTab];
      state.currentTab = newTab.id;
    },
    removeTab: (state, { payload }) => {
      const tabs = state.tabs.filter(({ id }) => id !== payload.id);
      state.tabs = tabs;
      state.currentTab = tabs[tabs.length - 1].id;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(addHistory.pending, (state) => {
        state.addHistoryDone = false;
        state.addHistoryLoading = true;
        state.addHistoryError = null;
      })
      .addCase(addHistory.fulfilled, (state) => {
        state.addHistoryDone = true;
        state.addHistoryLoading = false;
      })
      .addCase(addHistory.rejected, (state, { payload }) => {
        state.addHistoryLoading = false;
        state.addHistoryError = payload;
      })
      .addCase(loadPhishingSiteCheck.pending, (state) => {
        state.loadPhishingSiteCheckDone = false;
        state.loadPhishingSiteCheckLoading = true;
        state.loadPhishingSiteCheckError = null;
      })
      .addCase(loadPhishingSiteCheck.fulfilled, (state, { payload }) => {
        state.loadPhishingSiteCheckDone = true;
        state.loadPhishingSiteCheckLoading = false;
        state.isPhishingSite = payload;
      })
      .addCase(loadPhishingSiteCheck.rejected, (state, { payload }) => {
        state.loadPhishingSiteCheckLoading = false;
        state.loadPhishingSiteCheckError = payload;
      }),
});

export default browsingSlice.reducer;
