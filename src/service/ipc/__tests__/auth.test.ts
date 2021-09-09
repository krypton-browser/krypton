import { ipcRenderer } from 'electron';
import path from 'path';
import { auth } from '../../../channels';

import '../routes/auth';

jest.mock('electron', () => {
  return {
    app: {
      getPath: jest.fn(),
    },
    remote: {
      app: {
        getPath: jest.fn(),
      },
    },
    ipcRenderer: {
      on: jest.fn().mockReturnThis(),
      once: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    },
  };
});

describe('ipc auth route', () => {
  it('signup', () => {
    ipcRenderer.once(auth.join, (_event, args: boolean) => {
      console.log(args);
      expect(args).toBe('complete');
    });
    ipcRenderer.send(auth.join, {
      password: 'test_password',
    });
  });

  it('signin', () => {
    console.log('signin running!');
    ipcRenderer.once(auth.login, (_event, args: boolean) => {
      console.log(args);
      expect(args).toBe('complete');
    });
    ipcRenderer.send(auth.login, {
      password: 'test_password',
    });
  });
});
