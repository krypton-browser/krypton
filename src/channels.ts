// import { machineIdSync } from 'node-machine-id';
// import { SHA256, SHA512 } from 'crypto-js';

function VALUE(...channel: string[]) {
  return channel.join('/');
  // return SHA512(channel + SHA256(machineIdSync()).toString()).toString();
}

/*
const size = 32;
function hex() {
  return [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('');
}
*/

export const auth = {
  login: VALUE('AUTH', 'LOGIN'),
  join: VALUE('AUTH', 'JOIN'),
  reset: VALUE('AUTH', 'RESET'),
  check: VALUE('AUTH', 'CHECK'),
};

export const browsing = {
  load_phishing_site_check: VALUE('BROWSING', 'LOAD_PHISHING_SITE_CHECK'),
};

export const test = {
  ping: VALUE('TEST', 'PING'),
};

export const data = {
  history: {
    load: VALUE('DATA', 'HISTORY', 'LOAD'),
    add: VALUE('DATA', 'HISTORY', 'ADD'),
    remove: VALUE('DATA', 'HISTORY', 'REMOVE'),
  },
  bookmarks: {
    load: VALUE('DATA', 'BOOKMARKS', 'LOAD'),
    add: VALUE('DATA', 'BOOKMARKS', 'ADD'),
    remove: VALUE('DATA', 'BOOKMARKS', 'REMOVE'),
  },
  themeImage: {
    load: VALUE('DATA', 'THEMEIMAGE', 'LOAD'),
    set: VALUE('DATA', 'THEMEIMAGE', 'SET'),
  },
};

export const setting = {
  set: VALUE('SETTING', 'SET'),
  load: VALUE('SETTING', 'LOAD'),
};

export const app = {
  load_is_maximize: VALUE('APP', 'LOAD_IS_MAXIMIZE'),
  maximize: VALUE('APP', 'MAXIMIZE'),
  unMaximize: VALUE('APP', 'UN_MAXIMIZE'),
  minimize: VALUE('APP', 'MINIMIZE'),
  quit: VALUE('APP', 'QUIT'),
};

export default { auth, browsing, data, setting, app, test };
