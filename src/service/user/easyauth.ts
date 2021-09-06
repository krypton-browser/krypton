import { promises } from 'fs';
import Authentication, { databasePath, shakeKey } from './auth';

const { unlink } = promises;

export default class EasyAuth extends Authentication {
  public signup(password: string) {
    if (this.UsedBefore()) return false;
    this.SettingPassword(shakeKey(password));
    this.Save();
    return true;
  }

  public signIn(password: string) {
    return this.CheckPassword(password);
  }

  public static async reset() {
    await unlink(databasePath);
  }
}
