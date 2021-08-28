import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISettingState } from '../types/reducers';
import { initialSetting } from '../constants/setting';
import {
  loadHistory,
  loadSetting,
  loadThemeImage,
  removeHistory,
  setSetting,
} from '../actions/setting';
import { IHistory } from '../../types/browsing';
import { ISetting } from '../../types/setting';

export const initialState: ISettingState = {
  setting: initialSetting,
  history: [],
  themeImage: null,
  loadHistoryDone: false,
  loadHistoryLoading: false,
  loadHistoryError: null,
  removeHistoryDone: false,
  removeHistoryLoading: false,
  removeHistoryError: null,
  setSettingDone: false,
  setSettingLoading: false,
  setSettingError: null,
  loadSettingDone: false,
  loadSettingLoading: false,
  loadSettingError: null,
  loadThemeImageDone: false,
  loadThemeImageLoading: false,
  loadThemeImageError: null,
};

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loadHistory.pending, (state) => {
        state.loadHistoryDone = false;
        state.loadHistoryLoading = true;
        state.loadHistoryError = null;
      })
      .addCase(
        loadHistory.fulfilled,
        (state, { payload }: PayloadAction<IHistory[]>) => {
          state.loadHistoryDone = true;
          state.loadHistoryLoading = false;
          state.history = payload;
        }
      )
      .addCase(loadHistory.rejected, (state, { payload }) => {
        state.loadHistoryLoading = false;
        state.loadHistoryError = payload;
      })
      .addCase(removeHistory.pending, (state) => {
        state.removeHistoryDone = false;
        state.removeHistoryLoading = true;
        state.removeHistoryError = null;
      })
      .addCase(removeHistory.fulfilled, (state) => {
        state.removeHistoryDone = true;
        state.removeHistoryLoading = false;
      })
      .addCase(removeHistory.rejected, (state, { payload }) => {
        state.removeHistoryLoading = false;
        state.removeHistoryError = payload;
      })
      .addCase(setSetting.pending, (state) => {
        state.setSettingDone = false;
        state.setSettingLoading = true;
        state.setSettingError = null;
      })
      .addCase(setSetting.fulfilled, (state) => {
        state.setSettingDone = true;
        state.setSettingLoading = false;
      })
      .addCase(setSetting.rejected, (state, { payload }) => {
        state.setSettingLoading = false;
        state.setSettingError = payload;
      })
      .addCase(loadSetting.pending, (state) => {
        state.loadSettingDone = false;
        state.loadSettingLoading = true;
        state.loadSettingError = null;
      })
      .addCase(
        loadSetting.fulfilled,
        (state, { payload }: PayloadAction<ISetting>) => {
          state.loadSettingDone = true;
          state.loadSettingLoading = false;
          state.setting = payload;
        }
      )
      .addCase(loadSetting.rejected, (state, { payload }) => {
        state.loadSettingLoading = false;
        state.loadSettingError = payload;
      })
      .addCase(loadThemeImage.pending, (state) => {
        state.loadThemeImageDone = false;
        state.loadThemeImageLoading = true;
        state.loadThemeImageError = null;
      })
      .addCase(
        loadThemeImage.fulfilled,
        (state, { payload }: PayloadAction<string>) => {
          state.loadThemeImageDone = true;
          state.loadThemeImageLoading = false;
          state.themeImage = payload;
        }
      )
      .addCase(loadThemeImage.rejected, (state, { payload }) => {
        state.loadThemeImageLoading = false;
        state.loadThemeImageError = payload;
      }),
});

export default settingSlice.reducer;
