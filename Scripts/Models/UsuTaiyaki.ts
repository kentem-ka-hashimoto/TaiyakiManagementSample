import { Taiyaki } from './taiyaki';
import taiyakiKind from '../Types/kind.js';
import Size from '../Types/size.js';

export class UsuTaiyaki implements Taiyaki {
  private _kind: taiyakiKind = taiyakiKind.Usually;
  private _name: string = '通常たい焼き';
  private _content: string = 'あんこ';
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
        return 100;
      case Size.M:
        return 150;
      case Size.L:
        return 200;
    }
  }
}
