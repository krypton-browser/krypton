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

export default {
  auth: {
    LOGIN: VALUE('AUTH', 'LOGIN'),
  },
  browsing: {
    LOAD_PHISHING_SITE_CHECK: VALUE('BROWSING', 'LOAD_PHISHING_SITE_CHECK'),
  },
  data: {
    HISTORY: {
      LOAD: VALUE('DATA', 'HISTORY', 'LOAD'),
      ADD: VALUE('DATA', 'HISTORY', 'ADD'),
      REMOVE: VALUE('DATA', 'HISTORY', 'REMOVE'),
    },
    BOOKMARKS: {
      LOAD: VALUE('DATA', 'BOOKMARKS', 'LOAD'),
      ADD: VALUE('DATA', 'BOOKMARKS', 'ADD'),
      REMOVE: VALUE('DATA', 'BOOKMARKS', 'REMOVE'),
    },
    THEMEIMAGE: {
      LOAD: VALUE('DATA', 'THEMEIMAGE', 'LOAD'),
      SET: VALUE('DATA', 'THEMEIMAGE', 'SET'),
    },
  },
};
