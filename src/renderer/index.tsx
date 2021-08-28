import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './configureStore';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
