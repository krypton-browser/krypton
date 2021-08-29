/* eslint-disable  @typescript-eslint/no-explicit-any */

import { combineReducers } from 'redux';
import browsing from './browsing';
import auth from './auth';
import setting from './setting';
import data from './data';

const rootReducer = (state: any, action: any) => {
  const combineReducer = combineReducers({
    browsing,
    auth,
    setting,
    data,
  });
  return combineReducer(state, action);
};

export default rootReducer;
