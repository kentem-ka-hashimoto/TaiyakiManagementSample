import { Taiyaki } from '../Models/taiyaki';
import taiyakiKind from '../Types/kind.js';
import Size from '../Types/size.js';

export class CustardTaiyaki implements Taiyaki {
  private _kind: taiyakiKind = taiyakiKind.Custard;
  private _name: string = 'カスタード';
  private _content: string = 'カスタード';
  constructor(private _size: Size) {}

  public get kind() {
    return this._kind;
  }

  public get name() {
    return this._name;
  }

  public get content() {
    return this._content;
  }

  public get size() {
    return this._size;
  }

  public set size(value: Size) {
    this._size = value;
  }

  public getPrice(): number {
    switch (this._size) {
      case Size.S:
        return 150;
      case Size.M:
        return 200;
      case Size.L:
        return 250;
    }
  }
}
