import { TaiyakiManager } from './taiyakiManager.js';

export class Global {
  private static _taiyakiMg: TaiyakiManager;

  public static get taiyakiMg() {
    if (!this._taiyakiMg) {
      this._taiyakiMg = new TaiyakiManager();
    }
    return this._taiyakiMg;
  }

  public static getLocalStorage(): void {
    const items: string | null = localStorage.getItem('taiyakiDate');
    if (items) {
      const taiyakiArr: string[] = JSON.parse(items);
      taiyakiArr.forEach((taiyaki: any) => {
        const instance = Global.taiyakiMg.createTaiyaki(taiyaki._kind, taiyaki._size);
        Global.taiyakiMg.add(instance);
      });
    }
  }
}
