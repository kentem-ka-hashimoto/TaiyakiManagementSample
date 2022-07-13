import { TaiyakiManager } from './taiyakiManager.js';

export class Global {
  private static _taiyakiManager: TaiyakiManager;

  public static get taiyakiManager() {
    if (!this._taiyakiManager) {
      this._taiyakiManager = new TaiyakiManager();
    }
    return this._taiyakiManager;
  }

  public static getLocalStorage(): void {
    const items: string | null = localStorage.getItem('taiyakiData');
    if (items) {
      const taiyakiArr: string[] = JSON.parse(items);
      taiyakiArr.forEach((taiyaki: any) => {
        const instance = Global.taiyakiManager.createTaiyaki(taiyaki._kind, taiyaki._size);
        Global.taiyakiManager.add(instance);
      });
    }
  }
}
