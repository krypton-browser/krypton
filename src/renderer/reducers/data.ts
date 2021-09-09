import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDataState } from '../types/reducers';
import {
  addBookmarks,
  addHistory,
  loadBookmarks,
  loadHistory,
  loadThemeImage,
  removeBookmarks,
  removeHistory,
  setThemeImage,
} from '../actions/data';

const initialState: IDataState = {
  history: [],
  bookmarks: [],
  themeImage: null,
  loadHistoryDone: false,
  loadHistoryLoading: false,
  loadHistoryError: null,
  addHistoryDone: false,
  addHistoryLoading: false,
  addHistoryError: null,
  removeHistoryDone: false,
  removeHistoryLoading: false,
  removeHistoryError: null,
  loadBookmarksDone: false,
  loadBookmarksLoading: false,
  loadBookmarksError: null,
  addBookmarksDone: false,
  addBookmarksLoading: false,
  addBookmarksError: null,
  removeBookmarksDone: false,
  removeBookmarksLoading: false,
  removeBookmarksError: null,
  loadThemeImageDone: false,
  loadThemeImageLoading: false,
  loadThemeImageError: null,
  setThemeImageDone: false,
  setThemeImageLoading: false,
  setThemeImageError: null,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loadHistory.pending, (state) => {
        state.loadHistoryDone = false;
        state.loadHistoryLoading = true;
        state.loadHistoryError = null;
      })
      .addCase(loadHistory.fulfilled, (state, { payload }) => {
        state.loadHistoryDone = true;
        state.loadHistoryLoading = false;
        console.log(payload);
        state.history = payload;
      })
      .addCase(loadHistory.rejected, (state, { payload }) => {
        state.loadHistoryLoading = false;
        state.loadHistoryError = payload;
      })
      .addCase(addHistory.pending, (state) => {
        state.addHistoryDone = false;
        state.addHistoryLoading = true;
        state.addHistoryError = null;
      })
      .addCase(addHistory.fulfilled, (state, { payload }) => {
        state.addHistoryDone = true;
        state.addHistoryLoading = false;
        state.history = [...state.history, payload];
      })
      .addCase(addHistory.rejected, (state, { payload }) => {
        state.addHistoryLoading = false;
        state.addHistoryError = payload;
      })
      .addCase(removeHistory.pending, (state) => {
        state.removeHistoryDone = false;
        state.removeHistoryLoading = true;
        state.removeHistoryError = null;
      })
      .addCase(removeHistory.fulfilled, (state, { payload }) => {
        state.removeHistoryDone = true;
        state.removeHistoryLoading = false;
        state.history = state.history.filter(({ id }) => id !== payload.id);
      })
      .addCase(removeHistory.rejected, (state, { payload }) => {
        state.removeHistoryLoading = false;
        state.removeHistoryError = payload;
      })
      .addCase(loadBookmarks.pending, (state) => {
        state.loadBookmarksDone = false;
        state.loadBookmarksLoading = true;
        state.loadBookmarksError = null;
      })
      .addCase(loadBookmarks.fulfilled, (state, { payload }) => {
        state.loadBookmarksDone = true;
        state.loadBookmarksLoading = false;
        state.bookmarks = payload;
      })
      .addCase(loadBookmarks.rejected, (state, { payload }) => {
        state.loadBookmarksLoading = false;
        state.loadBookmarksError = payload;
      })
      .addCase(addBookmarks.pending, (state) => {
        state.addBookmarksDone = false;
        state.addBookmarksLoading = true;
        state.addBookmarksError = null;
      })
      .addCase(addBookmarks.fulfilled, (state, { payload }) => {
        state.addBookmarksDone = true;
        state.addBookmarksLoading = false;
        state.bookmarks = [...state.bookmarks, payload];
      })
      .addCase(addBookmarks.rejected, (state, { payload }) => {
        state.addBookmarksLoading = false;
        state.addBookmarksError = payload;
      })
      .addCase(removeBookmarks.pending, (state) => {
        state.removeBookmarksDone = false;
        state.removeBookmarksLoading = true;
        state.removeBookmarksError = null;
      })
      .addCase(removeBookmarks.fulfilled, (state, { payload }) => {
        state.removeBookmarksDone = true;
        state.removeBookmarksLoading = false;
        state.bookmarks = state.bookmarks.filter(({ id }) => id !== payload.id);
      })
      .addCase(removeBookmarks.rejected, (state, { payload }) => {
        state.removeBookmarksLoading = false;
        state.removeBookmarksError = payload;
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
      })
      .addCase(setThemeImage.pending, (state) => {
        state.setThemeImageDone = false;
        state.setThemeImageLoading = true;
        state.setThemeImageError = null;
      })
      .addCase(setThemeImage.fulfilled, (state, { payload }) => {
        state.setThemeImageDone = true;
        state.setThemeImageLoading = false;
        state.themeImage = payload;
      })
      .addCase(setThemeImage.rejected, (state, { payload }) => {
        state.setThemeImageLoading = false;
        state.setThemeImageError = payload;
      }),
});

export default dataSlice.reducer;
