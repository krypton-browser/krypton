import { IpcMainEvent } from 'electron';
import Channel from '../ipc';
import { auth } from '../../../channels';
import { IPassword, IStoredPassword } from '../../../types/auth';
import EasyAuth from '../../user/easyauth';
import { response } from '../response';

export default class {
  private static library: EasyAuth = new EasyAuth();

  private static password: string | null;

  @Channel(auth.login)
  static login(event: IpcMainEvent, args: IPassword) {
    if (!this.library) this.library = new EasyAuth();
    const result = this.library.signIn(args.password);
    event.reply(auth.login, response(result));
  }

  @Channel(auth.join)
  static join(event: IpcMainEvent, args: IPassword) {
    if (!this.library) this.library = new EasyAuth();
    const result = this.library.signup(args.password);
    event.reply(auth.join, response(result));
  }

  @Channel(auth.check)
  static check(event: IpcMainEvent) {
    if (!this.library) this.library = new EasyAuth();
    const result = this.library.check();
    event.reply(auth.check, response(result));
  }

  @Channel(auth.pwdStore.set)
  static storeset(event: IpcMainEvent, args: IStoredPassword) {
    const { domain, password } = args;
    if (!this.library) this.library = new EasyAuth();
    if (!this.password) return event.reply(auth.pwdStore.set, response(false));
    if (!password) return event.reply(auth.check, response(false));
    const result = this.library.SetDecrypted(domain, password, this.password);
    return event.reply(auth.check, response(result));
  }

  @Channel(auth.pwdStore.get)
  static storeget(event: IpcMainEvent, args: IStoredPassword) {
    const { domain } = args;
    if (!this.library) this.library = new EasyAuth();
    if (!this.password) return event.reply(auth.pwdStore.set, response(false));
    const result = this.library.GetDecrypted(domain, this.password);
    return event.reply(auth.check, result);
  }

  @Channel(auth.reset)
  static async reset() {
    await EasyAuth.reset();
  }
}
