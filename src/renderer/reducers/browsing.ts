import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBrowsingState } from '../types/reducers';
import { initialTab } from '../constants/browsing';
import { loadPhishingSiteCheck } from '../actions/browsing';

const initialState: IBrowsingState = {
  tabs: [initialTab],
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
      const newTab = initialTab;
      state.tabs = [...state.tabs, newTab];
      state.currentTab = newTab.id;
    },
    removeTab: (state, { payload }: PayloadAction<{ id: string }>) => {
      const tabs = state.tabs.filter(({ id }) => id !== payload.id);
      state.tabs = tabs;
      state.currentTab = tabs[tabs.length - 1].id;
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
