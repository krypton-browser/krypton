import { createAsyncThunk } from '@reduxjs/toolkit';
import ipcSender from '../utils/ipcSender';
import { ISetting } from '../../types/setting';

export const loadHistory = createAsyncThunk('setting/LOAD_HISTORY', async () =>
  ipcSender('browsing/load_history')
);

export const setSetting = createAsyncThunk(
  'setting/SET_SETTING',
  async (data: ISetting) => ipcSender('setting/set_setting', data)
);

export const loadSetting = createAsyncThunk('setting/LOAD_SETTING', async () =>
  ipcSender('setting/load_setting')
);

export const removeHistory = createAsyncThunk(
  'setting/REMOVE_HISTORY',
  async (data: { id: string }) => ipcSender('setting/remove_history', data)
);

export const loadThemeImage = createAsyncThunk(
  'setting/LOAD_THEME_IMAGE',
  async () => ipcSender('setting/load_theme_image')
);
