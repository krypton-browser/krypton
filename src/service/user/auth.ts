import { machineIdSync } from 'node-machine-id';
import CryptoJS, { AES, SHA256 } from 'crypto-js';
import StormDB from 'stormdb';
import path from 'path';
import EventEmitter from 'stream';
import { userDataPath } from './data';

export const databasePath = path.resolve(userDataPath, 'password.stormdb');
const machineID = machineIdSync();

export function shakeKey(password: string): string {
  const key = password + machineID;
  const hashKey = SHA256(key);
  return hashKey.toString();
}

export function encrypt(password: string, key: string): string {
  return AES.encrypt(password, key).toString();
}

export function decrypt(encrypted: string, key: string): string {
  return AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8);
}

export const Base64 = {
  encode: (plain: string) => {
    return Buffer.from(plain, 'utf-8').toString('base64');
  },
  decode: (encrypted: string) => {
    return Buffer.from(encrypted, 'base64').toString('utf-8');
  },
};

const ON_ERROR_MESSAGE = 'An error occurred while decrypting the database.';

export default class Authentication extends EventEmitter {
  db!: StormDB;

  onError: boolean;

  constructor() {
    super();
    this.onError = false;
    // eslint-disable-next-line new-cap
    const engine = new StormDB.localFileEngine(databasePath, {
      serialize: (data: never) => {
        // encrypt and serialize data
        return encrypt(JSON.stringify(data), machineID);
      },
      deserialize: (data: string) => {
        // decrypt and deserialize data
        const decrypted = decrypt(data, machineID);
        if (!decrypted && data) {
          this.emit('incorrect');
          this.onError = true;
        }
        return JSON.parse(decrypted);
      },
    });
    if (this.onError) return;
    this.db = new StormDB(engine);
    this.db.default({});
  }

  public async Save(): Promise<boolean> {
    try {
      if (this.onError) throw new Error(ON_ERROR_MESSAGE);
      await this.db.save();
      return true;
    } catch {
      return false;
    }
  }

  public SetPassword(domain: string, encrypted: string): boolean {
    try {
      if (this.onError) throw new Error(ON_ERROR_MESSAGE);
      this.db.set(Base64.encode(domain), encrypted);
      return true;
    } catch {
      return false;
    }
  }

  public GetPassword(domain: string): string | boolean {
    try {
      if (this.onError) throw new Error(ON_ERROR_MESSAGE);
      return this.db.get(Base64.encode(domain)).value() as unknown as string;
    } catch {
      return false;
    }
  }

  public SetDecrypted(
    domain: string,
    value: string,
    passphrase: string
  ): string | boolean {
    try {
      if (this.onError) throw new Error(ON_ERROR_MESSAGE);
      this.db.set(Base64.encode(domain), encrypt(value, shakeKey(passphrase)));
      return true;
    } catch {
      return false;
    }
  }

  public GetDecrypted(domain: string, passphrase: string): string | boolean {
    try {
      if (this.onError) throw new Error(ON_ERROR_MESSAGE);
      const encrypted = this.db
        .get(Base64.encode(domain))
        .value() as unknown as string;
      return decrypt(encrypted, shakeKey(passphrase));
    } catch {
      return false;
    }
  }

  public CheckPassword(passphrase: string): boolean {
    try {
      const encs = this.db.value();
      if (Object.keys(encs).length) {
        const firkey = Object.keys(encs)[0];
        const res = decrypt(encs[firkey], shakeKey(passphrase));
        return res !== '';
      }
      return true;
    } catch {
      return false;
    }
  }

  public SettingPassword(encrypted: string): boolean {
    try {
      this.SetPassword(
        Base64.encode('_checker_'),
        encrypt(SHA256(Math.random().toString()).toString(), encrypted)
      );
      return true;
    } catch (err) {
      return false;
    }
  }

  public UsedBefore(): boolean {
    try {
      const encs = this.db.value();
      return !!Object.keys(encs).length;
    } catch {
      return false;
    }
  }
}
