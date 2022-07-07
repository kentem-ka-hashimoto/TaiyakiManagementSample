import { Taiyaki } from './taiyaki';
import taiyakiKind from '../Types/kind.js';
import Size from '../Types/size.js';
import { UsuTaiyaki } from './usuTaiyaki.js';
import { CusTaiyaki } from './cusTaiyaki.js';
import { DxTaiyaki } from './dxTaiyaki.js';

export class TaiyakiManager {
  private _taiyakiArr: Taiyaki[] = [];
  constructor() {}

  public get taiyakiArr() {
    return this._taiyakiArr;
  }

  public remove(index: number): void {
    this._taiyakiArr.splice(index, 1);
  }

  public add(taiyaki: Taiyaki) {
    this._taiyakiArr.push(taiyaki);
  }

  public static createTaiyaki(kind: taiyakiKind, size: Size):Taiyaki {
    switch (kind) {
      case taiyakiKind.Usually:
        return new UsuTaiyaki(size);
      case taiyakiKind.Custard:
        return new CusTaiyaki(size);
      case taiyakiKind.Deluxe:
        return new DxTaiyaki(size);
    }
  }
}
