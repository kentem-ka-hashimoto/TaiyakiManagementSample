import { Taiyaki } from './taiyaki';
import taiyakiKind from '../Types/taiyakiKind.js';
import taiyakiSize from '../Types/taiyakiSize.js';
import { NormalTaiyaki } from './normalTaiyaki.js';
import { CustardTaiyaki } from './custardTaiyaki.js';
import { DeluxeTaiyaki } from './deluxeTaiyaki.js';

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

  public createTaiyaki(kind: taiyakiKind, size: taiyakiSize): Taiyaki {
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
