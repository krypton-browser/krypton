import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Home from './pages/home';
import Setting from './pages/setting';
import channels from '../channels';

const { ipcRenderer } = window;

export default function App() {
  useEffect(() => {
    if (ipcRenderer) {
      // eslint-disable-next-line no-console
      console.log('opened!');
      console.log(channels.pong.test);
      ipcRenderer.on(channels.pong.test, (_event, arg) => {
        // eslint-disable-next-line no-console
        console.log(arg.pong);
      });
      ipcRenderer.send(channels.pong.test, { ping: 'hello' });
    }
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/setting" component={Setting} exact />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
}
