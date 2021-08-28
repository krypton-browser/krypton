/* eslint-disable  @typescript-eslint/no-explicit-any */

import { combineReducers } from 'redux';
import browsing from './browsing';
import auth from './auth';

const rootReducer = (state: any, action: any) => {
  const combineReducer = combineReducers({
    browsing,
    auth,
  });
  return combineReducer(state, action);
};

export default rootReducer;
