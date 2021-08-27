import { machineIdSync } from 'node-machine-id';
import CryptoJS, { AES, SHA256, SHA512 } from 'crypto-js';

function value(channel: string) {
  return SHA512(channel + SHA256(machineIdSync()).toString()).toString();
}

export default {
  auth: {
    login: value('auth.login'),
  },
  pong: {
    test: value('pong.test'),
  },
};
