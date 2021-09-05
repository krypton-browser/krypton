import { ipcMain } from 'electron';
import Channel from '../ipc';
import { auth } from '../../../channels';
import { IPassword } from '../../../types/auth';
import EasyAuth from '../../user/easyauth';

export default class {
  private static library: EasyAuth = new EasyAuth();

  @Channel(auth.login)
  static login(_event: Electron.IpcMainEvent, args: IPassword) {
    const result = this.library.signin(args.password);
    ipcMain.emit(auth.login, result ? 'complete' : 'failure');
  }

  @Channel(auth.join)
  static join(_event: Electron.IpcMainEvent, args: IPassword) {
    const result = this.library.signup(args.password);
    ipcMain.emit(auth.join, result ? 'complete' : 'failure');
  }

  @Channel(auth.reset)
  static reset(_event: Electron.IpcMainEvent) {
    EasyAuth.reset();
  }
}
