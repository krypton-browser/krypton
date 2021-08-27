import { combineReducers } from 'redux';
import browsing from './browsing';

const rootReducer = combineReducers({
  browsing,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
