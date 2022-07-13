import { Taiyaki } from './taiyaki';
import taiyakiKind from '../Types/kind.js';
import Size from '../Types/size.js';
import { NormalTaiyaki } from './usuTaiyaki.js';
import { CustardTaiyaki } from './cusTaiyaki.js';
import { DeluxeTaiyaki } from './dxTaiyaki.js';

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

  getTotalPrice(): number {
    let sum: number = 0;
    this._taiyakiArr.forEach((taiyaki) => {
      sum += taiyaki.getPrice();
    });
    return sum;
  }

  public createTaiyaki(kind: taiyakiKind, size: Size): Taiyaki {
    switch (kind) {
      case taiyakiKind.Usually:
        return new NormalTaiyaki(size);
      case taiyakiKind.Custard:
        return new CustardTaiyaki(size);
      case taiyakiKind.Deluxe:
        return new DeluxeTaiyaki(size);
    }
  }
}
