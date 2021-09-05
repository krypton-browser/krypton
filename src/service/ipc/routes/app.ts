import { BrowserWindow } from 'electron';
import Channel from '../ipc';
import { app } from '../../../channels';

export default class {
  @Channel(app.maximize)
  static maximize(_event: Electron.IpcMainEvent, args: number) {
    BrowserWindow.getAllWindows()
      .filter((x) => x.id === args)
      .shift()
      ?.maximize();
  }

  @Channel(app.minimize)
  static minimize(_event: Electron.IpcMainEvent, args: number) {
    BrowserWindow.getAllWindows()
      .filter((x) => x.id === args)
      .shift()
      ?.maximize();
  }

  @Channel(app.unMaximize)
  static unmaximize(_event: Electron.IpcMainEvent, args: number) {
    BrowserWindow.getAllWindows()
      .filter((x) => x.id === args)
      .shift()
      ?.unmaximize();
  }

  @Channel(app.quit)
  static reset(_event: Electron.IpcMainEvent) {
    Electron.app.quit();
  }
}
