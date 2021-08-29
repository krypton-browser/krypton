import { createAsyncThunk } from '@reduxjs/toolkit';
import ipcSender from '../utils/ipcSender';

export const loadPhishingSiteCheck = createAsyncThunk(
  'browsing/LOAD_PHISHING_SITE_CHECK',
  async (data: { url: string }) =>
    ipcSender('browsing/load_phishing_site_check', data)
);
