import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../types/reducers';
import { join, login, reset } from '../actions/auth';

const initialState: IAuthState = {
  joinDone: false,
  joinLoading: false,
  joinError: null,
  loginDone: false,
  loginLoading: false,
  loginError: null,
  resetDone: false,
  resetLoading: false,
  resetError: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(join.pending, (state) => {
        state.joinDone = false;
        state.joinLoading = true;
        state.joinError = null;
      })
      .addCase(join.fulfilled, (state) => {
        state.joinDone = true;
        state.joinLoading = false;
      })
      .addCase(join.rejected, (state, { payload }) => {
        state.joinLoading = false;
        state.joinError = payload;
      })
      .addCase(login.pending, (state) => {
        state.loginDone = false;
        state.loginLoading = true;
        state.loginError = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loginDone = payload === 'success';
        state.loginLoading = false;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.loginLoading = false;
        state.loginError = payload;
      })
      .addCase(reset.pending, (state) => {
        state.resetDone = false;
        state.loginLoading = true;
        state.loginError = null;
      })
      .addCase(reset.fulfilled, (state) => {
        state.resetDone = true;
        state.resetLoading = false;
      })
      .addCase(reset.rejected, (state, { payload }) => {
        state.resetLoading = false;
        state.resetError = payload;
      }),
});

export default authSlice.reducer;
