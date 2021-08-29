import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import ipcSender from '../utils/ipcSender';
import { IBookmark, IHistory } from '../../types/browsing';

export const loadHistory = createAsyncThunk(
  'data/LOAD_HISTORY',
  async (): Promise<IHistory[]> => ipcSender('data/load_history')
);

export const addHistory = createAsyncThunk(
  'data/ADD_HISTORY',
  async ({ payload }: PayloadAction<IHistory>, { rejectWithValue }) => {
    const res = await ipcSender('data/add_history', payload);
    if (res === 'success') {
      return payload;
    }
    return rejectWithValue('failure');
  }
);

export const removeHistory = createAsyncThunk(
  'data/REMOVE_HISTORY',
  async ({ payload }: PayloadAction<{ id: string }>, { rejectWithValue }) => {
    if (payload.id) {
      const res = await ipcSender('data/remove_history', payload);
      if (res === 'success') {
        return payload;
      }
    }
    return rejectWithValue('failure');
  }
);

export const loadBookmarks = createAsyncThunk(
  'data/LOAD_BOOKMARKS',
  async (): Promise<IBookmark[]> => ipcSender('data/load_bookmarks')
);

export const addBookmarks = createAsyncThunk(
  'data/SET_BOOKMARKS',
  async ({ payload }: PayloadAction<IBookmark>, { rejectWithValue }) => {
    const res = await ipcSender('data/add_bookmarks', payload);
    if (res === 'success') {
      return payload;
    }
    return rejectWithValue('failure');
  }
);

export const removeBookmarks = createAsyncThunk(
  'data/REMOVE_BOOKMARKS',
  async ({ payload }: PayloadAction<{ id: string }>, { rejectWithValue }) => {
    if (payload.id) {
      const res = await ipcSender('data/remove_bookmarks', payload);
      if (res === 'success') {
        return payload;
      }
    }
    return rejectWithValue('failure');
  }
);

export const loadThemeImage = createAsyncThunk(
  'data/LOAD_THEME_IMAGE',
  async (): Promise<string> => ipcSender('data/load_theme_image')
);

export const setThemeImage = createAsyncThunk(
  'data/SET_THEME_IMAGE',
  async (
    { payload }: PayloadAction<{ image: string }>,
    { rejectWithValue }
  ) => {
    const res = await ipcSender('data/set_theme_image', payload);
    if (res === 'success') {
      return payload.image;
    }
    return rejectWithValue('failure');
  }
);
