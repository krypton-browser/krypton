import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import ipcSender from '../utils/ipcSender';
import { ISetting } from '../../types/setting';
import { setting } from '../../channels';

export const setSetting = createAsyncThunk(
  'setting/SET_SETTING',
  async ({ payload }: PayloadAction<ISetting>, { rejectWithValue }) => {
    const res = await ipcSender(setting.set, payload);
    if (res === 'success') {
      return payload;
    }
    return rejectWithValue('failure');
  }
);

export const loadSetting = createAsyncThunk(
  'setting/LOAD_SETTING',
  async (): Promise<ISetting> => ipcSender(setting.load)
);