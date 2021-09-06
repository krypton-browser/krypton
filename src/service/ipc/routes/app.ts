import electron, { BrowserWindow } from 'electron';
import Channel from '../ipc';
import { app } from '../../../channels';

export default class {
  @Channel(app.maximize)
  static maximize() {
    /*
    BrowserWindow.getAllWindows()
      .filter((x) => x.id === args)
      .shift()
      ?.maximize();
     */
    BrowserWindow.getAllWindows()[0].maximize();
  }

  @Channel(app.unMaximize)
  static un_maximize() {
    /*
    BrowserWindow.getAllWindows()
      .filter((x) => x.id === args)
      .shift()
      ?.unmaximize();
     */
    BrowserWindow.getAllWindows()[0].unmaximize();
  }

  @Channel(app.minimize)
  static minimize() {
    console.log(BrowserWindow.getAllWindows());
    /*
    BrowserWindow.getAllWindows()
      .filter((x) => x.id === args)
      .shift()
      ?.maximize();
    */
    BrowserWindow.getAllWindows()[0].minimize();
  }

  @Channel(app.quit)
  static quit() {
    electron.app.quit();
  }
}
