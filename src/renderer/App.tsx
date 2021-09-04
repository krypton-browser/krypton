import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Home from './pages/home';
import channels from '../channels';

const { ipcRenderer } = window;

/* eslint-disable no-console */

export default function App() {
  useEffect(() => {
    if (ipcRenderer) {
      console.log('opened!');
    }
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
}
