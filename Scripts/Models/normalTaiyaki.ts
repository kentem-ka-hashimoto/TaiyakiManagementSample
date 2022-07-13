import { Taiyaki } from './taiyaki';
import taiyakiKind from '../Types/kind.js';
import Size from '../Types/size.js';

export class NormalTaiyaki implements Taiyaki {
  private _kind: taiyakiKind = taiyakiKind.Usually;
  private _name: string = '通常たい焼き';
  private _content: string = 'あんこ';
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
        return 100;
      case Size.M:
        return 150;
      case Size.L:
        return 200;
    }
  }
}
