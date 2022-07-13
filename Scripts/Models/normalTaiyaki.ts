import { Taiyaki } from './taiyaki';
import taiyakiKind from '../Types/kind.js';
import taiyakiSize from '../Types/size.js';

export class NormalTaiyaki implements Taiyaki {
  private _kind: taiyakiKind = taiyakiKind.Usually;
  private _name: string = '通常たい焼き';
  private _content: string = 'あんこ';
  constructor(private _size: taiyakiSize) {}

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

  public set size(value: taiyakiSize) {
    this._size = value;
  }

  public getPrice(): number {
    switch (this._size) {
      case taiyakiSize.S:
        return 100;
      case taiyakiSize.M:
        return 150;
      case taiyakiSize.L:
        return 200;
    }
  }
}
