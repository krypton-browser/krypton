import { createAsyncThunk } from '@reduxjs/toolkit';
import ipcSender from '../utils/ipcSender';

interface IPayload {
  password: string;
}

export const join = createAsyncThunk('auth/JOIN', async (data: IPayload) =>
  ipcSender('auth/join', data)
);

export const login = createAsyncThunk('auth/LOGIN', async (data: IPayload) =>
  ipcSender('auth/login', data)
);

export const reset = createAsyncThunk('auth/RESET', async (data: IPayload) =>
  ipcSender('auth/reset', data)
);
