import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Home from './pages/home';
import channels from '../channels';
import Browsing from './pages/browsing';
import ipcSender from './utils/ipcSender';
import { useAppDispatch } from './configureStore';
import { browsingSlice } from './reducers/browsing';

const { ipcRenderer } = window;

/* eslint-disable no-console */

const { initialize } = browsingSlice.actions;

export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!ipcRenderer) console.log('close...');
    (async () => {
      const res = await ipcSender(channels.pong.test, { ping: 'hello' });
      console.log(res.pong);
    })();
    dispatch(initialize());
  }, [dispatch]);
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/browsing" component={Browsing} exact />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
}
