import { createAsyncThunk } from '@reduxjs/toolkit';
import { ipcSender } from '../utils/ipcSender';
import { auth } from '../../channels';
import { IPassword } from '../../types/auth';

export const join = createAsyncThunk('auth/JOIN', async (data: IPassword) =>
  ipcSender(auth.join, data)
);

export const login = createAsyncThunk('auth/LOGIN', async (data: IPassword) =>
  ipcSender(auth.login, data)
);

export const reset = createAsyncThunk('auth/RESET', async () =>
  ipcSender(auth.reset)
);
