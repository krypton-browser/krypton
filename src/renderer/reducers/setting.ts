import { createSlice } from '@reduxjs/toolkit';
import { ISettingState } from '../types/reducers';
import { initialSetting } from '../constants/setting';
import { loadSetting, setSetting } from '../actions/setting';

const initialState: ISettingState = {
  setting: initialSetting,
  setSettingDone: false,
  setSettingLoading: false,
  setSettingError: null,
  loadSettingDone: false,
  loadSettingLoading: false,
  loadSettingError: null,
};

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(setSetting.pending, (state) => {
        state.setSettingDone = false;
        state.setSettingLoading = true;
        state.setSettingError = null;
      })
      .addCase(setSetting.fulfilled, (state, { payload }) => {
        state.setSettingDone = true;
        state.setSettingLoading = false;
        state.setting = payload;
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
      .addCase(loadSetting.fulfilled, (state, { payload }) => {
        state.loadSettingDone = true;
        state.loadSettingLoading = false;
        state.setting = payload;
      })
      .addCase(loadSetting.rejected, (state, { payload }) => {
        state.loadSettingLoading = false;
        state.loadSettingError = payload;
      }),
});

export default settingSlice.reducer;
