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
      console.log(channels.pong.test);
      ipcRenderer.on(channels.pong.test, (_event, arg) => {
        console.log(arg.pong);
      });
      ipcRenderer.send(channels.pong.test, { ping: 'hello' });
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
