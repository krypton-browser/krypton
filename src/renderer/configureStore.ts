import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './reducers';

const isDev = process.env.NODE_ENV === 'development';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    isDev ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware(),
  devTools: isDev,
});
