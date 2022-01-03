import { createAsyncThunk } from '@reduxjs/toolkit';
import { ipcSender } from '../utils/ipcSender';
import { ISettings } from '../../types/setting';
import { setting } from '../../channels';

export const setSetting = createAsyncThunk(
  'setting/SET_SETTING',
  async (payload: ISettings, { rejectWithValue }) => {
    const res = await ipcSender(setting.set, payload);
    if (res === 'success') {
      return payload;
    }
    return rejectWithValue('failure');
  }
);

export const loadSetting = createAsyncThunk(
  'setting/LOAD_SETTING',
  async (): Promise<ISettings> => await ipcSender(setting.load)
);
