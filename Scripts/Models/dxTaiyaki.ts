import { Taiyaki } from './taiyaki';
import taiyakiKind from '../Types/kind.js';
import Size from '../Types/size.js';

export class DxTaiyaki implements Taiyaki {
  private _kind: taiyakiKind = taiyakiKind.Deluxe;
  private _name: string = 'デラックスたい焼き';
  private _content: string = '生クリームとカスタード';
  constructor(private _size: Size) {
    if (this._size === Size.S || this._size === Size.M) {
      throw new Error('The value is abnormal');
    }
  }

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
    if (value === Size.S || value === Size.M) {
      throw new Error('The value is abnormal');
    }
    this._size = value;
  }

  getPrice(): number {
    return 300;
  }
}
