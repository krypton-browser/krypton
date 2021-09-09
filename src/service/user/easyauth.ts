import { promises } from 'fs';
import Authentication, { databasePath as authPath, shakeKey } from './auth';
import { databasePath as dataPath } from './data';

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

  public check() {
    return this.UsedBefore();
  }

  public static async reset() {
    await unlink(dataPath);
    await unlink(authPath);
  }
}
