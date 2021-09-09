import React, { useEffect, useState } from 'react';
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
import { auth, test } from '../channels';
import { ipcSender } from './utils/ipcSender';
import Join from './pages/join';
import History from './pages/history';
import Setting from './pages/setting';
import { loadHistory } from './actions/data';

const { ipcRenderer } = window;

/* eslint-disable no-console */

const { initialize } = browsingSlice.actions;

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isJoined, setIsJoined] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!ipcRenderer) console.log('IPC error...');
    (async () => {
      setIsJoined((await ipcSender(auth.check)) === 'success');
      const res = await ipcSender(test.ping, { ping: 'hello' });
      console.log(res.pong);
      setIsLoading(false);
    })();
    dispatch(loadHistory());
    dispatch(initialize());
  }, [dispatch]);
  return (
    !isLoading && (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/join" component={Join} exact />
          <Route path="/history" component={History} exact />
          <Route path="/setting" component={Setting} exact />
          <Route
            path="*"
            component={() => <Redirect to={isJoined ? '/login' : '/join'} />}
          />
        </Switch>
      </Router>
    )
  );
}
