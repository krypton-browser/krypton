/* eslint-disable  @typescript-eslint/no-explicit-any */

import { IHistory, ITab } from '../../types/browsing';
import { ISetting } from '../../types/setting';

export interface IBrowsingState {
  tabs: ITab[];
  currentTab: string;
  isPhishingSite: boolean;
  addHistoryDone: boolean;
  addHistoryLoading: boolean;
  addHistoryError?: any;
  loadPhishingSiteCheckDone: boolean;
  loadPhishingSiteCheckLoading: boolean;
  loadPhishingSiteCheckError?: any;
}

export interface IAuthState {
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
  history: IHistory[];
  themeImage?: string | null;
  loadHistoryDone: boolean;
  loadHistoryLoading: boolean;
  loadHistoryError?: any;
  removeHistoryDone: boolean;
  removeHistoryLoading: boolean;
  removeHistoryError?: any;
  setSettingDone: boolean;
  setSettingLoading: boolean;
  setSettingError?: any;
  loadSettingDone: boolean;
  loadSettingLoading: boolean;
  loadSettingError?: any;
  loadThemeImageDone: boolean;
  loadThemeImageLoading: boolean;
  loadThemeImageError?: any;
}
