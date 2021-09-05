import Channel from '../ipc';
import { auth } from '../../../channels';
import { IPassword } from '../../../types/auth';
import EasyAuth from '../../user/easyauth';

export default class {
  private static library: EasyAuth = new EasyAuth();

  @Channel(auth.login)
  static login(_event: Electron.IpcMainEvent, args: IPassword) {
    this.library.signin(args.password);
  }

  @Channel(auth.join)
  static join(_event: Electron.IpcMainEvent, args: IPassword) {
    this.library.signup(args.password);
  }

  @Channel(auth.reset)
  static reset(_event: Electron.IpcMainEvent) {
    EasyAuth.reset();
  }
}
