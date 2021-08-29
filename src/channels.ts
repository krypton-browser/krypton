// import { machineIdSync } from 'node-machine-id';
// import { SHA256, SHA512 } from 'crypto-js';

function value(channel: string) {
  return channel;
  // return SHA512(channel + SHA256(machineIdSync()).toString()).toString();
}

const size = 32;
function hex() {
  return [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join('');
}

export default {
  auth: {
    login: value('auth.login'),
  },
  pong: {
    test: value('pong.test'),
  },
};
