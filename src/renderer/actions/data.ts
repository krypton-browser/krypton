import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ipcSender } from '../utils/ipcSender';
import { IBookmark, IVisitHistory } from '../../types/browsing';
import { data } from '../../channels';

export const loadHistory = createAsyncThunk(
  'data/LOAD_HISTORY',
  async (): Promise<IVisitHistory[]> => ipcSender(data.history.load)
);

export const addHistory = createAsyncThunk(
  'data/ADD_HISTORY',
  async ({ payload }: PayloadAction<IVisitHistory>, { rejectWithValue }) => {
    const res = await ipcSender(data.history.add, payload);
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
      const res = await ipcSender(data.history.remove, payload);
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
    const res = await ipcSender(data.bookmarks.add, payload);
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
      const res = await ipcSender(data.bookmarks.remove, payload);
      if (res === 'success') {
        return payload;
      }
    }
    return rejectWithValue('failure');
  }
);

export const loadThemeImage = createAsyncThunk(
  'data/LOAD_THEME_IMAGE',
  async (): Promise<string> => ipcSender(data.themeImage.load)
);

export const setThemeImage = createAsyncThunk(
  'data/SET_THEME_IMAGE',
  async (
    { payload }: PayloadAction<{ image: string }>,
    { rejectWithValue }
  ) => {
    const res = await ipcSender(data.themeImage.set, payload);
    if (res === 'success') {
      return payload.image;
    }
    return rejectWithValue('failure');
  }
);
