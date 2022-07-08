import { TaiyakiManager } from './taiyakiManager.js';

export class Global {
  private static _taiyakiArrMg: TaiyakiManager;

  public static get taiyakiArrMg() {
    if (!this._taiyakiArrMg) {
      this._taiyakiArrMg = new TaiyakiManager();
    }
    return this._taiyakiArrMg;
  }

  public static getLocalStorage(): void {
    const items: string | null = localStorage.getItem('taiyakiDate');
    if (items) {
      const taiyakiArr: string[] = JSON.parse(items);
      taiyakiArr.forEach((taiyaki: any) => {
        const instance = Global.taiyakiArrMg.createTaiyaki(taiyaki._kind, taiyaki._size);
        Global.taiyakiArrMg.add(instance);
      });
    }
  }
}
