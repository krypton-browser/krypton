import { createAsyncThunk } from '@reduxjs/toolkit';
import { ipcSender } from '../utils/ipcSender';
import { auth } from '../../channels';
import { IPassword } from '../../types/auth';

export const join = createAsyncThunk('auth/JOIN', async (data: IPassword) =>
  ipcSender(auth.join, data)
);

export const login = createAsyncThunk(
  'auth/LOGIN',
  async (data: IPassword, { rejectWithValue }) => {
    const res = (await ipcSender(auth.login, data)) === 'success';
    if (res) return 'success';
    return rejectWithValue('failure');
  }
);

export const reset = createAsyncThunk('auth/RESET', async () =>
  ipcSender(auth.reset)
);
