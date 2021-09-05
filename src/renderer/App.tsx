import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Home from './pages/home';
import Browsing from './pages/browsing';
import { useAppDispatch } from './configureStore';
import { browsingSlice } from './reducers/browsing';

const { ipcRenderer } = window;

/* eslint-disable no-console */

const { initialize } = browsingSlice.actions;

export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!ipcRenderer) console.log('close...');
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
