import { IpcMainEvent } from 'electron';
import Channel from '../ipc';
import { auth } from '../../../channels';
import { IPassword } from '../../../types/auth';
import EasyAuth from '../../user/easyauth';

export default class {
  private static library: EasyAuth = new EasyAuth();

  @Channel(auth.login)
  static login(event: IpcMainEvent, args: IPassword) {
    if (!this.library) this.library = new EasyAuth();
    const result = this.library.signIn(args.password);
    event.reply(auth.login, result ? 'complete' : 'failure');
  }

  @Channel(auth.join)
  static join(event: IpcMainEvent, args: IPassword) {
    if (!this.library) this.library = new EasyAuth();
    const result = this.library.signup(args.password);
    event.reply(auth.join, result ? 'complete' : 'failure');
  }

  @Channel(auth.reset)
  static async reset() {
    await EasyAuth.reset();
  }
}
