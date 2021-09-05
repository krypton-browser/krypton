/* eslint-disable  @typescript-eslint/no-explicit-any */

import { IBookmark, IVisitHistory, ITab } from '../../types/browsing';
import { ISetting } from '../../types/setting';

export interface IBrowsingState {
  tabs: ITab[];
  currentTab: string;
  isPhishingSite: boolean;
  loadPhishingSiteCheckDone: boolean;
  loadPhishingSiteCheckLoading: boolean;
  loadPhishingSiteCheckError?: any;
}

export interface IAuthState {
  key?: string | null;
  joinDone: boolean;
  joinLoading: boolean;
  joinError?: any;
  loginDone: boolean;
  loginLoading: boolean;
  loginError?: any;
  resetDone: boolean;
  resetLoading: boolean;
  resetError?: any;
}

export interface ISettingState {
  setting: ISetting;
  setSettingDone: boolean;
  setSettingLoading: boolean;
  setSettingError?: any;
  loadSettingDone: boolean;
  loadSettingLoading: boolean;
  loadSettingError?: any;
}

export interface IDataState {
  history: IVisitHistory[];
  bookmarks: IBookmark[];
  themeImage?: string | null;
  loadHistoryDone: boolean;
  loadHistoryLoading: boolean;
  loadHistoryError?: any;
  addHistoryDone: boolean;
  addHistoryLoading: boolean;
  addHistoryError?: any;
  removeHistoryDone: boolean;
  removeHistoryLoading: boolean;
  removeHistoryError?: any;
  loadBookmarksDone: boolean;
  loadBookmarksLoading: boolean;
  loadBookmarksError?: any;
  addBookmarksDone: boolean;
  addBookmarksLoading: boolean;
  addBookmarksError?: any;
  removeBookmarksDone: boolean;
  removeBookmarksLoading: boolean;
  removeBookmarksError?: any;
  loadThemeImageDone: boolean;
  loadThemeImageLoading: boolean;
  loadThemeImageError?: any;
  setThemeImageDone: boolean;
  setThemeImageLoading: boolean;
  setThemeImageError?: any;
}
