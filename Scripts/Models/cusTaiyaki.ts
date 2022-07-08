import { Taiyaki } from '../Models/taiyaki';
import taiyakiKind from '../Types/kind.js';
import Size from '../Types/size.js';

export class CusTaiyaki implements Taiyaki {
  private _kind: taiyakiKind = taiyakiKind.Custard;
  private _name: string = 'カスタード';
  private _content: string = 'カスタード';
  constructor(private _size: Size) {}

  get kind() {
    return this._kind;
  }

  get name() {
    return this._name;
  }

  get content() {
    return this._content;
  }

  get size() {
    return this._size;
  }

  set size(value: Size) {
    this._size = value;
  }

  getPrice(): number {
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
