import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './modules';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
