import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Home from './pages/home';
import Setting from './pages/setting';

const { ipcRenderer } = window;

export default function App() {
  useEffect(() => {
    if (ipcRenderer) {
      console.log('opened!');
      ipcRenderer.on('test', (_event, arg) => {
        console.log(arg.pong);
      });
      ipcRenderer.send('test', { ping: 'hello' });
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
