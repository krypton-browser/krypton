import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.global.css';
import Home from './pages/home';
import Login from './pages/login';
import { useAppDispatch } from './configureStore';
import { browsingSlice } from './reducers/browsing';
import { test } from '../channels';
import { ipcSender } from './utils/ipcSender';
import Join from './pages/join';
import History from './pages/history';
import Setting from './pages/setting';

const { ipcRenderer } = window;

/* eslint-disable no-console */

const { initialize } = browsingSlice.actions;

export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!ipcRenderer) console.log('IPC error...');
    (async () => {
      const res = await ipcSender(test.ping, { ping: 'hello' });
      console.log(res.pong);
    })();
    dispatch(initialize());
  }, [dispatch]);
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/join" component={Join} exact />
        <Route path="/history" component={History} exact />
        <Route path="/setting" component={Setting} exact />
        <Route path="*" component={() => <Redirect to="/login" />} />
      </Switch>
    </Router>
  );
}
